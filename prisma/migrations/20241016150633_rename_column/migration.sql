/*
  Warnings:

  - You are about to drop the column `pric` on the `Item` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "pric",
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL DEFAULT 0;
