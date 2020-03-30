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
    // ajax call GET to /items
    $.ajax({
        type: 'GET',
        url: '/items'
    }).then( function ( response ){
        console.log( 'back from server with:', response );
        // update DOM
        let el = $( '#tasksOut' );
        el.empty();
        for( let i=0; i<response.length; i++){
            let appendString = `<li`;
            if( response[i].complete ){
                appendString += ` class="complete" `
            }
            else{
                appendString += ` class="incomplete" `
            }
            appendString += `>${response[i].task}
                <button class="completeTaskButton" data-id="${response[i].id}">Complete</button>
                <button class="deleteTaskButton" data-id="${response[i].id}">delete</button>
            </li>`;
            el.append( appendString );
        } // end for
    }).catch( function( err ){
        console.log( err );
        alert( 'error getting tasks. see console' );
    })
} // end getTasks

function onReady(){
    $( '#addTaskButton' ).on( 'click', addTask );
    // get tasks from server
    getTasks();
} // end onReady
