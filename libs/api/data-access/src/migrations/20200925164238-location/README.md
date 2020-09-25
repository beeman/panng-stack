# Migration `20200925164238-location`

This migration has been generated by Bram Borggreve at 9/25/2020, 11:42:38 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "angular-graphql"."User" ADD COLUMN "location" text
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200925083105-add-bio-field..20200925164238-location
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -20,9 +20,9 @@
   role      Role      @default(value: User)
   name      String?
   avatarUrl String?
   bio       String?
-  //  location              String?
+  location  String?
   posts     Post[]    @relation("PostsByUser")
   liked     Post[]    @relation("LikedPostsByUser")
   comments  Comment[] @relation("CommentsByUser")
 }
```