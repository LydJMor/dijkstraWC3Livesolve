$( document ).ready( onReady );

function addTask(){
    console.log( 'in addTask' );
    // get user input
    //create an object to send
    const objectToSend = {
        task: $( '#taskIn' ).val()
    }
    console.log( 'sending:', objectToSend );
    // send obj to server
    $.ajax({
        type: 'POST',
        url: '/items',
        data: objectToSend
    }).then( function( response ){
        console.log( 'back from server with:', response );
        // update DOM if successful
        getTasks();
    }).catch( function( err ){
        alert( 'unable to add task. see console for more' );
        // show error if not
        console.log( err );
    }) // end AJAX
} // end addTask

function completeTask(){
    console.log( 'in completeTask' );
} // end completeTask

function deleteTask(){
    console.log( 'in deleteTask' );
} // end deleteTask

function getTasks(){
    console.log( 'in getTasks' );
} // end getTasks

function onReady(){
    $( '#addTaskButton' ).on( 'click', addTask );
    // get tasks from server
    getTasks();
} // end onReady
