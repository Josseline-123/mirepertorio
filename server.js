
const fs = require('fs');
const nombreArchivo = 'canciones.json';
const express= require('express');
const e = require('express');

const app= express();
//muddleware para transformar el body
app.use(express.json());

 const leerArchivo = () => {
    return JSON.parse(fs.redFileSync(nombreArchivo, 'utf-8'));

 }

app.get("/canciones", (req, res) => {
    const data = leerArchivo();
    res.status(200).json(data);
s
});


app.post("/canciones", (req, res) => {
    const data = req.body;
    listaCanciones = leerArchivo();
    console.log(listaCanciones);
    listaCanciones.push(data);
    fs.writeFileSync(nombreArchivo, JSON.stringify(listaCanciones)); 
    res.status(201).json(
        { 
          resultado: true,
         canciones: data
        }
    );
});
app.delete("/canciones/:id", (req,res) => {
    console.log(req.params);

    res.status(200).json(req.params);

    if(cancion){
        res.status(200).json(cancion);
    
} else { 
    res.status(404).json({error: 'cancion no encontrada!'});

}

});

//app.get("/canciones/:id", (req, res) => {
   // const { id } = req.params;
   //  listaCanciones = leerArchivo();
    // const cancion = listaCanciones.find(e) => e.id === number);
   // res.status(200).json(cancion)

//});

app.listen(3000, () => {
 console.log('Servidor levantado');


});
