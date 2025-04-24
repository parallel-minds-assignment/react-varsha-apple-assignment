import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }]
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/src/tests/_mocks_/fileMock.ts',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },  
};

export default config;
