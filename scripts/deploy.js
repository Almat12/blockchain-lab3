const hre = require("hardhat");

async function main() {
  const Skyman = await hre.ethers.getContractFactory("Skyman")
  const skyman = await Skyman.deploy("0xBC5aA435BcA5EE5B123cabe38A5041b57Ae40167");

  await skyman.waitForDeployment()
  console.log("Skyman: ", await skyman.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
