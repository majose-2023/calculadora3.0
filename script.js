/*
Algoritmo Calculadora de Basal

El peso debe ser ingresado en kilogramos = kg 
Leer el peso ingresado, si es menor que 31kg, entonces analizar a cuál de los siguientes rangos corresponde:
Si es menor a 11;  volumen diario = peso ingresado * 100cc
Si es mayor que 10 y menor que 21; volumen diario = 1000cc + ((peso ingresado-10) * 50cc)
Si es mayor que 20; volumen diario = 1500cc +((peso ingresado-20) * 20cc)
Para calcular el flujo horario o mantenimiento: volumen diario/24 = Mantenimiento 
También debemos mostrar en pantalla el mantenimiento superior para eso usamos esta fórmula.
Mantenimiento superior = Mantenimiento superior * 1.5


En cambio si el peso ingresado es mayor que 30kg entonces:
Superficie corporal = ( (peso ingresado* 4) + 7) / (peso ingresado + 90)
Tenemos dos opciones.
Superficie corporal * 1500 = volumen diario
Superficie corporal * 2000 = volumen diario
Dar las dos opciones en pantalla para que el doctor decida cuál utilizar 
*/
const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const MET = document.getElementById('met');
const VOL = document.getElementById('vol');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO > 0 && DATO<=30){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        MET.innerHTML = 'Se calcula por Holliday-Segar: ';
        VOL.innerHTML = 'Vol. Diario: '+Math.round(flujo) +'cc';
        FLU.innerHTML = 'Mantenimiento: '+ Math.round(flujo/24) + ' cc/hr';
        MAN.innerHTML = 'Man. x 1.5: ' + Math.round((flujo/24)*1.5) + ' cc/hr';
        MET.style.display = 'block';
        VOL.style.display = 'block';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    }  else if (DATO>30){
        ERROR.style.display = 'none'
        let flujo = calcFlujo2(DATO);
        MET.innerHTML = 'Se calcula por Superficie corporal(SC): ';
        FLU.innerHTML = 'SC x 1500: ' + Math.round(flujo*1500) + ' cc';
        MAN.innerHTML = 'SC x 2000: ' + Math.round(flujo*2000) + ' cc';
        MET.style.display = 'block';
        VOL.style.display = 'none';
        FLU.style.display = 'block';
        MAN.style.display = 'block';

    }
    else  {
        ERROR.style.display = 'block';
        MET.style.display = 'none';
        VOL.style.display = 'none';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
    function calcFlujo(peso){
        let resto = peso;
        let flujo = 0;
        if (resto<=10){
            flujo = resto*100;
        }  else if(resto>10 && resto<=20){
            flujo = 1000 + ((resto-10)*50);
        } else if (resto>20){
            flujo = 1500 + ((resto-20)*20);
        }
        
        return flujo;
        
    }
    function calcFlujo2(peso){
        let flujo = 0;
        flujo = ((peso*4)+7)/(35+90);
        return flujo;
    }
    
})
