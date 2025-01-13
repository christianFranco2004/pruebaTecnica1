
import mongoose  from "mongoose";

export async function connectionMongo() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log ('conexion exitosa con la base de datos'); 

    } catch (error) {
        console.error ('error de conexion' + error);
    }

}
