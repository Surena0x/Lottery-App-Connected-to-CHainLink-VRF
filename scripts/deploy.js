const hre = require("hardhat");

async function main() {
  const Lottery = await hre.ethers.getContractFactory("Lottery");
  const LotteryContract = await Lottery.deploy();

  await LotteryContract.deployed();

  console.log("LotteryContract deployed to:", LotteryContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
