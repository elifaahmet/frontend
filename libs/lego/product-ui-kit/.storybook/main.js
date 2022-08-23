const rootMain = require('../../../../.storybook/main');

const libraryMain = Object.assign({}, rootMain);

libraryMain.stories.push('../src/flows/**/*.stories.mdx');
rootMain.core = { ...rootMain.core, builder: 'webpack5' };
libraryMain.stories.push('../src/flows/**/*.stories.@(js|jsx|ts|tsx)');
libraryMain.addons.push('@react-theming/storybook-addon');

module.exports = libraryMain;
