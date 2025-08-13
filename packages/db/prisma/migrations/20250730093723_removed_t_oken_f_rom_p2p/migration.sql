/*
  Warnings:

  - You are about to drop the column `token` on the `p2pTransactions` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "p2pTransactions_token_key";

-- AlterTable
ALTER TABLE "p2pTransactions" DROP COLUMN "token";
