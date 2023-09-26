import MigrationRepository from "../lib/migration_repository.js";
import proxyquire from "proxyquire";
const proxy = proxyquire.noCallThru();

describe("MigrationRepository", function () {
  beforeEach(function () {
    proxy.load("../lib/migration_repository.js", {
      "./maria_db_connector.js": {
        getDatabaseName: function () {
          return "test";
        },
      },
    });
  });

  it('returns database name', function () {
    const version = MigrationRepository.getExistingVersions();
  });
});
