# Royalties
This project is an example of an ERC721 with royalties.

The contract implements the ERC721Enumerable, Ownable, and RoyaltiesV2Impl interfaces.

ERC721Enumberanble is an extension of ERC721 that has built in hooks for keeping track of tokenIds.

Ownable gives access to functions and modifiers for trackinging and maintaining ownership of the contract.

RoyaltiesV2Impl is an implementation of the rarible RoyaltiesV2 interface, and ERC2981 a newly emergening standard for tracking royalties across marketplaces. Raribles interfaces are available on npm package, but are only compiled for solidity <0.8.0. ERC721Enumerable is only compiled for ^0.8.0 so the necessary rarible libraries are replicated here written for ^0.8.0.

This contract implements the setRoyalties method that assigns an array of addresses and royalty percentage points to an NFT on this contract with a given tokenID. It allows for multiple royalty receivers, and per nft royalty rules, but for the purpose of this contract only assigns one set royalty rule of 10% for all nfts.

It implements the royaltyInfo function to return the address of the royalty receiver and the royalty amount for a given token at a given sales price. This is the function called by marketplace contracts when a sale occurs to calculate the royalty amoun that marketplace contract will pay out. ROYALTIES DO NOT GET PAID OUT BY THE ERC721. 

It implements the supportsInterface function so that other contracts can verify that this contract implements ERC2981, and raribles royalty interface, before attempting to interact with functions specific to those interfaces.

NOTE:
The wording in the brief was unclear if the contract itself should post listings directly to secondary exchanges. To the best of my research this isn't possible, though marketplace contracts can be approved for the purposes of enabling gas-free listings.

In addition, the brief required royalties only be paid out every second sale. Marketplaces that pay royalties use their marketplace contracts to determine the logic and logistics of paying royalties, and use the royaltyInfo function, or their own in app tooling such as is the case with OpenSea, to determine what the royalty amount should be for a given token at a given sales price. The logistics of implementing every other sale royalties that also interact with sales on these platforms didn't seem feasible, or to be the intention of the brief. The decision was made to demonstrate integrating existing markets standards for enabling royalties, over a custom royalties solution that would fit the every other sale requirement at the cost of not integrating with existing marketplaces.