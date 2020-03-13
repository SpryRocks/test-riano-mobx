import IUpdateManager from './IUpdateManager';
import UpdateManager from './UpdateManager';

const updateManager: IUpdateManager = new UpdateManager();

export {
  updateManager as UpdateManager,
};
