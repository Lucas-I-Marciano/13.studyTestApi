import { describe, expect, test } from "@jest/globals";
import AuthService from "../../services/authService";

describe("Teste em authServices", () => {
  const authService = new AuthService();
  test("Deve cadastrar", async () => {
    //Arrange
    const correctMockObject = {
      nome: "Lucas",
      email: "l@l.com",
      senha: "test123",
    };

    const usuarioCadastrado = await authService.cadastrarUsuario(
      correctMockObject
    );
    expect(usuarioCadastrado["content"]).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...correctMockObject,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      })
    );
  });
});
