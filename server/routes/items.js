// requries
const express = require( 'express' );
const router = express.Router();
const pool = require( '../modules/pool' );
// get
router.get( '/', ( req, res )=>{
    console.log( 'in /items GET' );
    let queryString = `SELECT * FROM "to-do"`;
    // run the query
    pool.query( queryString).then( ( result )=>{
        // if successful send status 201
        res.send( result.rows );
    }).catch( ( err )=>{
        // end log error & send 500
        console.log( err );
        res.sendStatus( 500 );
    }) // end query
}) //end GET
// post
router.post( '/', ( req, res )=>{
    console.log( 'in /items POST:', req.body );
    // create a query string
    let queryString = `INSERT INTO "to-do" (task) VALUES ($1)`;
    // run the query
    pool.query( queryString, [ req.body.task ] ).then( ( result )=>{
        // if successful send status 201
        res.sendStatus( 201 );
    }).catch( ( err )=>{
        // end log error & send 500
        console.log( err );
        res.sendStatus( 500 );
    }) // end query
}) //end POST
// put
router.put( '/', ( req, res )=>{
    console.log( 'in /items PUT' );
    res.send( 'chirp' );
}) //end PUT
// delete
router.delete( '/', ( req, res )=>{
    console.log( 'in /items DELETE' );
    res.send( 'ribbet' );
}) //end DELETE
// exports
module.exports = router;