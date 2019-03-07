const ERROR = 2;

module.exports = {
  env: {
    'browser': true,
    'es6': true,
    'node': true,
  },
  extends: ['@kiwicom/eslint-config'],
  rules: {
    'no-restricted-imports': [
      ERROR,
      {
        paths: [
          {
            name: 'react-relay',
            message: 'Use @kiwicom/relay instead.',
          },
        ],
      },
    ],
  },
  parser: 'babel-eslint',
};
