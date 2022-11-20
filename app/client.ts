import * as accounts from "../solblog-solita/js/src/generated/accounts";
import * as instructions from "../solblog-solita/js/src/generated/instructions";
import { InitializeInstructionAccounts } from "../solblog-solita/js/src/generated/instructions/initialize";
import * as Web3 from "@solana/web3.js";

async function createBlog() {
  let blogKeypair = Web3.Keypair.generate();
  let creator = Web3.Keypair.generate();
  let rpc = new Web3.Connection(Web3.clusterApiUrl("devnet"));
  let sig2 = await rpc.requestAirdrop(
    creator.publicKey,
    1 * Web3.LAMPORTS_PER_SOL
  );

  let ixBuilder: instructions.InitializeInstructionAccounts = {
    blogAccount: blogKeypair.publicKey,
    authority: creator.publicKey,
    systemProgram: Web3.SystemProgram.programId,
  };

  let ix = instructions.createInitializeInstruction(ixBuilder);

  let tx = new Web3.Transaction();
  tx.add(ix);

  const sig = await Web3.sendAndConfirmTransaction(rpc, tx, [
    blogKeypair,
    creator,
  ]);
  console.log(sig);
}

createBlog().then(() => {
  console.log("done!");
});
