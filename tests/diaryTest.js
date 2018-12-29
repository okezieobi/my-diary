import chai, {
  expect,
} from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);

describe('Test diary endpoints at "/v1/entries" with (GET, POST) and "/v1/entries/:id" with (GET, PUT, DELETE)', () => {
  describe('Test diary endpoint at "/v1/entries" with GET and POST', () => {});
  describe('Test diary endpoints at "/v1/entries/:id" with GET, PUT, DELETE', () => {
    describe("Test endpoint at '/v1/entries/:id to delete a diary entry with DELETE", () => {
      it("it should delete a diary entry at '/v1/entries/:id' with DELETE if id exists", (done) => {
        const id = 0;
        chai.request(app)
          .del(`/v1/entries/${id}`)
          .then((res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('message').equal('Diary entry successfully deleted');
            done();
          });
      });
      it("should NOT delete a diary entry at '/v1/entries/:id' with DELETE if id does not exist", (done) => {
        const id = 10;
        chai.request(app)
          .del(`/v1/entries/${id}`)
          .then((res) => {
            expect(res).to.have.status(404);
            expect(res.body).to.have.property('message').equal('Diary entry does not exist');
            done();
          });
      });
    });
  });
});
