//Pagina de inicio
let nroAdivinanza=0;
let resultado=0; 
let F_adiv =[{
   pregunta:"¿Qué cosa es que cuanto más le quitas más grande es?",
   opciones:["la tiza","El agujero","El rencor","Un Dico Rigido"],
   respuesta:1,
   }];
   F_adiv.push ({pregunta:"¿Qué es lo que se hace de noche, que no se puede hacer de día?",Opciones:["Trasnochar","Delinquir","Tomar Sol","Ir al colegio"],respuesta:0}) 
   F_adiv.push ({pregunta:"El roer es mi trabajo, el queso mi aperitivo y el gato ha sido siempre mi más temido enemigo.",Opciones:["Paloma","Mosca","Perro","Raton"],respuesta:3}) 
   F_adiv.push ({pregunta:"Me rascan continuamente de forma muy placentera, mi voz es muy bien timbrada y mi cuerpo de madera.",Opciones:["La Flauta","El bombo","La Guitarra","La pandereta"],respuesta:1}) 
   F_adiv.push ({pregunta:" Viste de chaleco blanco, y también de negro frac, es un ave que no vuela, pero nada. ¿Qué será?",Opciones:["El Osoo Polar","El Pinguino","El cocodrilo","la nutria"],respuesta:1})        












$(document).ready(function(){
   
    
   
   
   const user=localStorage.getItem("usuario");
   if (user==null){
      localStorage.removeItem("usuario")
      $("#divRegistro").show();
      stop
   
   }
   else {
      
      $("#pUsuario").text(user);
      $("#divComenzar").show();
      
   }
   //id="divRegistro"
   $("#divReiniciar").show();


   $("#botonComenzar").click(function(){
       // $("#nombre").val("otro texto")
       $("#divComenzar").hide();
       $("#divComenzar2").show();

   });

    $("#botonAdivinanaza").click(function(){
      // $("#nombre").val("otro texto")
      $("#divComenzar2").hide();
      adivinanzas();
      

   });

   $("#botonChoice").click(function(){
      // $("#nombre").val("otro texto")
      $("#divComenzar2").hide();
      $("#divPreguntas").show();

   });
    $("#grabar").click(function(){
      // $("#nombre").val("otro texto")
     
      localStorage.setItem ("usuario","GASTON");
   });

   function adivinanzas(){
      nroAdivinanza=-1
      $("#divPreguntas").show();
      siguinteAdivinanza()
   };       
   $("#botonSiguinte").click(function(){
      // $("#nombre").val("otro texto")




      siguinteAdivinanza()
   });

   function siguinteAdivinanza(){
         
      if (nroAdivinanza==-1){
         alert(nroAdivinanza)
         
         
      }
//actualizar el nro de adivinanza en el circulo

      nroAdivinanza++;
      $("#idAdivinanza").text(nroAdivinanza+1);//redondel 
      $("#emCantadivi").text(F_adiv[nroAdivinanza].length);//contador de resultado
      //id="emNroAdiv" >0</em> de <em id="emCantadivi

      const preg=F_adiv[nroAdivinanza].pregunta;         
      $("#idPadivinanza").text(preg);
         
      for(i=0;i<F_adiv[nroAdivinanza].opciones.length;i++){
         //contRadio    
         let valu= F_adiv[nroAdivinanza].opciones[i];
         $('#contRadio')
            .append('<p><input class="radi" type="radio" id="radio"'+i+'" name="radios" value="'+i+'">'+valu+' </p>')
            
        }
            //<p><input class="radi" type="radio" name="disp" id="radios">Museo</p>


      //alert(F_adiv[nroAdivinanza].opciones[2])



   }


});
