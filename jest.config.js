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
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
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
