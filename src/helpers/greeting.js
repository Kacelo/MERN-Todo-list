export function greetUser(){
    var day = new Date();

    var hour = day.getHours();

    var greeting;

    if (hour >= 0 && hour < 12) {
       greeting= "Good Morning";
    } else if (hour === 12) {
        greeting="Good Noon";
    } else if (hour >= 12 && hour <= 17) {
        greeting="Good Afternoon";
    } else {
        greeting ="Good Evening!";
    }

    return greeting
}