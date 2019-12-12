process.env.NODE_ENV = 'test';
const chai = require('chai');
const { expect } = chai;
const chaiSorted = require('chai-sorted');
const request = require('supertest');
const app = require('../app');
const connection = require('../db/connection.js');
chai.use(chaiSorted);

describe('/api', () => {
  beforeEach(() => connection.seed.run());
  after(() => connection.destroy());
  describe('#GET GAMES', () => {
    it('should return status 200 when all games are sent back to client', () => {
      return request(app)
        .get('/api/games')
        .expect(200)
        .then(({ body }) => {
          expect(body.games).to.be.an('Array');
          expect(body.games[0]).to.be.an('Object');
        });
    });
    describe('#GET GAMES ERRORS', () => {
      it('should return status 404 when all types are sent back to client', () => {
        return request(app)
          .get('/api/gamez')
          .expect(404)
          .then(({ body }) => {
            expect(body.msg).to.equal('route not found');
          });
      });
    });

    describe('#POST GAME', () => {
      it('returns status 201 and checks the keys and posted game', () => {
        return request(app)
          .post('/api/games')
          .send({
            name: 'Resident Evil 2',
            platform: 'PS4',
            genre: 'Action',
            release_date: new Date(2019, 01, 11),
            no_of_players: 2,
            publisher: 'Capcom',
            boxart:
              'https://images-na.ssl-images-amazon.com/images/I/815E3QgvjWL._SL1500_.jpg'
          })
          .expect(201)
          .then(({ body }) => {
            console.log(body);
            expect(body.game.name).to.equal('Resident Evil 2');
            expect(body.game.publisher).to.equal('Capcom');
            expect(body.game).to.have.keys(
              'name',
              'platform',
              'genre',
              'release_date',
              'no_of_players',
              'publisher',
              'boxart'
            );
          });
      });
    });
  });
});
