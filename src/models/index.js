// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Opportunities, Competitors, ConnectionDescription } = initSchema(schema);

export {
  Opportunities,
  Competitors,
  ConnectionDescription
};