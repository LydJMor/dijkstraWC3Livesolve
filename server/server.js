// requires
const express = require( 'express' );
const app = express();
// globals
const port = 5000;
// uses

// spin up server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
})