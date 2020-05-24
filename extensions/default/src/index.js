import getCommandsModule from './getCommandsModule.js';
import getContextModule from './getContextModule.js';
import getDataSourcesModule from './getDataSourcesModule.js';
import getLayoutTemplateModule from './getLayoutTemplateModule.js';
import getPanelModule from './getPanelModule.js';
import getSopClassHandlerModule from './getSopClassHandlerModule.js';
import getToolbarModule from './getToolbarModule.js';
import id from './id';

export default {
  /**
   * Only required property. Should be a unique value across all extensions.
   */
  id,
  getCommandsModule,
  getContextModule,
  getDataSourcesModule,
  getLayoutTemplateModule,
  getPanelModule,
  getSopClassHandlerModule,
  getToolbarModule,
};
