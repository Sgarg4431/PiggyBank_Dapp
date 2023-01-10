const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("PiggyBank", function () {
  let piggybank,deployer,addr1,addr2;
  beforeEach(async function(){
    const PiggyBank=await ethers.getContractFactory("PiggyBank");
    [deployer,addr1,addr2]=await ethers.getSigners();
    piggybank=await PiggyBank.deploy();
  })
  describe("deployement",function(){
    it("Should deploy at right address",async function(){
      await piggybank.createPiggy("Charity");
      const piggy=await piggybank.piggies(0);
      expect(await piggy.owner).equals(await deployer.getAddress());
    })
  })
  describe("Testing create Piggy",function(){
    it("Should return owned error",async function(){
      await piggybank.createPiggy("Charity");
      await expect(piggybank.createPiggy("Char")).to.be.revertedWith("Already owned");
    })
    it("should create piggy",async function(){
      await piggybank.createPiggy("Charity");
      const piggy=await piggybank.piggies(0);
      expect(await piggy.name).equal("Charity");
    })
  })
  describe("Testing addMoney function",function(){
    it("Should return not created error",async function(){
      await expect(piggybank.addMoney(deployer.getAddress())).to.be.revertedWith("Piggy not created");
    })
    it("should add money",async function(){
      await piggybank.createPiggy("Charity");
      await piggybank.addMoney(deployer.getAddress(),{value:1000})
      const piggy=await piggybank.piggies(0);
      expect(await piggy.amount).equal(1000);
    })
  })
  describe("Testing break piggy function",function(){
    it("Should return not created error",async function(){
      await expect(piggybank.breakPiggy(deployer.getAddress())).to.be.revertedWith("Piggy not created");
    })
    it("Should return owner error",async function(){
      await piggybank.createPiggy("Charity");
      await expect(piggybank.connect(addr1).breakPiggy(deployer.getAddress())).to.be.revertedWith("You are not owner of project");
    })
    it("Should break piggy",async function(){
      await piggybank.createPiggy("Charity");
      await piggybank.breakPiggy(deployer.getAddress());
      const piggy=await piggybank.piggies.length;
      expect(await piggy).equals(0);
    })
  })
});
