process.env.NODE_ENV = "test";
process.env.PORT = "8001";
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../app");

const { expect } = chai;

chai.use(chaiHttp);
chai.should();

describe("The search API /api/search/", () => {
  describe("GET repos", () => {
    it("should return status 200 for valid request, with whole object response", done => {
      chai
        .request(app)
        .get("/api/search/repositories?q=react&sort=stars&page=1")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          expect(res.body).to.have.deep.keys(
            "total_count",
            "items",
            "incomplete_results"
          );
          done();
        });
    });
    it("should return status 200 for valid request, with whole object response for the user", done => {
      chai
        .request(app)
        .get(
          "/api/search/repositories?q=react+user:andretauffer&sort=stars&page=1"
        )
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          expect(res.body).to.have.deep.keys(
            "total_count",
            "items",
            "incomplete_results"
          );
          done();
        });
    });
  });

  describe("GET codes", () => {
    it("should return status 200 for valid request, with whole object response", done => {
      chai
        .request(app)
        .get("/api/search/codes?q=react+user:andretauffer&sort=stars&page=1")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          expect(res.body).to.have.deep.keys(
            "total_count",
            "items",
            "incomplete_results"
          );
          done();
        });
    });
  });
});
