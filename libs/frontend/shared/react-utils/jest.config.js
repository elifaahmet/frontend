module.exports = {
  displayName: 'frontend-shared-react-utils',
  preset: '../../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest'
  },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/frontend/shared/react-utils'
};
