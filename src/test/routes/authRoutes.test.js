import request from "supertest";
import { afterEach, beforeEach, describe } from "@jest/globals";
import app from "../../app.js";

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
      email: "l@lu",
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

  it("O login deve validar se o usuário está cadastrado", async () => {
    const unregisteredLoginMock = {
      email: "l@lucas",
      senha: "admin",
    };

    await request(server)
      .post("/login")
      .send(unregisteredLoginMock)
      .expect(500)
      .expect('"Usuario não cadastrado."');
  });
});
