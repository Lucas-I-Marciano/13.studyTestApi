import { describe, expect } from "@jest/globals";
import AluguelLivroService from "../../services/aluguelLivroService.js";

describe("Using TDD - Test-Driven Development - calcularDataDevolucao", () => {
  const aluguelLivroService = new AluguelLivroService();

  test("Deve retornar a data de devolução", async () => {
    const dataAlugado = new Date(2024, 1, 1);
    const diasAlugados = 5;
    const dataRetornoMock = new Date(2024, 1, 6);

    const dataDevolução = await aluguelLivroService.calcularDataDevolucao(
      dataAlugado,
      diasAlugados
    );

    expect(dataRetornoMock).toBe(dataDevolução);
  });
});
