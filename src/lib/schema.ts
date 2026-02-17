import {
  pgTable,
  text,
  timestamp,
  integer,
  primaryKey,
  uuid,
} from "drizzle-orm/pg-core";

/* ================= USERS ================= */

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name"),
  email: text("email").unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
});

/* ================= ACCOUNTS ================= */

export const accounts = pgTable(
  "accounts",
  {
    userId: uuid("userId") // ✅ changed from text → uuid
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),

    type: text("type").notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

/* ================= SESSIONS ================= */

export const sessions = pgTable("sessions", {
  sessionToken: text("sessionToken").primaryKey(),

  userId: uuid("userId") // ✅ changed from text → uuid
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),

  expires: timestamp("expires", { mode: "date" }).notNull(),
});

/* ================= VERIFICATION TOKENS ================= */

export const verificationTokens = pgTable(
  "verificationTokens",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);


/* ================= CHATS ================= */

export const chats = pgTable("chats", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow(),
});

/* ================= MESSAGES ================= */

export const messages = pgTable("messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  chatId: uuid("chatId")
    .notNull()
    .references(() => chats.id, { onDelete: "cascade" }),
  role: text("role").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow(),
});
