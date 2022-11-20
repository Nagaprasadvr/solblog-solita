import * as accounts from "../solblog-solita/js/src/generated/accounts";
import * as instructions from "../solblog-solita/js/src/generated/instructions";
import { InitializeInstructionAccounts } from "../solblog-solita/js/src/generated/instructions/initialize";
import * as Web3 from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";

describe("client ...", async () => {
  const blog = new Web3.PublicKey(
    "6ppEikHWEaw55eDm94hSQP6hu6m7767Ns1JX41dYtwNE"
  );
  let rpc = new Web3.Connection(Web3.clusterApiUrl("devnet"));
  let creator = anchor.AnchorProvider.env().wallet as anchor.Wallet;
  // it("create blog acc", async () => {
  //   let blogKeypair = Web3.Keypair.generate();

  //   let ixBuilder: instructions.InitializeInstructionAccounts = {
  //     blogAccount: blogKeypair.publicKey,
  //     authority: creator.publicKey,
  //     systemProgram: Web3.SystemProgram.programId,
  //   };

  //   let ix = instructions.createInitializeInstruction(ixBuilder);

  //   let tx = new Web3.Transaction();
  //   tx.add(ix);

  //   let sig = await Web3.sendAndConfirmTransaction(rpc, tx, [
  //     creator.payer,
  //     blogKeypair,
  //   ]);

  //   console.log(sig);
  // });

  it("make blog post", async () => {
    let ixBuilder: instructions.MakePostInstructionAccounts = {
      blogAccount: blog,
      authority: creator.publicKey,
      systemProgram: Web3.SystemProgram.programId,
    };
    let msg = "hello";
    let msgInArray = new Uint8Array(Buffer.from(msg));
    let args: instructions.MakePostInstructionArgs = {
      newPost: msgInArray,
    };

    let ix = instructions.createMakePostInstruction(ixBuilder, args);
    let tx = new Web3.Transaction();
    tx.add(ix);
    let sig = await Web3.sendAndConfirmTransaction(rpc, tx, [creator.payer]);

    console.log(sig);
  });
});
