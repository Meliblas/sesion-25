/*const parrafo=document.querySelector("#demo");

let texto="";

for(let i=0;i>10;i++){
    texto=texto+i+"<br>"+"<h1>HOLA</h1>";
} 
parrafo.innerHTML=texto;*/

const parrafo=document.querySelector("#demo");
const felinos=["GATO","TIGRE","PUMA","PANTERA","LEON" ]
let texto="";
for(let a=0;a<felinos.length;a++)
{texto+=felinos[a]+"<br>"+`<img src="img/imagen${a}.jpg">`+"<br>";
}

parrafo.innerHTML=texto;

