async function om() {
    
    let a = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Initializing the hack program");
        },2000)
    })

    let b = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Hacking ashish username");
        },5000)
    })

    let c = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Username found ashish17");
        },8000)
    })

    let d = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Connecting to Facebook");
        },10000)
    })

    let a1 = await a;
    document.getElementById("d1").innerHTML = a1;

    let b1 = await b;
    document.getElementById("d2").innerHTML = b1;

    let c1 = await c;
    document.getElementById("d3").innerHTML = c1;

    let d1 = await d;
    document.getElementById("d4").innerHTML = d1;

}

document.getElementsByClassName("display")[0].innerHTML = "Hackerman";
om();