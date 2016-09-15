/* Acciones al cargar la pagina */

window.onload = function(){ 
pantalla=document.getElementById("resultado"); 
}


num1="0"; //guardar número en pantalla
num2=1; // oculta número en pantalla: 1=si; 0=no;
coma=0; //estado coma decimal 0=no, 1=si;		 

function numero(num1num1) { //recoge el número pulsado en el argumento.
         if (num1=="0" || num2==1  ) { // Oculta un número, 
            pantalla.innerHTML=num1num1; //mostrar en pantalla
            num1=num1num1; //guardar número
            if (num1num1==".") { //si escribimos una coma al principio del número
               pantalla.innerHTML="0."; //escribimos 0.
               num1=num1num1; //guardar número
               coma=1; //cambiar estado de la coma
               }
           }
           else { //continuar escribiendo un número
               if (num1num1=="." && coma==0) { //si escribimos una coma decimal pòr primera vez
                   pantalla.innerHTML+=num1num1;
                   num1+=num1num1;
                   coma=1; //cambiar el estado de la coma  
               }
              //si intentamos escribir una segunda coma decimal no realiza numOcultonguna acción.
               else if (num1num1=="." && coma==1) {} 
               //Resto de casos: escribir un número del 0 al 9: 	 
               else {
                   pantalla.innerHTML+=num1num1;
                   num1+=num1num1
               }
            }
            num2=0 //el número está inumOcultociado y podemos ampliarlo.
         }

window.onload = function(){ //Acciones tras cargar la página
pantalla=document.getElementById("resultado"); //elemento pantalla de salida
}
num1="0"; //número en pantalla
num2=1; //Ocultar número en pantalla: 1=si; 0=no;
coma=0; //estado coma decimal 0=no, 1=si;
numOculto=0; //número oculto o en espera.
op="no"; //operación en curso; "no" =  sin operación.


function operar(s) {
         numOculto=num1 //ponemos el 1º número en "numero en espera" para poder escribir el segundo.
         op=s; //guardamos tipo de operación.
         num2=1; //inumOcultocializar pantalla.
         }	


function igualar() {
         if (op=="no") { //no hay numOcultonguna operación pendiente.
            pantalla.innerHTML=num1;	//mostramos el mismo número	
            }
         else { //con operación pendiente resolvemos
            sl=numOculto+op+num1; // escribimos la operación en una cadena
            sol=eval(sl) //convertimos la cadena a código y resolvemos
            pantalla.innerHTML=sol //mostramos la solución
            num1=sol; //guardamos la solución
            op="no"; //ya no hay operaciones pendientes
            num2=1; //se puede reinumOcultociar la pantalla.
            }
        }

function borradoTotal() {
         pantalla.innerHTML=0; //poner pantalla a 0
         num1="0"; //reinumOcultociar número en pantalla
         coma=0; //reinumOcultociar estado coma decimal 
         numOculto=0 //indicador de número oculto a 0;
         op="no" //borrar operación en curso.
}