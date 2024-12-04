import db from "../../db/dbconfig.js";
import { describe, expect } from "@jest/globals";

describe("Testes de conexão com o banco de dados", () => {
  it("Deve cadastrar e deletar um autor", async () => {
    const authorMock = {
      nome: "Lucas Marciano",
      nacionalidade: "Brasileiro",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const savedAuthor = await db("autores")
      .insert(authorMock)
      .then((register) => {
        return register[0];
      });

    const objectSavedAuthor = await db("autores").where({ id: savedAuthor });

    expect(objectSavedAuthor[0]).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...authorMock,
      })
    );

    const deleteAuthor = await db("autores").where({ id: savedAuthor }).del();
  });
});
