
# Piggy Bank

This is a simple decenterlized application (Dapp) built on Goerli testnet in which a person could create a piggy, add money to it and break it.

## Features

- ### Create Piggy
A person could create piggy with help of create button 
- ### Add Money
Anyone could add money to specific piggy with help of piggy address and value one wants to add
- ### Break Piggy
Only owner of specific piggy will be able to break that piggy and get the money
- ### Get Piggy Detail
Piggy details like address of owner and the amount it holds coulde be retrieved by piggies button


## Demo

https://piggybank-one.vercel.app/


## Tech Stack
The frontend is built using React

On the Web3 side, the contract is written in Solidity and compiled deployed,tested using hardhat. 

For interaction with frontend ether.js library is used
## Limitations

- The most prominent limitation of this Piggy Bank system is that it's proper functioning is heavily dependent on how it's going to be interacted with. The buttons are not turned off (i.e. made un-clickable) at any moment. So, if a participant decides to just go ahead and randomly start clicking the buttons in between transactions, the application is mostly likely going to report an error or even worse, it may crash. Therefore, patiently wait for the transaction to complete and the updates to appear on screen

- If user tries to access any piggy which doesnot exists or has been broken, he will get alert message saying Invalid Index!

- Only the owner of piggy would be able to get/break the money means any other piggies owner will not be able to get money of another piggy

- If piggy not created or broken it would give alert message

 
