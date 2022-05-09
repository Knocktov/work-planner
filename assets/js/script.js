// Get current day using moment.js
let currentDay = moment().format("dddd, MMMM Do, YYYY");

//Create Hours Array
let hours = []
let events = []
for(let i=9;i<19;i++){
    hours.push(moment().hour(i));
    events.push(JSON.parse(localStorage.getItem(`hour${i}`)) || "") 
}

// Generate all timeblocks and insert saved local storage data
for(let i=1;i<9;i++){
    $(".container").append("<div class='row'><div class='col-2 hour text-right' id='hour" +
        (i + 9) + "'><span>" + hours[i].format("h A") + "</span></div><div class='col-8 event-group' id='timeblock" +
        (i + 9) + "'><textarea class='events col-12' id='eventblock" + (i + 9) + "'>" + events[i] + "</textarea></div>" +
        "<div class='col-2 save-delete' id='save-delete" + (i + 9) + "'><i class='fas fa-save' title='Save Event'></i> <i class='fas fa-trash' title='Remove Event'></i></div></div></div>");
}

// Display current day
$("#currentDay").text(currentDay);

// Audit each time block to display past, current and future timeblocks
let auditTime = function () {
    currentTime = moment().format("hh:mm:ss");
    for(let i=0;i<hours.length;i++){
        if (moment().isBetween(hours[i], hours[i+1])){
            $(`#timeblock${i+9}`).addClass("present");
        }
        else if (moment().isBetween(hours[0], hours[i])){
            $(`#timeblock${i+9}`).addClass("future");
        }
        else {
            $(`#timeblock${i+9}`).addClass("past");
        }
    }
}

// End Audit

for(let i=9;i<18;i++){
    $(`#save-delete${i}`).on("click", "i.fa-trash", function () {
        localStorage.removeItem(`hour${i}`);
        $(`#eventblock${i}`).val("");
    })
    $(`#save-delete${i}`).on("click", "i.fa-save", function () {
        events[i] = $(`#eventblock${i}`).val().trim();
        localStorage.setItem(`hour${i}`, JSON.stringify(events[i]));
    })
}

setInterval(function () {
    $(".event-group .events").each(function (index, el) {
        auditTime(el);
        //console.log(currentTime);
    });

}, (1000 * 60)); // 1000ms x 60 = 1 minute x 30 = 30 minutes

auditTime();