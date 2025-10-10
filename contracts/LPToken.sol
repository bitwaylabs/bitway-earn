// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LPToken is ERC20 {
    // minter address
    address public minter;

    // admin adress
    address admin;

    // vault address
    address vault;

    modifier onlyMinter {
        require(msg.sender == minter);
        _;
    }

    modifier onlyAdmin {
        require(msg.sender == admin);
        _;
    }

    modifier onlyVault {
        require(msg.sender == vault);
        _;
    }

    constructor(string memory name, string memory symbol, address _admin) ERC20(name, symbol) {
        require(_admin != address(0), "cannot be zero");

        admin = _admin;
        minter = msg.sender;
    }

    function mint(address to, uint256 amount) external onlyMinter {
        _mint(to, amount);
    }

    function burn (address from, uint256 amount) external onlyMinter {
        _burn(from, amount);
    }

    function setToVault(address _minter, address _vault) external onlyAdmin {
        require(_minter != address(0), "cannot be zero");
        require(_vault != address(0), "cannot be zero");

        minter = _minter;
        vault = _vault;
    }

    function setAdmin(address _admin) external onlyAdmin {
        require(address(0) != _admin && _admin != admin, "Invalid address");

        admin = _admin;
    }

    function updateAllowance(address from, address spender, uint256 amount) external onlyVault {
        super._spendAllowance(from, spender, amount);
    }

    function transferFrom(address from, address to, uint256 amount) public override onlyVault returns (bool) {
        super._transfer(from, to, amount);

        return true;
    }

    function transfer(address to, uint256 amount) public override returns (bool) {
       revert();
    }
}
