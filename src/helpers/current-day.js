export function getCurrentdate(){
    
//     let newDate = new Date();
//     let date = newDate.getDate();
//     let month = newDate.getMonth();
//     let year = newDate.getFullYear();

//     return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
var today  = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("us-EN", options);

    return day;

}