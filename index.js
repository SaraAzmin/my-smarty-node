const express = require('express');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('This is from my smarty node');
})

const users = [
    { id: 1, name: 'sara', contact: '01889999999' },
    { id: 2, name: 'azmin', contact: '01889999999' },
    { id: 3, name: 'sara', contact: '01889999999' },
    { id: 4, name: 'azmin', contact: '01889999999' },
    { id: 5, name: 'sara', contact: '01889999999' }
]

app.get('/users', (req, res) => {

    if (req.query.name) {

        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);

    }
    else {
        res.send(users);
    }


})

//dynamic route
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

//post
app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push();
    res.send(user)
})

app.listen(port, () => {
    console.log('This is from port: ', port);
})