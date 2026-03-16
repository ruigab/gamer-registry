// test("primeiro teste funcionando", () => {
//     expect(1 + 1).toBe(2);
//   });
const request = require("supertest");
const app = require("../app");

test("GET /games deve retornar status 200", async () => {
    const response = await request(app).get("/api/games");

    test("GET /games retorna uma lista", async () => {
        const response = await request(app).get("/api/games");
      
        expect(Array.isArray(response.body)).toBe(true);
      });
  
    expect(response.statusCode).toBe(200);
});

