const {expect} = require("chai");
const {ethers} = require("hardhat");


describe("Royalty Test", function () {
    let royaltyNFT;


    before(async() => {
        [owner, account1, account2] = await ethers.getSigners();

        const royaltyNFTContract = await ethers.getContractFactory("RoyaltiesNFT");

        royaltyNFT = await royaltyNFTContract.deploy("NAME", "SYMB", "https://");

        await royaltyNFT.deployed();
    });

    describe('Mint token and set royalty', async () => {
        it('mint and set royalty', async () => {
            const royalty10percent = 1000;
            await royaltyNFT.connect(account1).mint(1);
            await royaltyNFT.connect(owner).setRoyalties(0, account1.address, royalty10percent);
            const tokensRoyalty = await royaltyNFT.getRaribleV2Royalties(0);
            expect(tokensRoyalty[0][1]).to.equal(royalty10percent);
        })
    });
})