import chai, {
  expect,
} from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);

describe('Test diary endpoints at "/v1/entries" with (GET, POST) and "/v1/entries/:id" with (GET, PUT, DELETE)', () => {
  describe('Test diary endpoint at "/v1/entries" with GET and POST', () => {});
  describe('Test diary endpoints at "/v1/entries/:id" with GET, PUT, DELETE', () => {
    describe('Test diary endpoint at "/v1/entries/:id" to get one entry with GET', () => {
      it("should get a diary entry at '/v1/entries/:id' with GET if id exists", (done) => {
        const id = 0;
        chai.request(app)
          .get(`/v1/entries/${id}`)
          .then((res) => {
            expect(res).to.have.status(200);
            expect(res.body).be.an('object');
            expect(res.body.diaryEntry).to.have.property('id').equal(0);
            expect(res.body.diaryEntry).to.have.property('title').equal('breakfast');
            expect(res.body.diaryEntry).to.have.property('description').equal('alone');
            done();
          });
      });
    });
  });
});
