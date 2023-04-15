// eslint-disable-next-line no-undef
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: ["node_modules", "src"],
  testPathIgnorePatterns: ["/node_modules/"],
  collectCoverage: true,
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  modulePaths: ["<rootDir>/src", "<rootDir>/.jest"],
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/.jest/mocks/fileMock.ts",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@assets/(.*)$": "<rootDir>/src/assets/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@mocks/(.*)$": "<rootDir>/src/mocks/$1",
    "^@screens/(.*)$": "<rootDir>/src/screens/$1",
    "^@stories/(.*)$": "<rootDir>/src/stories/$1",
    "^@styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@templates/(.*)$": "<rootDir>/src/templates/$1",
    "^@tests/(.*)$": "<rootDir>/src/tests/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1"
  },
  collectCoverageFrom: [
    "src/**/*.ts(x)?",
    "!src/App.tsx",
    "!src/main.tsx",
    "!src/vite-env.d.ts",
    "!src/**/*.stories.ts(x)",
    "!src/**/*.d.ts",
    "!src/components/index.ts",
    "!src/stories/*.ts(x)",
    "!src/@types/*d.ts",
    "!src/screens/index.ts",
    "!src/styles/index.ts",
    "!src/styles/global-styles.ts",
    "!src/styles/**/*.ts(x)",
    "!src/templates/index.ts",
    "!src/utils/*.ts",
    "!src/mocks/*.ts"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  }
};
