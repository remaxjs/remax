import * as fs from 'fs';
import * as path from 'path';
import chalk from 'chalk';
import * as sander from 'sander';
import readdir from 'fs-readdir-recursive';
import diff from 'jest-diff';
import { sortBy } from 'lodash';
import * as eol from 'eol';
import winPath from '../src/winPath';

type Received = Array<{
  fileName: string;
  code: string;
}>;

function buildText(files: Received) {
  return sortBy(
    files.map(f => ({
      ...f,
      fileName: winPath(f.fileName),
    })),
    ['fileName']
  )
    .reduce((acc: string[], f) => {
      acc.push(
        `file: ${f.fileName}`,
        Array(80).join('-'),
        ...eol.split(f.code).map(l => `${f.fileName}: ${l}`),
        Array(80).join('-')
      );
      return acc;
    }, [])
    .join(eol.auto.toString());
}

expect.extend({
  toMatchOutput(received: Received, output) {
    const { isNot } = this;
    const snapshotState = (this as any).snapshotState;
    const actual = buildText(received);

    const options = {
      // Options for jest-diff
      diff: Object.assign({
        expand: false,
        contextLines: 5,
        aAnnotation: 'Snapshot',
      }),
    };

    if (fs.existsSync(output)) {
      const expected = buildText(
        readdir(output).map(fileName => ({
          fileName: fileName,
          code: eol.lf(
            sander.readFileSync(path.join(output, fileName)).toString()
          ),
        }))
      );

      if (isNot) {
        // The matcher is being used with `.not`

        if (!this.equals(actual, expected)) {
          // The value of `pass` is reversed when used with `.not`
          return { pass: false, message: () => '' };
        } else {
          snapshotState.unmatched++;

          return {
            pass: true,
            message: () =>
              `Expected received content ${chalk.red(
                'to not match'
              )} the output ${chalk.blue(output)}.`,
          };
        }
      } else {
        if (this.equals(actual, expected)) {
          return { pass: true, message: () => '' };
        } else {
          if (snapshotState._updateSnapshot === 'all') {
            sander.rimrafSync(output);
            received.forEach(file => {
              sander.writeFileSync(path.join(output, file.fileName), file.code);
            });

            snapshotState.updated++;

            return { pass: true, message: () => '' };
          } else {
            snapshotState.unmatched++;

            return {
              pass: false,
              message: () =>
                `Received content ${chalk.red(
                  "doesn't match"
                )} the output ${output}.\n\n${diff(
                  expected,
                  actual,
                  options.diff
                )}`,
            };
          }
        }
      }
    } else {
      if (
        !isNot &&
        (snapshotState._updateSnapshot === 'new' ||
          snapshotState._updateSnapshot === 'all')
      ) {
        received.forEach(file => {
          sander.writeFileSync(path.join(output, file.fileName), file.code);
        });
        snapshotState.added++;

        return { pass: true, message: () => '' };
      } else {
        snapshotState.unmatched++;

        return {
          pass: true,
          message: () =>
            `The output file ${chalk.blue(output)} ${chalk.bold.red(
              "doesn't exist"
            )}.`,
        };
      }
    }
  },
});
