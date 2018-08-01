const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    let users = [
        {
            name: 'Mike',
            age: 27
        },
        {
            name: 'Andrew',
            age: 25
        },
        {
            name: 'Jen',
            age: 26
        }
    ];
    
    res.status(200).send(users);
});


app.listen(3000);

module.exports.app = app;