const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/portfolio',
    '<rootDir>/apps/game',
    '<rootDir>/libs/osa',
    '<rootDir>/apps/demo',
    '<rootDir>/libs/inputs',
    '<rootDir>/apps/universal-back',
  ],
};
