import { describe, it, expect } from "vitest";
import { hashPassword, comparePassword, verifyToken, generateToken } from "./authHelper.js";

describe("authHelper", () => {
  it("hashPassword: debe generar un hash y coincidir con comparePassword", async () => {
    const password = "MiPassword123";
    const hash = await hashPassword(password);
    expect(hash).toBeDefined();
    expect(hash).not.toBe(password);
    const match = await comparePassword(password, hash);
    expect(match).toBe(true);
    const noMatch = await comparePassword("otra", hash);
    expect(noMatch).toBe(false);
  });

  it("hashPassword: debe retornar null si no recibe password", async () => {
    const result = await hashPassword(null);
    expect(result).toBeNull();
    const result2 = await hashPassword(undefined);
    expect(result2).toBeNull();
  });

  it("generateToken y verifyToken: debe generar un token y verificarlo", () => {
    const payload = { id: "123", email: "test@test.com" };
    const secret = "test_secret";
    process.env.JWT_SECRET = secret;
    const token = generateToken(payload);
    expect(token).toBeDefined();
    expect(typeof token).toBe("string");
    const decoded = verifyToken(token);
    expect(decoded.id).toBe("123");
    expect(decoded.email).toBe("test@test.com");
  });

  it("verifyToken: debe lanzar error con token inválido", () => {
    process.env.JWT_SECRET = "secret";
    expect(() => verifyToken("token-invalido")).toThrow();
  });
});
