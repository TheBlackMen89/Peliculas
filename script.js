function buscarPelicula() {
  var textoBusqueda = document.getElementById("buscador").value.toLowerCase();; // Obtener el texto de búsqueda y convertirlo a minúsculas
  var peliculas = document.getElementsByClassName("pelicula"); // Obtener todos los divs que contienen películas
  var numPeliculas = peliculas.length;
  console.log(numPeliculas);
  var peliculaEncontrada = false;

  for (var i = 0; i < numPeliculas; i++) {
    var pelicula = peliculas[i];
    var titulo = pelicula.getElementsByTagName("h2")[0].innerHTML.toLowerCase(); // Obtener el título de la película y convertirlo a minúsculas
    console.log(titulo);
    if (titulo.includes(textoBusqueda)) {
      // Comprobar si el texto de búsqueda está en el título
      pelicula.style.display = "block"; // Mostrar la película si coincide con el texto de búsqueda
      peliculaEncontrada = true;
    } else {
      pelicula.style.display = "none"; // Ocultar la película si no coincide con el texto de búsqueda
    }
  }
  if (!peliculaEncontrada) {
    alert("No se encontraron películas con ese nombre."); // Mostrar un mensaje si no se encontraron películas
  }
}


function guardarDatos() { 
  var name = document.getElementById("name").value; 
  var email = document.getElementById("email").value; 
  var comment = document.getElementById("comment").value; 
  
  if (!name || !email || !comment) { 
    alert("Los campos no pueden estar vacíos."); 
    return; } 

    var dateTime = new Date();
    
    // Crear un objeto con los datos del comentario 
    var comentario = { 
      name: name, 
      email: email, 
      comment: comment,
      dateTime: dateTime.toLocaleString(),}
      ; 
      
      // Obtener los comentarios existentes del localStorage o crear un array vacío si no hay comentarios 
      var comentarios = JSON.parse(localStorage.getItem("comentarios")) || []; 
      
      // Agregar el nuevo comentario al array de comentarios 
      comentarios.push(comentario); 
      
      // Guardar el array de comentarios actualizado en el 
      localStorage.setItem("comentarios", JSON.stringify(comentarios)); 
      
      // Mostrar los comentarios actualizados 
      mostrarComentarios(); 
      
      //Se borran los datos de la comentarios 
      document.getElementById("name").value = ""; 
      document.getElementById("email").value = ""; 
      document.getElementById("comment").value = ""; 
    } 
    
    function mostrarComentarios() { 
      var comentarios = JSON.parse(localStorage.getItem("comentarios")) || []; 

      var comentariosHTML = comentarios 
      .map(function(comentario) { 
        return ` 
        <div class="comentario"> 
        <h4>${"Nombre: " + comentario.name}</h4> 
        <p>${"Email: " + comentario.email}</p> 
        <p>${"Comentario: " + comentario.comment}</p> 
        <p>${"Fecha: " + comentario.dateTime}</p>
        </div> 
        
        `; }) 
        .join(""); 
        document.getElementById("contenedor-comentarios").innerHTML = comentariosHTML;
      
      } function borrarComentarios() { 
        localStorage.removeItem("comentarios"); 
        mostrarComentarios(); 
      }
