console.log("inicio")
setTimeout(()=>{
    console.log("me ejecuté tarde");
}, 2000);
console.log("fin")

const temporizador= setTimeout(()=>{
    console.log("nunca me imprimiré:C");  
},2000);

clearTimeout(temporizador);
console.log("cancele el temporizador")

let segundos = 0;  


const reloj = setInterval(() => {
    segundos = segundos + 1;
    console.log("segundos = " + segundos);

    if (segundos === 10) {
        clearInterval(reloj);
    }
}, 1000);

