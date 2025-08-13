-- CreateTable
CREATE TABLE "p2pTransactions" (
    "id" SERIAL NOT NULL,
    "SenderUserId" INTEGER NOT NULL,
    "RecieverUserId" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "status" "OnRampStatus" NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "p2pTransactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "p2pTransactions_token_key" ON "p2pTransactions"("token");
