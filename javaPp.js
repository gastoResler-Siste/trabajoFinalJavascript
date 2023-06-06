//Pagina de inicio
let nroAdivinanza=0;
let resultado=0; 
let seleccion=-1;
let F_adiv =[{
   pregunta:"¿Qué cosa es que cuanto más le quitas más grande es?",
   opciones:["la tiza","El agujero","El rencor","Un Disco Rigido"],
   respuesta:1,
   }];
   F_adiv.push ({pregunta:"¿Qué es lo que se hace de noche, que no se puede hacer de día?",opciones:["Trasnochar","Delinquir","Tomar Sol","Ir al colegio"],respuesta:0}) 
   F_adiv.push ({pregunta:"El roer es mi trabajo, el queso mi aperitivo y el gato ha sido siempre mi más temido enemigo.",opciones:["Paloma","Mosca","Perro","Raton"],respuesta:3}) 
   F_adiv.push ({pregunta:"Me rascan continuamente de forma muy placentera, mi voz es muy bien timbrada y mi cuerpo de madera.",opciones:["La Flauta","El bombo","La Guitarra","La pandereta"],respuesta:2}) 
   F_adiv.push ({pregunta:" Viste de chaleco blanco, y también de negro frac, es un ave que no vuela, pero nada. ¿Qué será?",opciones:["El Oso Polar","El Pinguino","El cocodrilo","la nutria"],respuesta:1})        


   let F_preg =[{
      pregunta:"¿Qué cosa es que cuanto más le quitas más grande es?",
      opciones:["la tiza","El agujero","El rencor","Un Disco Rigido"],
      respuesta:1,
      }];
      F_preg.push ({pregunta:"¿Qué es lo que se hace de noche, que no se puede hacer de día?",opciones:["Trasnochar","Delinquir","Tomar Sol","Ir al colegio"],respuesta:0}) 
      F_preg.push ({pregunta:"El roer es mi trabajo, el queso mi aperitivo y el gato ha sido siempre mi más temido enemigo.",opciones:["Paloma","Mosca","Perro","Raton"],respuesta:3}) 
      F_preg.push ({pregunta:"Me rascan continuamente de forma muy placentera, mi voz es muy bien timbrada y mi cuerpo de madera.",opciones:["La Flauta","El bombo","La Guitarra","La pandereta"],respuesta:2}) 
      F_preg.push ({pregunta:" Viste de chaleco blanco, y también de negro frac, es un ave que no vuela, pero nada. ¿Qué será?",opciones:["El Oso Polar","El Pinguino","El cocodrilo","la nutria"],respuesta:1})        
   
   
     



      function carga_localidades(id_provincia){
         $.ajax({ 
              
            url: 'https://apis.datos.gob.ar/georef/api/municipios?provincia=' + id_provincia + '&campos=id,nombre&max=1000',
            method: "GET",
            dataType: "json",

            success: function(data) {
            var select1 = $("#ciudad");
            $("#ciudad").empty()
               

            for (var i = 0; i < data.municipios.length; i++) {
                var option = $("<option>").text(data.municipios[i].nombre).val(data.municipios[i].id);
                select1.append(option);
            }
            },
            error: function() {
            alert("Error al obtener los datos de la API");
            }
        });
      };



      function carga_rovincias(paiss){
         $.ajax({
            url: "https://apis.datos.gob.ar/georef/api/provincias",
            method: "GET",
            dataType: "json",
            success: function(data) {
                  
              var select = $("#provincia");
              for (var i = 0; i < data.provincias.length; i++) {
                var option = $("<option>").text(data.provincias[i].nombre).val(data.provincias[i].id);
                select.append(option);
              }
            },
            error: function() {
              alert("Error al obtener los datos de la API");
            }
            });
      };
      






