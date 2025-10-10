const { ethers } = require("hardhat");

async function deploy() {
    const [deployer] = await ethers.getSigners();

    const admin = "";

    const name =  "";
    const symbol = "";

    console.log("Deploying LP token with the account:", deployer.address);
    console.log("Account balance:", ethers.formatEther(await deployer.provider.getBalance(deployer.address)));

    let contractFactory = await ethers.getContractFactory("LPToken");

    let contract = await contractFactory.deploy(name, symbol, admin);
    await contract.waitForDeployment();

    console.log("LP token contract address:", contract.target);
}

deploy()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
