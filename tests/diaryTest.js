import chai, {
  expect,
} from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);

describe('Test diary endpoints at "/v1/entries" with (GET, POST) and "/v1/entries/:id" with (GET, PUT, DELETE)', () => {
  describe('Test diary endpoint at "/v1/entries" with GET and POST', () => {});
  describe('Test diary endpoints at "/v1/entries/:id" with GET, PUT, DELETE', () => {
    describe('Test endpoint at "/v1/entries/:id" to update a diary entry with PUT', () => {
      it("should update a diary entry at '/v1/entries/:id' with PUT if id exists", (done) => {
        const id = 0;
        chai.request(app)
          .put(`/v1/entries/${id}`)
          .send({
            title: 'breakfast',
            description: 'with buddy',
          })
          .then((res) => {
            expect(res).to.have.status(200);
            expect(res.body).be.an('object');
            expect(res.body.updatedDiaryEntry).to.have.property('id').equal(0);
            expect(res.body.updatedDiaryEntry).to.have.property('title').equal('breakfast');
            expect(res.body.updatedDiaryEntry).to.have.property('description').equal('with buddy');
            done();
          });
      });
      it("should NOT update a diary entry at '/v1/entries/:id' if id does not exist with PUT", (done) => {
        const id = 10;
        chai.request(app)
          .put(`/v1/entries/${id}`)
          .then((res) => {
            expect(res).to.have.status(404);
            expect(res.body).to.have.property('message').equal('Diary entry does not exist');
            done();
          });
      });
      it("it should NOT update a diary entry at '/v1/entries' if title is null or undefined with PUT", (done) => {
        const id = 0;
        chai.request(app)
          .put(`/v1/entries/${id}`)
          .send({
            description: 'lorem',
          })
          .then((res) => {
            expect(res).to.have.status(400);
            expect(res.body).to.have.property('message').equal('Title is required');
            done();
          });
      });
      it("it should NOT update a diary entry at '/v1/entries' if description is null or undefined with PUT", (done) => {
        const id = 0;
        chai.request(app)
          .put(`/v1/entries/${id}`)
          .send({
            title: 'lorem',
          })
          .then((res) => {
            expect(res).to.have.status(400);
            expect(res.body).to.have.property('message').equal('Description is required');
            done();
          });
      });
    });
  });
});
