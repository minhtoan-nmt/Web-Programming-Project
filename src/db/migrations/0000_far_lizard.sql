CREATE TABLE "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"description" varchar NOT NULL,
	"star_rate" varchar NOT NULL,
	"shop_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "shops" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"description" varchar NOT NULL,
	"phone_num" varchar(10) NOT NULL,
	"shop_address" varchar NOT NULL,
	"website_link" varchar NOT NULL
);
--> statement-breakpoint
ALTER TABLE "posts" ADD CONSTRAINT "posts_shop_id_shops_id_fk" FOREIGN KEY ("shop_id") REFERENCES "public"."shops"("id") ON DELETE no action ON UPDATE no action;