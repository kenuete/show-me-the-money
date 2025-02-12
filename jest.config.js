export default {
  projects: [
    {
        displayName: 'frontend',
        preset: 'ts-jest',
        testEnvironment: 'jsdom',
        moduleNameMapper: {
          '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        },
        setupFilesAfterEnv: ['./jest.setup.ts'],
        transform: {
          '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }],
        },
        testMatch: ['**/src/**/__tests__/**/*.[jt]s?(x)', '**/src/**/?(*.)+(spec|test).[tj]s?(x)'],
        coveragePathIgnorePatterns: [
          '/node_modules/',
          '\\.styles\\.(js|ts|tsx)$', // Ignore any .styles.js/ts/tsx files
          // Add more patterns as needed
        ],  
      },
    {
      // Backend (Express) - using node for Express tests
      displayName: 'backend',
      preset: "ts-jest/presets/default-esm",
      testEnvironment: 'node', // Use Node.js environment for backend tests
      setupFilesAfterEnv: ['./jest.setup.ts'],
      extensionsToTreatAsEsm: [".ts"],
      transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }],
      },
      moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.js$": "$1",
      },      
      testMatch: ['**/server/**/__tests__/**/*.[jt]s?(x)', '**/server/**/?(*.)+(spec|test).[tj]s?(x)'],
      testPathIgnorePatterns: [
        '/node_modules/',
        '/dist/',
      ],
      coveragePathIgnorePatterns: [
        '/node_modules/',
        '/dist/',
      ],
    },
  ],
}