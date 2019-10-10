import { pushArray } from './util';

const jsHelpers: string[] = [];

export const getJsHelpers = () => jsHelpers;

export default function jsHelper(id: string) {
  pushArray(jsHelpers, id);
}
