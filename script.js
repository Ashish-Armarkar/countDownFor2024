const endDate = "01 january 2024 00:00 AM"

document.getElementById("end-date").innerText = endDate;

const fun= () =>{
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if(diff > 0){
    const day = Math.floor(diff/3600/24);
    const hours = Math.floor((diff/3600)%24);
    const min = Math.floor((diff/60)%60);
    const sec = Math.floor(diff % 60);
    document.getElementById("day").value = day;
    document.getElementById("hour").value = hours;
    document.getElementById("minutes").value = min;
    document.getElementById("seconds").value = sec;
    }
    else{
        return;
    }
}
fun(); //Initial call

setInterval(
    ()=>{
        fun();
    },
    1000
)