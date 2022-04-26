import app from "./app";
import ContenedorMongo from './contenedor/ContenedorMongo';

const conectMongo= new ContenedorMongo("mongodb://localhost:27017/ecommerce");
conectMongo.conectar() 


app.listen(app.get("port"));
console.log("Server on port ", app.get("port"));

