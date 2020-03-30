// requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const items = require( './routes/items' );
// globals
const port = 5000;
// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( '/items', items );
// spin up server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
})