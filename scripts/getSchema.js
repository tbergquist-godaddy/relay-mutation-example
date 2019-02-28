// @flow

import fs from 'fs';
import path from 'path';
import fetch from '@kiwicom/fetch';
import {
  buildClientSchema,
  getIntrospectionQuery,
  printSchema,
} from 'graphql/utilities';

(async () => {
  const res = await fetch('https://tbergq-graphql.now.sh/graphql/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getIntrospectionQuery(),
    }),
  });
  const schemaJSON = await res.json();
  const clientSchema = printSchema(buildClientSchema(schemaJSON.data));
  fs.writeFileSync(path.join(__dirname, '..', 'schema.graphql'), clientSchema);
})();
