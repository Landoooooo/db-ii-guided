// Manage Roles
const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: './data/rolex.db3'
    },
    useNullAsDefault: true // needed for sqlite
}
const db = knex(knexConfig);

const server = express();

server.use(helmet());
server.use(express.json());

// list all roles
server.get('/api/roles', async (req,res) => {
    // get the roles from the database
    try{
        const roles = await db('roles');
        res.status(200).json(roles)
    } catch (e) {
        res.status(500).json(e)
    }
})
// list a role by id
server.get('/api/roles/:id', async (req,res) => {
    // get the roles from the database
    try{
        const roles = await db('roles')
        .where({id: req.params.id})
        .first();
        res.status(200).json(roles)
    } catch (e) {
        res.status(500).json(e)
    }
})
// create roles

// update roles

// remove roles

const port = process.env.PORT || 8000

server.listen(port, ()=> console.log(`\nrunning on ${port}\n`))