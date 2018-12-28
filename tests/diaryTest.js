import chai, {
  expect,
} from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);

describe('Test diary endpoints at "/v1/entries" with (GET, POST) and "/v1/entries/:id" with (GET, PUT, DELETE)', () => {
  describe('Test diary endpoint at "/v1/entries" with GET and POST', () => {});
  describe('Test diary endpoints at "/v1/entries/:id" with GET, PUT, DELETE', () => {});
});
