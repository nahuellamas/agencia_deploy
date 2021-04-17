import { Comentario } from '../models/comentarios.js'
const guardarComentario = async (req , res) => {

    //validar
    const { nombre, correo, mensaje } = req.body;
    const errores = [];

    if (nombre.trim() == ''){
        errores.push({mensaje: 'El Nombre esta Vacio'})
    }
    if (correo.trim() == ''){
        errores.push({mensaje: 'El Correo esta Vacio'})
    }
    if (mensaje.trim() == ''){
        errores.push({mensaje: 'El Mensaje esta Vacio'})
    }
    if(errores.length > 0){
        //Consultar comentario existentes
        const comentarios = await Comentario.findAll();

        //mostrar el error
        res.render('comentarios', {
            pagina: 'Comentarios',
            errores,
            nombre,
            correo,
            mensaje,
            comentarios
        } )
    } else {
        //Almacenar en la BD (BASE DE DATOS)
        try {
            await Comentario.create({ nombre, correo, mensaje })
            res.redirect('/comentarios')
        } catch (error) {
            console.log(error);
        }
    }
}

export { guardarComentario }