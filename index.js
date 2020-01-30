const apiConfig = {
    port: 3000
}

const databaseConfig = {
    user: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    database: 'bqapi',
    port: 5432,
    ssl: false
}

const { Client } = require('pg')

const bodyParser = require('body-parser')

const express = require('express')
const server = express()

server.use(bodyParser.json())

server.get('/menuItens', async (req, res) => {
    const client = new Client(databaseConfig)
    await client.connect()
    const result = await client.query({
        text: 'select * from menuItens;'
    })
    await client.end()
    res.send(result.rows)
})
server.get('/menuItens/:id', async (req, res) => {
    const client = new Client(databaseConfig)
    await client.connect()
    const result = await client.query({
        text: 'select * from menuItens where id = $1;',
        values: [req.params.id]
    })
    await client.end()
    res.send(result.rows[0])
})

server.post('/menuItens', async (req, res) => {
    const client = new Client(databaseConfig)

    await client.connect()
    const result = await client.query({
        text: 'insert into menuItens (name, is_live) values ($1, $2) returning *;',
        values: [req.body.name, req.body.is_live]
    })
    await client.end()
    res.send(result.rows[0])
})

server.put('/menuItens/:id', async (req, res) => {
    const client = new Client(databaseConfig)
    await client.connect()
    const result = await client.query({
        text: 'update authors set name = $1, is_live =$2 where id= $3 returning *;',
        values: [req.body.name, req.body.is_live, req.params.id]
    })
    await client.end()
    res.send(result.rows[0])
})

server.delete('/authors/:id', async (req, res) => {
    const client = new Client(databaseConfig)
    await client.connect()
    const result = await client.query({
        text: 'delete from authors where id = $1;',
        values: [req.params.id]
    })

    await client.end()
    res.send(result.rows[0])
})

server.listen(apiConfig.port, () => console.log(`API running on port ${apiConfig.port} ...`))