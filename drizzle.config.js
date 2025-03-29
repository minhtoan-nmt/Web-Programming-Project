import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./src/db/schema.js",
    out: "./src/db/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL,
    }
})