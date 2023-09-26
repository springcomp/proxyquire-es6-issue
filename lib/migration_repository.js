'use strict';

import getDatabaseName from './maria_db_connector.js';

export default class MigrationRepository {
    getExistingVersions() {
        return getDatabaseName();
    }
}