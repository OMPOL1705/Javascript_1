let time = ()=>{
    let d = new Date()
    let h = d.getHours()
    let m = d.getMinutes()
    let sec = d.getSeconds() 
    var hh = document.getElementById("h");
    hh.innerText = h; 
    var mm = document.getElementById("m");
    mm.innerText = m; 
    var ss = document.getElementById("s");
    ss.innerText = sec; 

}
setInterval(time,1000);

