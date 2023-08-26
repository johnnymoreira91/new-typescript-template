import dotenv from "dotenv";
import { z } from "zod";
dotenv.config();

const envSchema = z.object({
  PORT: z.string().default("80"),
  NODE_ENV: z.enum(["dev", "test", "prod"]).default("dev")
});

export const ENV = envSchema.parse(process.env);
