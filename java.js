//const mybutton=document.getElementById('my-button')
//mybutton.addEventListener('click',)


//este evento escucha        
//document.addEventListener('DOMContentLoaded',function(){
    //const boto=document.getElementById('id_my-button')
    //boto.addEventListener('click', function(){
    //})

//})

const ball=document.getElementById("ball");
ball.onclick = function(){
    var movimiento=0;
    //alert ("dsfsdf");
    setInterval(function(){
        console.log(movimiento);
        movimiento=movimiento+1;
        if (movimiento<50){
            ball.style.left =movimiento+'%';
        }
        else{function }
    },50);
};


/*
let elemento=document.getElementById('texto_div');
elemento.textContent ="texto Cambiado";
// el textContent es para los componentes html que tiene texto


let boto = document.getElementById('my-button');
boto.value="enviado"   */
