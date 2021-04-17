import express from 'express';
import {paginaInicio, paginaNosotros, paginaViajes, paginaComentarios, paginaDetalleViaje} from '../controllers/paginascontrollers.js'
import { guardarComentario } from '../controllers/comentariosControler.js'
const router = express.Router();

router.get('/', paginaInicio);

router.get('/Nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/comentarios', paginaComentarios );
router.post('/comentarios', guardarComentario);


export default router;

