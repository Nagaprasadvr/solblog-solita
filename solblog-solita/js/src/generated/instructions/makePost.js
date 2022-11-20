"use strict";
/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.createMakePostInstruction = exports.makePostInstructionDiscriminator = exports.makePostStruct = void 0;
var beet = require("@metaplex-foundation/beet");
var web3 = require("@solana/web3.js");
/**
 * @category Instructions
 * @category MakePost
 * @category generated
 */
exports.makePostStruct = new beet.FixableBeetArgsStruct([
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['newPost', beet.bytes],
], 'MakePostInstructionArgs');
exports.makePostInstructionDiscriminator = [
    183, 46, 201, 124, 45, 198, 247, 158,
];
/**
 * Creates a _MakePost_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category MakePost
 * @category generated
 */
function createMakePostInstruction(accounts, args, programId) {
    var _a;
    if (programId === void 0) { programId = new web3.PublicKey('34zZZbZ6nsJ6zZNKtAsVDWMoCEmvVWMWpxVyxPBLzhNi'); }
    var data = exports.makePostStruct.serialize(__assign({ instructionDiscriminator: exports.makePostInstructionDiscriminator }, args))[0];
    var keys = [
        {
            pubkey: accounts.blogAccount,
            isWritable: true,
            isSigner: false
        },
        {
            pubkey: accounts.authority,
            isWritable: true,
            isSigner: true
        },
        {
            pubkey: (_a = accounts.systemProgram) !== null && _a !== void 0 ? _a : web3.SystemProgram.programId,
            isWritable: false,
            isSigner: false
        },
    ];
    var ix = new web3.TransactionInstruction({
        programId: programId,
        keys: keys,
        data: data
    });
    return ix;
}
exports.createMakePostInstruction = createMakePostInstruction;
