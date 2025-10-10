const { ethers } = require("hardhat");

async function deploy() {
    const [deployer] = await ethers.getSigners();

    const admin = "";
    const bot = "";
    const custodian = "";

    const tokens = [];

    console.log("Deploying WithdrawVault with the account:", deployer.address);
    console.log("Account balance:", ethers.formatEther(await deployer.provider.getBalance(deployer.address)));

    let contractFactory = await ethers.getContractFactory("WithdrawVault");

    let contract = await contractFactory.deploy(tokens, admin, bot, custodian);
    await contract.waitForDeployment();

    console.log("WithdrawVault contract address:", contract.target);
}

deploy()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
