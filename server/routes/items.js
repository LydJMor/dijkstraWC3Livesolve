// requries
const express = require( 'express' );
const router = express.Router();

// get
router.get( '/', ( req, res )=>{
    console.log( 'in /items GET' );
    res.send( 'meow' );
}) //end GET
// post
router.post( '/', ( req, res )=>{
    console.log( 'in /items POST:', req.body );
    // create a query string
    // run the query
    // if successful send status 201
    // end log error & send 500
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