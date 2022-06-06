function Time() {
    // Creating object of the Date class
    let date = new Date();
    // Get current hour
    let hour = date.getHours();
    // Get current minute
    let minute = date.getMinutes();
    // Get current second
    let second = date.getSeconds();   
    // Updating hour, minute, and second
    // if they are less than 10
    hour = update(hour);
    minute = update(minute);
    second = update(second);
    // Adding time elements to the div
    document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second;
    // Set Timer to 1 sec (1000 ms)
    setTimeout(Time, 1000);
}
// Function to update time elements if they are less than 10
// Append 0 before time elements if they are less than 10
function update(t) {
    if (t < 10) {
        return "0" + t;
    }
    else {
        return t;
    }
}
function GetInputTime(){
    let result=""
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    
    timeInput = document.getElementById("clock-time").value
    document.getElementById("time-place").innerHTML=timeInput
    
    
    let arrayTimeInput = String(timeInput).split(":")
    let inputHour = parseInt(arrayTimeInput[0])
    let inputMinutes = parseInt(arrayTimeInput[1])
    sec= TimeToSeconds(inputHour,inputMinutes)
    secActual= TimeToSeconds(hour,minute)
    resultSeconds= TimeSubstract(sec,secActual)
    result= TimeFormater(resultSeconds)
    console.log(result)
    document.getElementById("time-to-sleep").innerHTML=(result)    
}

function TimeToSeconds(hours,minutes){
    let h = hours
    let m = minutes    
    let s = (h*60*60)+(m*60);
    console.log(s)
    return s
}

function TimeSubstract(timeInputSeconds,timeActualSeconds){
    inputSeconds = timeInputSeconds;
    timeSeconds = timeActualSeconds;
    workers=1;
    workers=Array.from(document.getElementsByName("workers")).find(r => r.checked).value
    result= timeInputSeconds - timeActualSeconds ;
    result=result/workers
    return result
}

function TimeFormater(seconds){
    let s= Number(seconds)
    let hours = update(Math.floor(s / 3600));
    let minutes =update(Math.floor(s % 3600 / 60)) ;
    let textH= " horas"
    let textM= " minutes."
    if (isNaN(hours)) hours=0
    if (isNaN(minutes)) minutes=0
    if (hours==1) textH= "hour"
    if (minutes==1) textM ="minute"
    let result= `${hours} ${textH} ${minutes}${textM}`

    return result
}

Time();
GetInputTime();


