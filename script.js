function contarPalabras(){
  
    var total="";
    setTimeout(function(){
		var valor=document.getElementById('contador');
		var respuesta=document.getElementById('respuesta');
		var cantidad=valor.value.length;
    
    document.getElementById('respuesta').innerHTML =  ' Total de palabras ' + (total + cantidad) ;
		//document.getElementById('respuesta').innerHTML = contador.length == 0 ? 0 : total.split(/\s+/).length;
    if(cantidad>total){
			respuesta.style.color 
		}
		});
    
    /*let array =  contarPalabras.split('');
    let reverse = array.reverse();	
    
    if (reverse.join('')){
       respuesta =  "Si es un Palindromo"
    }else{
      respuesta = "No es un palidromo"
    }*/  
    }  





