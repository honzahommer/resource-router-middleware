var express = require('express');
var resource = require('../lib');
var should = require('should');
var supertest = require('supertest');

var app = express();

app.use('/', resource({
  id: 'test',
  load: function(req, id, cb) {
    cb(null, id);
  },
  list: function(req, res) {
    res.sendStatus(200);
  },
  create: function(req, res) {
    res.sendStatus(201);
  },
  read: function(req, res) {
    res.status(200).send(req[this.id]);
  },
  update: function(req, res) {
    res.sendStatus(204);
  },
  modify: function(req, res) {
    res.sendStatus(204);
  },
  delete: function(req, res) {
    res.sendStatus(204);
  }
}));

describe('GET /', function() {
  it('respond with 200', function(done) {
    supertest(app).get('/').expect(200, done);
  });
});

describe('POST /', function() {
  it('respond with 201', function(done) {
    supertest(app).post('/').expect(201, done);
  });
});

describe('PATCH /', function() {
  it('respond with 404', function(done) {
    supertest(app).patch('/').expect(404, done);
  });
});

describe('PUT /', function() {
  it('respond with 404', function(done) {
    supertest(app).put('/').expect(404, done);
  });
});

describe('DELETE /', function() {
  it('respond with 404', function(done) {
    supertest(app).delete('/').expect(404, done);
  });
});

describe('GET /id', function() {
  it('respond with 200', function(done) {
    supertest(app).get('/id').expect(200, done);
  });
});

describe('POST /id', function() {
  it('respond with 404', function(done) {
    supertest(app).post('/id').expect(404, done);
  });
});

describe('PATCH /id', function() {
  it('respond with 204', function(done) {
    supertest(app).patch('/id').expect(204, done);
  });
});

describe('PUT /id', function() {
  it('respond with 204', function(done) {
    supertest(app).put('/id').expect(204, done);
  });
});

describe('DELETE /id', function() {
  it('respond with 204', function(done) {
    supertest(app).delete('/id').expect(204, done);
  });
});
