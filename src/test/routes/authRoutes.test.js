import request from "supertest";
import { afterEach, beforeEach, describe } from "@jest/globals";
import app from "../../app.js";

let servidor;

let server;
beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe("Testes da rota de Autenticação (POST)", () => {
  it("Não deve autenticar - Falta de senha", async () => {
    const loginMock = {
      email: "l@l.com",
    };

    await request(server)
      .post("/login")
      .send(loginMock)
      .expect(500)
      .expect('"A senha de usuario é obrigatório."');
  });

  it("Não deve autenticar - Falta de email", async () => {
    const loginMock = {
      senha: "asdasd",
    };

    await request(server)
      .post("/login")
      .send(loginMock)
      .expect(500)
      .expect('"O email do usuario é obrigatório."');
  });
});
