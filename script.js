//logic for buttons

$(document).ready(function(){

    $(':button').on('click', function (e) {
        e.preventDefault();
        var value = $(this).siblings('.description').val();
        var time =$(this).parent().attr('id'); 
        alert('Event saved!');
// load data to local storage
localStorage.setItem( time, value);

});
});

//input retrieval

$('#time-block-9.description').val(localStorage.getItem('time-block-9'));
$('#time-block-10.description').val(localStorage.getItem('time-block-10'));
$('#time-block-11.description').val(localStorage.getItem('time-block-11'));
$('#time-block-12.description').val(localStorage.getItem('time-block-12'));
$('#time-block-13.description').val(localStorage.getItem('time-block-13'));
$('#time-block-14.description').val(localStorage.getItem('time-block-14'));
$('#time-block-15.description').val(localStorage.getItem('time-block-15'));
$('#time-block-16.description').val(localStorage.getItem('time-block-16'));
$('#time-block-17.description').val(localStorage.getItem('time-block-17'));

//color change: past/present/future classes

$(document).ready(function(){
 $(':button').click(function(){
    $('description').addClass('present');
 });
});

//will display current day and month, from moment.js
$('#currentDay').text(moment().format('dddd, MMMM Do'));