import { Options, AppConfig } from '@remax/types';
import readManifest from '../../readManifest';
import { appConfigFile } from './paths';
import API from '../../API';

export const getAppConfig = (options: Options, api: API) => {
  const config = readManifest(appConfigFile(options), options.target!, false) as AppConfig;
  return api.onAppConfig(config);
};

export default getAppConfig;
