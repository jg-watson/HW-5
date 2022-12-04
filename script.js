//logic for buttons

$(document).ready(function(){

    $(':button').on('click', function (e) {
        e.preventDefault();
        var value = $('description').val();
        console.log(value);
        

// load data to local storage
localStorage.setItem(value);

});
});

//logic to store data in timeblocks


//logic for local storage




//will display current day and month, from moment.js
$('#currentDay').text(moment().format('dddd, MMMM Do'));