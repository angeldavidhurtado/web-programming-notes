// https://orangeable.com/javascript/smooth-scrolling
// https://es.javascript.info/size-and-scroll

const contenedor = 'elemnto, el padre del contenido que se desborda y hace scroll'

contenedor.scroll({
	top: contenedor.scrollHeight, // La altura del contenido completa
	behavior: "smooth"
})