const request = require("supertest");
const server = require("./server");

// Testing endpoints
// returns correct http code
describe("server.js", () => {
  describe("GET /", () => {
    it("should respond with 200 OK", () => {
      request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should respond with 200 OK async", async () => {
        const res = await request(server).get("/")
          
        expect(res.status).toBe(200);
          
      });

      it("should respond with 200 OK done", done => {
        request(server)
          .get("/")
          .then(res => {
            expect(res.status).toBe(200);

            done();
          });
      });

    it("should work", () => {
      return request(server)
        .get("/")
        .expect(200);
    });

    it("should return JSON", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.type).toBe("application/json");
        });
    });

    it("should check for json", () => {
        return request(server)
          .get("/")
          .expect('Content-Type', /json/);
      });
  });

  it('should return { api: "up" }', () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.body).toEqual({ api: 'up' })
      })
  })

});
