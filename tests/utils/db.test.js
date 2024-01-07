/* eslint-disable import/no-named-as-default */
import dbClient from '../../db/file_managerdb';

describe('+ DBClient utility', () => {
  before(function (done) {
    this.timeout(10000);
    Promise.all([dbClient.usersCollection(), dbClient.filesCollection()])
      .then(([usersCollection, filesCollection]) => {
        Promise.all([
          usersCollection.deleteMany({}),
          filesCollection.deleteMany({}),
        ])
          .then(() => done())
          .catch((deleteErr) => done(deleteErr));
      })
      .catch((connectErr) => done(connectErr));
  });

  // eslint-disable-next-line jest/prefer-expect-assertions
  it('+ Client is alive', () => {
    expect(dbClient.isAlive()).to.equal(true);
  });

  // eslint-disable-next-line jest/prefer-expect-assertions
  it('+ nbUsers returns the correct value', async () => {
    expect(await dbClient.nbUsers()).to.equal(0);
  });

  // eslint-disable-next-line jest/prefer-expect-assertions
  it('+ nbFiles returns the correct value', async () => {
    expect(await dbClient.nbFiles()).to.equal(0);
  });
});
