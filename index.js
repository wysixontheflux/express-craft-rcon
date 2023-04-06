const express = require('express');
const { Rcon } = require('rcon-client');

const app = express();

app.get('/list', async (req, res) => {
    try {
        const rcon = await Rcon.connect({
            host: 'localhost',
            port: 25575,
            password: 'enzo'
        });

        const response = await rcon.send('list');
        res.send(response);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erreur lors de l\'exécution de la commande');
    }
});

app.get('/give', async  (req, res) => {
    try {
        const rcon = await Rcon.connect({
            host : 'localhost',
            port : 25575,
            password : 'enzo'
        })

        const response = await rcon.send('give WySix_ diamond 64');
        res.send(response);
    } catch (err) {
        console.log(err)
        res.status(500).send('Erreur de l execution de la commande')
    }
})

app.get('/givegold', async  (req, res) => {
    try {
        const rcon = await Rcon.connect({
            host : 'localhost',
            port : 25575,
            password : 'enzo'
        })

        const response = await rcon.send('give WySix_ gold_ingot 64');
        res.send(response);
    } catch (err) {
        console.log(err)
        res.status(500).send('Erreur de l execution de la commande')
    }
})

app.listen(3001, () => {
    console.log('Serveur démarré sur le port 3001');
});
