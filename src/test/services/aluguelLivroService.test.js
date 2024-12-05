import { describe, expect } from "@jest/globals";
import AluguelLivroService from "../../services/aluguelLivroService.js";

describe("Using TDD - Test-Driven Development - calcularDataDevolucao", () => {
  const aluguelLivroService = new AluguelLivroService();

  test("Deve retornar a data de devolução", async () => {
    const dataAlugado = "2024-01-01";
    const diasAlugados = 5;
    const dataRetornoMock = new Date("2024-01-06");

    const dataDevolucao = await aluguelLivroService.calcularDataDevolucao(
      dataAlugado,
      diasAlugados
    );

    expect(dataDevolucao).toStrictEqual(dataRetornoMock);
  });
});
