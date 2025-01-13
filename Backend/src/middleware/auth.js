import { decode } from 'jsonwebtoken';
import { verifyToken } from '../lib/jwt.js';

function auth(requiredRole) {
    return async (request, response, next) => {

        let token = request.headers['authorization'];

        
        console.log('Token obtenido de la cabecera ' + token);

        if(!token){
            return response.status(401).json({
                mensaje: 'No se encontró token, permiso denegado'
            });
        }

        token = token.split(' ')[1];
        console.log('token después de separarlo del Bearer' + token);

        try {
            const decoded = await verifyToken(token);
            console.log('token decodificado ' , decoded);

            if(requiredRole === 'admin' && !decoded.isAdmin){
                return response.status(403).json({
                    mensaje: 'Acceso no permitido, no es administrador'
                });
            }

            request.user = decoded;
            
        } catch (error) {
            return response.status(400).json({
                mensaje: 'Falló la autenticación del token',
                problema: error.message || error
            });
        }
        next();

    }
}

export default auth;