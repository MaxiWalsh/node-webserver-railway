const http = require('http');

http.createServer((req, res) => {
    console.log(req);

    // res.writeHead(200, {'Content-Type': 'application/json'});
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type': 'application/csv'});

    // const personas = {
    //     id: 1,
    //     nombre: 'Maximiliano'
    // }

    res.write('Hola mundo');


    // res.write(JSON.stringify(personas));
    res.end();
})
.listen(8080);
console.log('Escuchando el puerto ', 8080);