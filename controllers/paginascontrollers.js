import { Viaje } from '../models/Viaje.js';
import { Comentario } from '../models/comentarios.js';

const paginaInicio = async (req, res) => {
    //consultar base de datos
    //que se ejecuten los await al mismo tiempo (mejorea mucho el performance)
    const promiseDB = [];
    promiseDB.push(Viaje.findAll({limit: 3}));
    promiseDB.push(Comentario.findAll({limit: 3}));
    try {
        const ComentariosyViajes = await Promise.all(promiseDB);
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: ComentariosyViajes[0],
            comentarios: ComentariosyViajes[1]
        });
    } catch (error) {
        console.log(error)
    } 
}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    }); 
}

const paginaViajes = async (req, res) => {
    //consultar BD
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    });
}

const paginaComentarios = async (req, res) => {
    try {
        const comentarios = await Comentario.findAll();

        res.render('comentarios', {
            pagina: 'Comentarios',
            comentarios
        });
    } catch (error) {
        console.log(error)
    }
}

//muestra un viaje por su SLUG
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;
    try {
        const viaje = await Viaje.findOne({ where : {slug}  });
        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch {
        console.log(error)
    }
}

export{
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaComentarios,
    paginaDetalleViaje
}
