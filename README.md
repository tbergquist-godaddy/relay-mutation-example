# Relay mutation example

This applications shows simple usage of range_add, range_delete and updater function

# Install and run

- clone repo and do yarn install
- head over to `https://tbergq-graphql.now.sh/graphql/` and create your user with `createUser` mutation
- then login with `tvHelperLogin` mutation and copy the token. 
- create a new file `src/token.js`

```
// @flow

const token = 'token-from-login-mutation';
export default token;
```

- then do yarn start


## Docs

- [Relay mutation](https://facebook.github.io/relay/docs/en/mutations.html)
- [Range_add](https://facebook.github.io/relay/docs/en/mutations.html#range-add)
- [Range_delete](https://facebook.github.io/relay/docs/en/mutations.html#range-delete)
