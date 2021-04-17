import Sequelize from 'sequelize';

import DB from '../config/db.js';

export const Comentario = DB.define('comentarios', {
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
}); 