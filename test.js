function createTimer(ins, inh, inm) {
    let hours=inh;
    let min=inm;
    let sec=ins;
    this.calc = function() {
        if(sec>0)
        sec--;
        else if(sec==0 && min>0) {
            min--;
            sec=60;
        }
        else if(sec==0 && min==0 && hours>0) {
            hours--;
            min=60;
            sec=60;
        }
        else if(sec==0 && min==0 && sec==0)
        clearInterval(call);
        display(hours, min, sec);
        console.log(sec + " " + min + " " + hours);
    }
    const call = setInterval(this.calc, 1000);
}

function display(hours, minutes, seconds) {
    let a = hours;
    let b = minutes;
    let c = seconds;
}
const timer = new createTimer(5, 0, 0);
timer.call;
console.log(dh + dm + ds);