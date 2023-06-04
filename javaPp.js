//Pagina de inicio



$(document).ready(function(){
   let nroAdivinanza=0
   let resultado=0  
   
   
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
  
          //$("#mostrar").click(function(){
          //  $("#elemento").text('otro texto');
           //   $("#elemento").show();
   function adivinanzas(){
      nroAdivinanza=0;
      $("#divPreguntas").show();
      let F_adiv =[{
         pregunta:"¿Qué cosa es que cuanto más le quitas más grande es?",
         opciones:["op1","op2","op3","op4"],
         respuesta:2
     }]  

    // F_producto.push ({nombre:"Libro jardineris",precio:345,descuento:10,precioVenta: function(){precioVenta=parseFloat(this.precio)-((parseFloat(this.precio)* parseFloat(this.descuento))/100);return precioVenta;}})        
   //id="idPadivinanza
   }       
   $("#botonSiguinte").click(function(){
      // $("#nombre").val("otro texto")
      siguinteAdivinanza()
   });

   function siguinteAdivinanza(){
      nroAdivinanza++;
               
      $("#idPadivinanza").text(F_adiv[nroAdivinanza].pregunta);

      alert(F_adiv[nroAdivinanza].opciones[2])



   }


});
