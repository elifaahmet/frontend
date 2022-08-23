const { getJestProjects } = require('@nrwl/jest');
  
/** @format */

module.exports = {"projects": [...getJestProjects(), '<rootDir>/apps/markdown-processor', '<rootDir>/apps/marketing', ]
  
};
