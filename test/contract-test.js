const { expect } = require("chai");
const { ethers } = require("hardhat")

describe("Skyman", function(){
  let MyContract, myContractDeployed, owner, addr1, addr2, addr3, addrs
  
  beforeEach(async function(){
    MyContract = await ethers.getContractFactory("Skyman");
    myContractDeployed = await MyContract.deploy("0xBC5aA435BcA5EE5B123cabe38A5041b57Ae40167");
    [owner, addr1, addr2, addr3, ...addrs] = await ethers.getSigners()
    
  });

  describe("Deployment", function() {
    it("should return correct name and symbol", async function(){

      expect(await myContractDeployed.name()).to.equal("Skyman");
      expect(await myContractDeployed.symbol()).to.equal("SKA")
    });
  
    it("should return correct owner address", async function() {
      expect(await myContractDeployed.owner()).to.equal("0xBC5aA435BcA5EE5B123cabe38A5041b57Ae40167")
    })


    it("should implement mint function that increase balance of addr1 to 1", async function() {
      const mintTx = await myContractDeployed.connect(addr1).safeMint(addr1.address, "QmQAA7CqDZwrhEXTchTfPuNzdmn8yXJHhAqX3U4wyeKz8i/4.json", {value: "5000000000000000"})
      await mintTx.wait()
      expect(await myContractDeployed.balanceOf(addr1.address)).to.equal(1)
    })

})

  
});