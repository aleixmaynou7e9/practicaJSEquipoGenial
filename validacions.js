function validacio(){

};

const input = document.getElementById('data_naixement').value;
console.log(input);

const dataNaixement = new Date(input);
console.log(dataNaixement);


const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);

const formatoMap = {
    dd: hoy.getDate(),
    mm: hoy.getMonth(),
    yyyy: hoy.getFullYear()-18
};
console.log(formatoMap);

if(dataNaixement >= data18){
    console.log("Es major a 18");
    
}else{
    console.log("Es menor de 18"); 
}



