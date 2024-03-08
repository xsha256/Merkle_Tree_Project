# Merkle Tree Gift List 🎁

Your project this week is to build an application which gives out gifts, but only to names on the list. The catch is that on the server you are only allowed to store one 32 byte value in the server memory. This 32 byte value has to be enough for the server to be able to determine who is on the list.

#### Here is your starter repository: https://github.com/ChainShot/GiftList

To get started, read the readme for further instruction!

### 💡 Hints

Think of the client as the prover here. They are the ones trying to prove to the server that the one name is in the list. Likewise think of the server as the verifier here. They are taking the client's proof and, using minimal information, able to verify that the name sent from the client is actually in the list.

Check out the /utils folder for everything you need for the Merkle Tree. Take a look at the example.js file to see how to create a root, create a proof, and verify that proof.

We modified the MerkleTree implementation so you won't have to! You can see we used a few helpers from the ethereum-cryptography library to convert between types.