$(document).ready(function(){
   

   $('#provincia').change(function() {

      var select1 = $("#provincia option:selected").text();
      let valor= $("#provincia").val();

        //alert('seleccion ' + select1 + ' y valor:' + valor );
         carga_localidades(valor)
        
    });




















    function carga_pais(){
      //var select = $("#provincia");
             // for (var i = 0; i < data.provincias.length; i++) {
                var option = $("<option>").text("Argentina").val(54);
                $("#pais").append(option);
      };
   
   
   const user=localStorage.getItem("usuario");
   if (user==null){
      localStorage.removeItem("usuario")
      $("#divRegistro").show();
      carga_pais();
      carga_rovincias();
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
   /* $("#grabar").click(function(){
      // $("#nombre").val("otro texto")
     
      //localStorage.setItem ("usuario","GASTON");
   });*/

   function adivinanzas(){
      nroAdivinanza=-1
      $("#divPreguntas").show();
      $("#contRadio").show();
      siguinteAdivinanza()
   };       

   $("#botonRespuesta").click(function(){
      
         let sele1 =0
         sele1 = $('input[name="radios"]:checked').val();
         if (sele1==undefined){
            alert("Seleccione una respuesta")
         }else{
            seleccion=sele1;
            let resp1=0
            resp1=F_adiv[nroAdivinanza].respuesta
            if (resp1==sele1){
               $("#divRespuesta").show();
               $("#pRespuesta").text("Respuesta Correcta");
                 
            }else{
               let resp2=F_adiv[nroAdivinanza].opciones[resp1]
               $("#divRespuesta").show();
               $("#pRespuesta").text("Inorrecta. es: "+resp2);

               for (i=0;i<4;i++){
                  $("#idradio"+i).prop("disabled", true);
               }
            
               //alert("Respuesta errone")
            }
            $("#botonSiguinte").show(); 
         }        
      });      

   $("#botonSiguinte").click(function(){

      if ($("#botonSiguinte").text()!="Finalizar"){
         let sele =-1
         sele = seleccion//$('input[name="radios"]:checked').val();
         if (seleccion==undefined){
            alert("Seleccione una respuesta")
         }else{
            let resp=0
            resp=F_adiv[nroAdivinanza].respuesta
            if (resp==seleccion){
               resultado++;
               $("#emNroAdiv").text(resultado);
            }
            
            /*
            let sele =0
            sele = $('input[name="radios"]:checked').val();
            if (sele==undefined){
               alert("Seleccione una respuesta")
            }else{
               let resp=0
               resp=F_adiv[nroAdivinanza].respuesta
               if (resp==sele){
                  resultado++;
                  $("#emNroAdiv").text(resultado);
               }
               */
               siguinteAdivinanza()
               if(parseInt($("#idAdivinanza").text())==F_adiv.length){
                  $("#botonSiguinte").text("Finalizar") ;
               }
            }
         
      }else{//$("#botonSiguinte").text()!="Finalizar")
            let resp=0
            resp=F_adiv[nroAdivinanza].respuesta
            if (resp==seleccion){
               resultado++;
               $("#emNroAdiv").text(resultado);
            }
         
         
         $("#idPadivinanza").text("Ha finalizado el Juego, el resultado es "+ $("#ress").text())
         $("#contRadio").hide();
         $("#botonSiguinte").hide();
         $("#div_acierto").hide();
         $("#divNroAdiv").hide();
      }
      
   });

   function siguinteAdivinanza(){
         
      if (nroAdivinanza==-1){
        // alert(nroAdivinanza)
         
           
      }else{
         for (i=1;i<5;i++){
            $("#radio").remove();
            $("#pe").remove();
         }
      }
//actualizar el nro de adivinanza en el circulo
      $("#divRespuesta").hide();
      nroAdivinanza++;
      $("#idAdivinanza").text(nroAdivinanza+1);//redondel 
      $("#emCantadivi").text(F_adiv.length);//contador de resultado
      //id="emNroAdiv" >0</em> de <em id="emCantadivi

      const preg=F_adiv[nroAdivinanza].pregunta;         
      $("#idPadivinanza").text(preg);
         
      for(i=0;i<F_adiv[nroAdivinanza].opciones.length;i++){
         //contRadio    
         let valu= F_adiv[nroAdivinanza].opciones[i];
         $('#contRadio')
            .append('<p id="pe"><input class="radi" type="radio" id="idradio'+i+'" name="radios" value="'+i+'">'+valu+' </p>')
                                                            //   id="radio"'+i+'" name
        }
            //<p><input class="radi" type="radio" name="disp" id="radios">Museo</p>
      //alert(F_adiv[nroAdivinanza].opciones[2])
      $("#botonSiguinte").hide();  // true para desactivarlo o false para volverlo a activar
   }
   $("#botonReiniciar").click(function(){
      location.reload();
   });
   $("#botonReiniciarTodo").click(function(){
      localStorage.removeItem("usuario");
      location.reload();
   });


});//ready



$(document).submit(function(event){
   let stt=""
   /*Nombre, Apellido,
   correo electrónico, nombre de usuario y contraseña.
   - Validar que el correo electrónico sea un formato válido, es decir el usuario no puede
   ingresar “kdbfkjsbd”
   */
   //event.preventDefault();
   //localStorage.setItem ("usuario","GASTON");
   

   if ($("#nombre").val()==""){
      event.preventDefault();
      stt+="Nombre";
      //cNombre.focus();
      //return;
      }
   if ($("#apellido").val()==""){
      event.preventDefault();
      stt+= ", Apellido";
      
      //return;
   }
   if ($("#edad").val()==""){
      event.preventDefault();
      stt+=", edad";
   }
   if ($("#email").val()==""){
      event.preventDefault();
      stt+=", mail esta vacio";
   }
   if ($("#email").val()!=""){
      if (!/^\S+@\S+\.\S+$/.test($("#email"))){
            event.preventDefault();
            stt+=", el mail no cumple el formato";
      }
   endif
   if ($("#usuario").val()==""){
      event.preventDefault();
      stt+=", nombre de usuario";
   }; 
   if ($("#contra").val()=="" && $("#contra1").val()==""){
      event.preventDefault();
      stt+=", Constraseñas vacias";
   };  
   if ($("#contra").val()!=$("#contra1").val()){
            event.preventDefault();
            stt+=", Constraseñas distintas";
   };


   if (stt==""){
      localStorage.setItem ("usuario",$("#usuario").text());
   }else{
      stt="Complete " + stt;
      $("#spaerrores").text(stt);
   };

});
