import { pgTable, varchar, serial, integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const shops = pgTable("shops", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    description: varchar("description").notNull(),
    phone_num: varchar("phone_num", { length: 10 }).notNull(),
    shop_address: varchar("shop_address").notNull(),
    website_link: varchar("website_link").notNull(),
})

export const posts = pgTable("posts", {
    id: serial("id").primaryKey(),
    title: varchar("title").notNull(),
    description: varchar("description").notNull(),
    star_rate: varchar("star_rate").notNull(),
    shop_id: integer("shop_id").notNull().references(() => shops.id),
})


// Add relations
export const shopsRelations = relations(shops, 
    ({ many }) => ({
        posts: many(posts),
    })
)

export const postsRelations = relations(posts, 
    ({ one }) => ({
        shop: one(shops, {
            fields: [posts.shop_id],
            references: [shops.id],
        })
    })
)