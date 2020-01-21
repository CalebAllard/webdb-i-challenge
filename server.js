const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());
// CRUD
server.get('/api/accounts',  (req, res,next) => {
    
        
});
server.get('/api/accounts/:id',  (req, res) => {
    
});
server.post('/api/accounts',  (req, res) => {
    
    
});
server.put('/api/accounts/:id',  (req, res) => {
    
});
server.delete('/api/accounts/:id',  (req, res) => {
    
});

module.exports = server;