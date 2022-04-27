const main = async () => {
    //1. Compile contract and generate files under artifacts, eg ABI 
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT'); 
    //2. Creates local blockchain and deploy the contract, then it will destroy the network
    const nftContract = await nftContractFactory.deploy();
    //3, await for the contract to be 'mined' 
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);

      // Call the function.
  let txn = await nftContract.makeAnEpicNFT()
  // Wait for it to be mined.
  await txn.wait()

  // Mint another NFT for fun.
  txn = await nftContract.makeAnEpicNFT()
  // Wait for it to be mined.
  await txn.wait()

  txn = await nftContract.getTotalNFTMinted()

  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();