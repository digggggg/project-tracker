var jumboTime = $('#currentDay');

setInterval(updateJumbotron, 1000);

function updateJumbotron(){
        var timeNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        jumboTime.text(timeNow);
}

