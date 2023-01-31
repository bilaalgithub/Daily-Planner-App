$( document ).ready(function() {
    console.log( "ready!" );

//Function to display current day in header
function getDateTime() {
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds(); 
    if(month.toString().length == 1) {
         month = '0'+month;
    }
    if(day.toString().length == 1) {
         day = '0'+day;
    }   
    if(hour.toString().length == 1) {
         hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
         minute = '0'+minute;
    }
    if(second.toString().length == 1) {
         second = '0'+second;
    }   
    var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;   
     return dateTime;
}

// example usage: realtime clock
setInterval(function(){
    currentTime = getDateTime();
    document.getElementById("digital-clock").innerHTML = currentTime;
}, 1000);

$(".saveBtn").on("click", function(){
    // set a variable to get values from text area and times
    var value = $(this).siblings(".reservation").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
});

$("#hr-9 .reservation").val(localStorage.getItem("hr-9"));
$("#hr-10 .reservation").val(localStorage.getItem("hr-10"));
$("#hr-11 .reservation").val(localStorage.getItem("hr-11"));
$("#hr-12 .reservation").val(localStorage.getItem("hr-12"));
$("#hr-13 .reservation").val(localStorage.getItem("hr-13"));
$("#hr-14 .reservation").val(localStorage.getItem("hr-14"));
$("#hr-15 .reservation").val(localStorage.getItem("hr-15"));
$("#hr-16 .reservation").val(localStorage.getItem("hr-16"));
$("#hr-17 .reservation").val(localStorage.getItem("hr-17"));


function hourUpdate(){
    var currentTime = today.getHours();

    $(".timeslot").each(function() {
        var blockTime = parseInt($(this).attr("id").split("-")[1]);
        if (blockTime < currentTime) {
            $(this).addClass("past")
        } else
        if (blockTime === currentTime) {
            $(this).removeClass("past").addClass("present")
        }
        else {$(this).removeClass("past", "present").addClass("future");
        }
    });
}
hourUpdate();
});