const path = require("path");
const programDir = path.join(
  __dirname,
  "..",
  "solblog-solita/programs/solblog-solita"
);
const idlDir = path.join(__dirname, "solblog-solita/target/idl");
const sdkDir = path.join(__dirname, "solblog-solita//js/src", "generated");
const binaryInstallDir = path.join(__dirname, "solblog-solita/.crates");

module.exports = {
  idlGenerator: "anchor",
  programName: "solblog_solita",
  programId: "34zZZbZ6nsJ6zZNKtAsVDWMoCEmvVWMWpxVyxPBLzhNi",
  idlDir,
  sdkDir,
  binaryInstallDir,
  programDir,
  anchorRemainingAccounts: false,
};
