const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Deploy", function () {
  let simpleStorageFactor;
  let simpleStorage;

  beforeEach(async function () {
    // deploy the contract
    simpleStorageFactor = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactor.deploy();
  });

  it("Should have a contract address", async () => {
    const contractAddr = await simpleStorage.getAddress();
    console.log("SimpleStorage deployed to:", contractAddr);
    expect(contractAddr).to.be.properAddress;
  });

  it("Should have a start value of 0", async () => {
    const currentValue = await simpleStorage.retrieve();
    console.log("Current value:", currentValue.toString());
    expect(currentValue.toString()). to.equal("0");
  });

  it("Should update the value when store is called", async () => {
    const transactionResponse = await simpleStorage.store(1);
    const transactionReceipt = await transactionResponse.wait(1);
    const updatedValue = await simpleStorage.retrieve();
    console.log("Updated value:", updatedValue.toString());
    expect(updatedValue.toString()).to.equal("1");
  });
});
