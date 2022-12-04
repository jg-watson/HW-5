//logic for buttons

$(document).ready(function(){

    $(':button').on('click', function (e) {
        e.preventDefault();
        var value = $('description').val();
        var time =$(this).attr('id'); 
        console.log('value');

// load data to local storage
localStorage.setItem(value, time);

});
});

// data retrieval
var input = setInterval();

$('#time-block-9.description').val(localStorage.getItem('time-block-9'));
$('#time-block-10.description').val(localStorage.getItem('time-block-10'));
$('#time-block-11.description').val(localStorage.getItem('time-block-11'));
$('#time-block-12.description').val(localStorage.getItem('time-block-12'));
$('#time-block-13.description').val(localStorage.getItem('time-block-13'));
$('#time-block-14.description').val(localStorage.getItem('time-block-14'));
$('#time-block-15.description').val(localStorage.getItem('time-block-15'));
$('#time-block-16.description').val(localStorage.getItem('time-block-16'));
$('#time-block-17.description').val(localStorage.getItem('time-block-17'));




//will display current day and month, from moment.js
$('#currentDay').text(moment().format('dddd, MMMM Do'));