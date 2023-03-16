const enddate="8 APRIL 2023 12:00:00 pm"

document.getElementById("enddate").innerText=enddate;
const inputs=document.querySelectorAll("input")


function clock(){
    const end=new Date(enddate)
    const now=new Date()
    const result=(end-now)/1000;

    if(result<0) return;

    inputs[0].value= Math.floor(result/3600/24);
    inputs[1].value= Math.floor(result/3600)%24;
    inputs[2].value= Math.floor(result/60)%60;
    inputs[3].value= Math.floor(result)%60;
}

//calling function

clock()
setInterval(
    ()=>{
        clock()

    },
    1000
)
