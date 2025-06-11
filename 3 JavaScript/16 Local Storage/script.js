console.log( typeof(Storage) ); // muestra el tipo


// --- --- --- Local Storage --- --- ---
// Formas de guardar (son lo mismo)
localStorage.setItem('nombre', 'Ángel Hurtado');
// localStorage.nombre = 'Ángel Hurtado';

alert( localStorage.nombre );

// localStorage.removeItem('nombre'); // Borra



// --- --- --- Session Storage --- --- ---
// Se borra al cerrar la pestaña
// sessionStorage.nombre = "Ángel Hurtado";
sessionStorage.setItem('apellido', "García");

console.log( sessionStorage.apellido );
