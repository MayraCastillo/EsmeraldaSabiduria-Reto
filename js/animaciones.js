function maquillar()
{
   document.getElementById('fotoUribe1').src = "img/uribeMaquillado.jpg";	
}

function desMaquillar()
{
   document.getElementById('fotoUribe1').src = "img/uribeNormal.jpg";				
}

			
function reproducir()			
{ 
  document.getElementById('fotoUribe2').src = "img/imagenSorpresa.jpg";
  document.getElementById('sonido').play();
}

function detener()
{
  document.getElementById('fotoUribe2').src = "img/uribeNormal.jpg";
  document.getElementById('sonido').pause();
}