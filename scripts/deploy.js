// imports
const { ethers, run } = require("hardhat");

// async function to deploy the contract
async function main() {
  const simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");

  // deploy the contract
  console.log("Deploying SimpleStorage...");
  const simpleStorage = await simpleStorageFactory.deploy();

  const contractAddr = await simpleStorage.getAddress();
  console.log("SimpleStorage deployed to:", contractAddr);

  // Show network name
const network = await ethers.provider.getNetwork();
  console.log("Network name:", network.name);
  console.log("Network chainId:", network.chainId);


    // Verify contract on Etherscan if not on hardhat network
    if (network.chainId.toString() !== "31337" && process.env.ETHERSCAN_API_KEY) {
        await simpleStorage.deploymentTransaction().wait(6);
        await verifyContract(contractAddr, []);
    }


    const currentValue = await simpleStorage.retrieve();
    console.log("Current value:", currentValue.toString());

    // Store a new value
    const transactionResponse = await simpleStorage.store(7);
    const transactionReceipt = await transactionResponse.wait(1);
    const updatedValue = await simpleStorage.retrieve();
    console.log("Updated value:", updatedValue.toString());
}

// Verify contract on Etherscan
async function verifyContract(contractAddr, args) {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddr,
      constructorArguments: args,
    });
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Contract already verified!");
    } else {
      console.error("Error verifying contract:", error);
    }
  }
  console.log("Contract verified!");
}

// call function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
