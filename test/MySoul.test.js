const { BigNumber, constants } = require("ethers");
const { expect } = require("chai");
const { ethers } = require("hardhat");
require("@nomicfoundation/hardhat-chai-matchers");

let mySoulContract;

describe("My soul contract test", function (accounts) {
  baseURI =
    "https://peach-managing-marmot-708.mypinata.cloud/ipfs/QmUUS9a8V4g4rkX5Xo8AoEPuUP4posYKcrsbkGYU7UDLvM/";

  it("contract setup", async function () {
    [owner, user1, user2, user3] = await ethers.getSigners();

    const MySoul = await hre.ethers.getContractFactory("MySoul");
    mySoulContract = await MySoul.deploy();
    await mySoulContract.waitForDeployment();
    console.log("Cat contract deployed to:", await mySoulContract.getAddress());
  });

  it("ownner mints some tokens", async function () {
    mySoulContract.connect(owner).mint(owner.address, 1, 2, "0x");
    mySoulContract
      .connect(owner)
      .mint(owner.address, 3, 1, "0x4369616F204D61737465725A"); // "Ciao MasterZ"
  });

  it("owner batch-mints some tokens", async function () {
    mySoulContract
      .connect(owner)
      .mintBatch(owner.address, [1, 4, 5], [2, 2, 2], "0x");
  });

  it("check uri", async function () {
    await mySoulContract.setTokenUri(4, baseURI + "4.json");
    console.log(await mySoulContract.getTokenUri(4));
  });
});
