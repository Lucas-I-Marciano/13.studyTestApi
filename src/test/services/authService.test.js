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

    // Act
    const usuarioCadastrado = await authService.cadastrarUsuario(
      correctMockObject
    );

    //Assert
    expect(usuarioCadastrado["content"]).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...correctMockObject,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      })
    );
  });

  it("Não deve cadastrar", async () => {
    const incorrectMockObject = {
      nome: "Lucas",
      email: "l@l.com",
    };

    const promiseUsuarioCadastrado =
      authService.cadastrarUsuario(incorrectMockObject);

    await expect(promiseUsuarioCadastrado).rejects.toThrow("Senha obrigatoria");
  });
});
