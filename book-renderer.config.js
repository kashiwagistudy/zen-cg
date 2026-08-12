// To see documents, run "npm run plugins-docs"
const bookRendererPlugins = require('@progedu/book-renderer-plugins');

module.exports = {
  repositoryName: 'progedu/zen-text-template',
  buildForNewCMS: true,
  courseType: 'zen_university',

  ignoreComponentError: true,

  managementSpreadsheets: ['*.{xlsx,csv}'],

  // プラグインの読み込み
  plugins: [
    bookRendererPlugins.loadRecommendedPlugins({
      excludePlugins: [ 'share-button' ]
    }),
    bookRendererPlugins.loadHighlightPrisma(),
  ],

  // テンプレートに assets フォルダ内のファイルを自動追加
  importAssetsToTemplateAutomatically: true,
};