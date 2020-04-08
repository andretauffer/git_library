process.env.NODE_ENV = "test";
process.env.PORT = "8001";
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../app");

const { expect } = chai;

chai.use(chaiHttp);
chai.should();

describe("The feed route /feed", () => {
  describe("GET feed", () => {
    it("should return status 200 for valid request", done => {
      chai
        .request(app)
        .get("/feed")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    it("should return an object", done => {
      chai
        .request(app)
        .get("/feed")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
    it("should contain all information", done => {
      chai
        .request(app)
        .get("/feed")
        .end((_err, res) => {
          expect(res.body).to.have.deep.keys(
            "total_count",
            "items",
            "keywords",
            "path"
          );
          done();
        });
    });
  });
});
