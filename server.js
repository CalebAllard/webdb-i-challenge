const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());
// CRUD
server.get('/api/accounts',  (req, res,next) => {
    db('accounts').select()
    .then(ret => {
        res.status(200).json(ret);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({err: 'probelm getting accounts'});
    });
        
});
server.get('/api/accounts/:id',  (req, res) => {
    db('accounts').where({id:req.params.id}).select()
    .then(ret => {
        res.status(200).json(ret);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({err: 'problem getting account'});
    });
});
server.post('/api/accounts', (req, res) => {
    db('accounts').insert(req.body)
    .then(ret => {
        const id = ret[0];
        return id;
    })
    .then(ret => {
      db('accounts').where({id:ret}).select()
      .then(ret =>{
          res.status(201).json(ret);
      })
      .catch(err => {
          res.status(500).json({msg: 'Created account, problem returning account'})
      })
     
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({err: 'problem creating account'});
    });
    
});
server.put('/api/accounts/:id',  (req, res) => {
    db('accounts').where({id:req.params.id}).update(req.body)
    .then(ret =>{
        res.status(201).json(ret);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({err:'problem updating account'});
    })
});
server.delete('/api/accounts/:id',  (req, res) => {
    db('accounts').where({id:req.params.id}).delete()
    .then(ret => {
        res.status(200).json(ret);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err:'problem deleting account'});
    });
});

module.exports = server;