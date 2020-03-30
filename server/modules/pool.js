// requires
const pg = require( 'pg' );
// pool
const pool = new pg.Pool({
    host: 'localhost',
    database: 'to_do',
    port: 5432,
    max: 12,
    idleTimeoutMillis: 30000
}) // end pool
// exports
module.exports = pool;