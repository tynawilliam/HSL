/*
  Warnings:

  - You are about to drop the column `deletedAt` on the `Questions` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Questions" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "deletedAt";
