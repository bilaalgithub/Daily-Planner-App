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

$("#hour-9 .reservation").val(localStorage.getItem("hour-9"));
$("#hour-10 .reservation").val(localStorage.getItem("hour-10"));
$("#hour-11 .reservation").val(localStorage.getItem("hour-11"));
$("#hour-12 .reservation").val(localStorage.getItem("hour-12"));
$("#hour-13 .reservation").val(localStorage.getItem("hour-13"));
$("#hour-14 .reservation").val(localStorage.getItem("hour-14"));
$("#hour-15 .reservation").val(localStorage.getItem("hour-15"));
$("#hour-16 .reservation").val(localStorage.getItem("hour-16"));
$("#hour-17 .reservation").val(localStorage.getItem("hour-17"));

// function to set background color to indicate time block is in past, present or future
function setTimeBlockBackground(textBlock, hour, ampm)
{
    var currentHour = parseInt(moment().format("H")); // Gets current hour in 24 hour format
    
    var hour24;

    //convert time in 24 hour format
    if (ampm  === "AM" && hour === 12) {
        
        hour24 = 0;
    
    } else if (ampm === "AM") {
       
        hour24 = hour;
    
    } else if (ampm == "PM" && hour === 12 ) {
        
        hour24 = hour;
    
    } else if (ampm === "PM" && hour >= 1) {
        
        hour24 = hour + 12;
    }

    // Set background    
    if(hour24 < currentHour){
        
        textBlock.classLists("past");
        // textBlock.attr("readOnly", true);

    }
    else if(hour24 > currentHour){
        
        textBlock.classLists("future");
    }
    else if(hour24 === currentHour){
        
        textBlock.classLists("present");
    }

}

function hourUpdate () {
    let currentHour = moment ().hours();

    for(let i = 0; i < $(".time-block").length; i++){
        let hour = parseInt($(".time-block")[i].getAttribute("id").split("-")[1])
        console.log(hour-1)
        console.log(currentHour)
        if(hour-1 < currentHour) {
            $(".time-block") [i].classLists.add("past")
        } else if(hour === currentHour) {
            $(".time-block")[i].classLists.add("past")
            $(".time-block")[i].classLists.remove("present")
        } else {
            $(".time-block")[i].classLists.remove("past")
            $(".time-block")[i].classLists.remove("present")
            $(".time-block")[i].classLists.add("future")
        }
    }
}

});