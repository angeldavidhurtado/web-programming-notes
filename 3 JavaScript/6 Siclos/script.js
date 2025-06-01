var meses = ['Enero', "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

for ( var i = 0; i < 10; i++ ) {
    document.write( i );
    document.write( "<br />" );
}



document.write( "<br />" );



for ( var mes of meses ) {
    document.write( mes );
    document.write( "<br />" );
}



document.write( "<br />" );



for ( var mes in meses ) {
    document.write( mes );
    document.write( "<br />" );
}



document.write( "<br />" );



var i = 0;
while ( i < 10) {
    i++;
    document.write( "<br />" );
    document.write( i );
}



document.write( "<br />" );



var i = 0;
do {
    if (i == 3) {
        i++;
        continue; // pasa a la siguiente iteración
    } else if (i == 6) {
        break; // interrumpe el siclo
    }

    document.write( "<br />" );
    document.write( i );
    i++;
} while ( i < 10);
