document.addEventListener('DOMContentLoaded', () => {
    crearGaleria();
})

const crearGaleria = () => {
    const galeria = document.querySelector('.galeria-imagenes')

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('IMG')
        imagen.src = `build/img/thumb/${i}.webp`

        imagen.dataset.imagenId = i;
        //mostrar imagen
        imagen.onclick = mostrarImagen

        const lista = document.createElement('LI')
        lista.appendChild(imagen)

        galeria.appendChild(lista)
    }
}

const mostrarImagen = (e) => {
    const id = parseInt(e.target.dataset.imagenId)
    const imagen = document.createElement('img')
    imagen.src = `build/img/grande/${id}.webp`

    const overlay = document.createElement('div')
    overlay.appendChild(imagen)
    overlay.classList.add('overlay')

    //boton para cerrar
    const cerrarImagen = document.createElement('p')
    cerrarImagen.textContent = "X"
    cerrarImagen.classList.add('btn-cerrar')


    overlay.onclick = () => {
        overlay.remove()
        body.classList.remove('fijar-body')
    }

    cerrarImagen.onclick = () => {
        overlay.remove() 
        body.classList.remove('fijar-body')
    }

    overlay.appendChild(cerrarImagen)

    //mostrar

    const body = document.querySelector('body')
    body.appendChild(overlay)
    body.classList.add('fijar-body')
}