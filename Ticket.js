var age = 65;
var ticket_fare = 800;

if ( age<=10){
    var discound = ticket_fare*50/100
    var after_discound = ticket_fare-discound
    console.log(after_discound)
    // console.log(discound)
}

else if (age>=60 ){
    var discound = ticket_fare*15/100
    var afterdiscound = ticket_fare - discound
    console.log(afterdiscound)
    // console.log(discound)
}

else {
    console.log(ticket_fare)
};