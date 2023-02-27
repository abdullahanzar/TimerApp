let ins, inh, inm;
let dh, dm, ds;
let alarm = new Audio('horse.wav');

function getValues() {
    ins = document.getElementById("ins").value;
    inh = document.getElementById("inh").value;
    inm = document.getElementById("inm").value;
}

function display(hours, minutes, seconds) {
    dh = document.getElementById("h");
    dm = document.getElementById("m");
    ds = document.getElementById("s");
    dh.innerHTML = `${hours}`;
    dm.innerHTML = `${minutes}`;
    ds.innerHTML = `${seconds}`;
}

function destroy() {
    let set = document.getElementById("set");
    set.remove();
}

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
        else if(sec==0 && min==0 && sec==0) {
        clearInterval(call);
        alarm.play();
        alert('Timer Over. Can\'t help with the horse sound though, it\' too funny.');
        }
        display(hours, min, sec);
        console.log(sec + " " + min + " " + hours);
    }
    const call = setInterval(this.calc, 1000);
}

function start() {
    getValues();
    destroy();
    const timer = new createTimer(ins, inh, inm);
    timer.call;
}

