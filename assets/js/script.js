// Get current day using moment.js
let currentDay = moment().format("dddd, MMMM Do, YYYY");

// Set each timeblock in the daily schedule using moment.js
let hour9 = moment().hour(9);
let hour10 = moment().hour(10);
let hour11 = moment().hour(11);
let hour12 = moment().hour(12);
let hour13 = moment().hour(13);
let hour14 = moment().hour(14);
let hour15 = moment().hour(15);
let hour16 = moment().hour(16);
let hour17 = moment().hour(17);
let hour18 = moment().hour(18);

// Create an array of hour blocks for code generation
let hours = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];

// Get local storage data or set to empty
let events9 = JSON.parse(localStorage.getItem('hour9')) || "";
let events10 = JSON.parse(localStorage.getItem('hour10')) || "";
let events11 = JSON.parse(localStorage.getItem('hour11')) || "";
let events12 = JSON.parse(localStorage.getItem('hour12')) || "";
let events13 = JSON.parse(localStorage.getItem('hour13')) || "";
let events14 = JSON.parse(localStorage.getItem('hour14')) || "";
let events15 = JSON.parse(localStorage.getItem('hour15')) || "";
let events16 = JSON.parse(localStorage.getItem('hour16')) || "";
let events17 = JSON.parse(localStorage.getItem('hour17')) || "";

// Generate all timeblocks and insert saved local storage data
$.each(hours, function (index, value) {
    events = [events9, events10, events11, events12, events13, events14, events15, events16, events17]
    $(".container").append("<div class='row'><div class='col-2 hour text-right' id='hour" +
        (index + 9) + "'><span>" + value.format("h A") + "</span></div><div class='col-8 event-group' id='timeblock" +
        (index + 9) + "'><textarea class='events col-12' id='eventblock" + (index + 9) + "'>" + events[index] + "</textarea></div>" +
        "<div class='col-2 save-delete' id='save-delete" + (index + 9) + "'><i class='fas fa-save' title='Save Event'></i> <i class='fas fa-trash' title='Remove Event'></i></div></div></div>");
});

// Display current day
$("#currentDay").text(currentDay);

// Audit each time block to display past, current and future timeblocks
let auditTime = function () {
    currentTime = moment().format("hh:mm:ss");
    // $("#currentDay").text(currentTime);

    // Hour 9 Audit
    console.log(moment().isBetween(hour9, hour10))
    if (moment().isBetween(hour9, hour10)) {
        $("#timeblock9").addClass("present");
    }
    else if (moment().isAfter(hour10)) {
        $("#timeblock9").addClass("past");
    }
    else {
        $("#timeblock9").addClass("future");
    }

    // Hour 10 Audit
    if (moment().isBetween(hour10, hour11)) {
        $("#timeblock10").addClass("present");
    }
    else if (moment().isAfter(hour11)) {
        $("#timeblock10").addClass("past");
    }
    else {
        $("#timeblock10").addClass("future");
    }

    // Hour 11 Audit
    if (moment().isBetween(hour11, hour12)) {
        $("#timeblock11").addClass("present");
    }
    else if (moment().isAfter(hour12)) {
        $("#timeblock11").addClass("past");
    }
    else {
        $("#timeblock11").addClass("future");
    }

    // Hour 12 Audit
    if (moment().isBetween(hour12, hour13)) {
        $("#timeblock12").addClass("present");
    }
    else if (moment().isAfter(hour13)) {
        $("#timeblock12").addClass("past");
    }
    else {
        $("#timeblock12").addClass("future");
    }

    // Hour 13 Audit
    if (moment().isBetween(hour13, hour14)) {
        $("#timeblock13").addClass("present");
    }
    else if (moment().isAfter(hour14)) {
        $("#timeblock13").addClass("past");
    }
    else {
        $("#timeblock13").addClass("future");
    }

    // Hour 14 Audit
    if (moment().isBetween(hour14, hour15)) {
        $("#timeblock14").addClass("present");
    }
    else if (moment().isAfter(hour15)) {
        $("#timeblock14").addClass("past");
    }
    else {
        $("#timeblock14").addClass("future");
    }

    // Hour 15 Audit
    if (moment().isBetween(hour15, hour16)) {
        $("#timeblock15").addClass("present");
    }
    else if (moment().isAfter(hour16)) {
        $("#timeblock15").addClass("past");
    }
    else {
        $("#timeblock15").addClass("future");
    }

    // Hour 16 Audit
    if (moment().isBetween(hour16, hour17)) {
        $("#timeblock16").addClass("present");
    }
    else if (moment().isAfter(hour17)) {
        $("#timeblock16").addClass("past");
    }
    else {
        $("#timeblock16").addClass("future");
    }

    // Hour 17 Audit
    if (moment().isBetween(hour17, hour18)) {
        $("#timeblock17").addClass("present");
    }
    else if (moment().isAfter(hour18)) {
        $("#timeblock17").addClass("past");
    }
    else {
        $("#timeblock17").addClass("future");
    };
}
// End Audit



// Add delete event function for each time block
$("#save-delete9").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour9");
    $("#eventblock9").val("");
})
$("#save-delete10").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour10");
    $("#eventblock10").val("");
})
$("#save-delete11").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour11");
    $("#eventblock11").val("");
})
$("#save-delete12").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour12");
    $("#eventblock12").val("");
})
$("#save-delete13").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour13");
    $("#eventblock13").val("");
})
$("#save-delete14").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour14");
    $("#eventblock14").val("");
})
$("#save-delete15").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour15");
    $("#eventblock15").val("");
})
$("#save-delete16").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour16");
    $("#eventblock16").val("");
})
$("#save-delete17").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour17");
    $("#eventblock17").val("");
})
// End delete event functions


// Add save event function for each time block
$("#save-delete9").on("click", "i.fa-save", function () {
    let event9 = $("#eventblock9").val().trim();
    localStorage.setItem('hour9', JSON.stringify(event9));
})
$("#save-delete10").on("click", "i.fa-save", function () {
    let event10 = $("#eventblock10").val().trim();
    localStorage.setItem('hour10', JSON.stringify(event10));
})
$("#save-delete11").on("click", "i.fa-save", function () {
    let event11 = $("#eventblock11").val().trim();
    localStorage.setItem('hour11', JSON.stringify(event11));
})
$("#save-delete12").on("click", "i.fa-save", function () {
    let event12 = $("#eventblock12").val().trim();
    localStorage.setItem('hour12', JSON.stringify(event12));
})
$("#save-delete13").on("click", "i.fa-save", function () {
    let event13 = $("#eventblock13").val().trim();
    localStorage.setItem('hour13', JSON.stringify(event13));
})
$("#save-delete14").on("click", "i.fa-save", function () {
    let event14 = $("#eventblock14").val().trim();
    localStorage.setItem('hour14', JSON.stringify(event14));
})
$("#save-delete15").on("click", "i.fa-save", function () {
    let event15 = $("#eventblock15").val().trim();
    localStorage.setItem('hour15', JSON.stringify(event15));
})
$("#save-delete16").on("click", "i.fa-save", function () {
    let event16 = $("#eventblock16").val().trim();
    localStorage.setItem('hour16', JSON.stringify(event16));
})
$("#save-delete17").on("click", "i.fa-save", function () {
    let event17 = $("#eventblock17").val().trim();
    localStorage.setItem('hour17', JSON.stringify(event17));
})
// End save event functions

setInterval(function () {
    $(".event-group .events").each(function (index, el) {
        auditTime(el);
        //console.log(currentTime);
    });

}, (1000 * 60)); // 1000ms x 60 = 1 minute x 30 = 30 minutes

auditTime();