//Pagina de inicio
let nroAdivinanza=0;
let resultado=0; 
let F_adiv =[{
   pregunta:"¿Qué cosa es que cuanto más le quitas más grande es?",
   opciones:["fgfgfg","fgfgfg2","fgfgfg3","fgfgfg4"],
   respuesta:2,
}];
// F_producto.push ({nombre:"Libro jardineris",precio:345,descuento:10,precioVenta: function(){precioVenta=parseFloat(this.precio)-((parseFloat(this.precio)* parseFloat(this.descuento))/100);return precioVenta;}})        












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
      const preg=F_adiv[nroAdivinanza].pregunta;         
      $("#idPadivinanza").text(preg);
         
      for(i=0;i<F_adiv[nroAdivinanza].opciones.length;i++){
         //contRadio    
         let valu= F_adiv[nroAdivinanza].opciones[i];
         $('#contRadio')
            .append('<p><input class="radi" type="radio" id="radio" name="radios" value="'+i+'">'+valu+'</p>')
            
        }
            //<p><input class="radi" type="radio" name="disp" id="radios">Museo</p>


      //alert(F_adiv[nroAdivinanza].opciones[2])



   }


});
