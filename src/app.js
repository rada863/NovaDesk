import express from "express";

const app= express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        success:true,
        message: "NovaDesk API funcionando"

    });
});

export default app;
/*notas: app.js configura la aplicacion express y 
define una ruta de prueba para verificar que la API está funcionando correctamente.
 La ruta raíz ("/") responde con un mensaje JSON indicando que la API está operativa.*/
