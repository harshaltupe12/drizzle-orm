import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./utils/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://mock%20master_owner:vP4LlnBFUdX8@ep-patient-butterfly-a187sbtr.ap-southeast-1.aws.neon.tech/github?sslmode=require",
  }
});