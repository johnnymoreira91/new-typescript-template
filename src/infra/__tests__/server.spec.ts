import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "../server";

describe("Testes de Integração", () => {
  it("deve redirecionar para o servidor da porta 3001 com erro 404", async () => {
    const response = await request(app).get("/rota-que-nao-existe");
    expect(response.status).toBe(404);
  });
});
