const hre = require("hardhat");

async function main() {
  const MySoul = await hre.ethers.getContractFactory("MySoul");
  const mySoul = await MySoul.deploy();
  await mySoul.waitForDeployment();
  console.log("MySoul deployed to:", await mySoul.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
