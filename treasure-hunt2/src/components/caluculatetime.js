var startTime;
var endTime;

export function calculateStartTime  (time1)  {
  if(time1){
  startTime = time1;
  // console.log( "Starttime : ",startTime);
}
}
export function calculateEndTime  (time2) {
  if(time2){
  endTime = time2;
  // console.log("Endtime : ",endTime);
}
}

export function totalTime() 
{
    const difference = Math.abs(endTime - startTime) / 1000; // Convert to seconds
    const days = Math.floor(difference / 86400);
    const hours = Math.floor((difference % 86400) / 3600);
    const minutes = Math.floor((difference % 3600) / 60);
    const seconds = Math.floor(difference % 60);
  
    return {
      days,
      hours,
      minutes,
      seconds
    };

}


