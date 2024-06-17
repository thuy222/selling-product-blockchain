const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("Dappazon", () => {
  let dappazon;
  let deployer, buyer;
  beforeEach(async () => {
    //set up account
    [deployer, buyer] = await ethers.getSigners();
    console.log(deployer.address, buyer.address);

    //deploy contract
    const Dappazon = await ethers.getContractFactory("Dappazon");
    dappazon = await Dappazon.deploy();
  });

  describe("Deployment", () => {
    it("Set the owner", async () => {
      expect(await dappazon.owner()).to.equal(deployer.address);
    });
  });
});
