const { ethers } = require("hardhat");

async function deploy() {
    const [deployer] = await ethers.getSigners();

    const admin = "";
    const bot = "";
    const custodian = "";

    const tokens = [];
    const lpTokens = [];
    const rewardRates = [700];
    const minStakeAmounts = ["10000000000000000000"];
    const maxStakeAmounts = ["115792089237316195423570985008687907853269984665640564039457584007913129639935"];

    const withdrawVault = "";
    const waitingTime = 7*24*3600;

    console.log("Deploying vault with the account:", deployer.address);
    console.log("Account balance:", ethers.formatEther(await deployer.provider.getBalance(deployer.address)));

    contractFactory = await ethers.getContractFactory("Vault");

    contract = await contractFactory.deploy(tokens, lpTokens, rewardRates, minStakeAmounts, maxStakeAmounts, admin, bot, custodian, waitingTime, withdrawVault);
    await contract.waitForDeployment();

    console.log("Vault contract address:", contract.target);
}

deploy()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
