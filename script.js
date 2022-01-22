// when user opens planner, current day is displayed at top of calendar
var dateToday = moment().format("YYYY MMMM DD");
$("#currentDay").html(dateToday);

// when user clicks save button for time block, text for event is saved in local storage
$(document).ready(function () {
// saveBtn click listener
$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    console.log(text);
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
})
})

// when user refresh page, saved events persist
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#hour-18 .description").val(localStorage.getItem("hour-18"));
$("#hour-19 .description").val(localStorage.getItem("hour-19"));


// when user views time blocks for the day, each time block is color-coded to indicate past, present, or future
function hourUpdater() {
    var hourCurrent = moment().hours();
    $(".time-block").each(function(){
        var blockTime = parseInt($(this).attr("id").split("-")[1])
        if (blockTime < hourCurrent){
            $(this).addClass("past");
        }
        else if (blockTime === hourCurrent){
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    })
}
hourUpdater();

// when user clicks into a time block, user can enter an event





