-- AddForeignKey
ALTER TABLE "p2pTransactions" ADD CONSTRAINT "p2pTransactions_SenderUserId_fkey" FOREIGN KEY ("SenderUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "p2pTransactions" ADD CONSTRAINT "p2pTransactions_RecieverUserId_fkey" FOREIGN KEY ("RecieverUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
