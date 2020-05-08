import { Options, AppConfig, Platform } from '@remax/types';
import readManifest from '../../readManifest';
import { appConfigFile } from './paths';

export const getAppConfig = (options: Options) => {
  return readManifest(appConfigFile(options), Platform.web, true) as AppConfig;
};

export default getAppConfig;
