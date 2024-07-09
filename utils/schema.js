import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const userDate = pgTable("userData",{
    id:serial("id").primaryKey(),
    name:text("name").notNull(),
    email:varchar("email").notNull(),
    uid:varchar("uid").notNull(),
    createdAt:varchar("createdAt")
})