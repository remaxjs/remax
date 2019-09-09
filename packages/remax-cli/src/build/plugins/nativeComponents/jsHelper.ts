import { pushArray } from './util';

const jsHelpers: string[] = [];

export const getJsHelpers = () => jsHelpers;

export default (id: string) => {
  pushArray(jsHelpers, id);
};
