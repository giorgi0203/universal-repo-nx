
require('ts-node').register();
const path = require('path');
const { Seeder } = require('mongo-seeding');

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/universalDB';
const config = {
  database: mongoURL,
  dropDatabase: true,
};
const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(
  path.resolve('apps/universal-back/src/db/seeders'),
  {
    extensions: ['ts'],
    transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
  },
);

seeder
  .import(collections)
  .then(() => {
    console.log('Success');
  })
  .catch((err) => {
    console.log('Error', err);
  });