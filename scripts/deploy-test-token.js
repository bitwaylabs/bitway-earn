const { ethers } = require("hardhat");

async function deploy() {
    const [deployer] = await ethers.getSigners();
    
    const totalSupply = 1000000000000000;

    console.log("Deploying Test USDT with the account:", deployer.address);
    console.log("Account balance:", ethers.formatEther(await deployer.provider.getBalance(deployer.address)));

    let contractFactory = await ethers.getContractFactory("TestUSDT");

    let contract = await contractFactory.deploy(totalSupply);
    await contract.waitForDeployment();

    console.log("Test USDT contract address:", contract.target);
}

deploy()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
