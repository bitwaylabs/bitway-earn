// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title USDT for testing.
 */
contract TestUSDT is ERC20 {
    uint8 private constant DECIMALS = 6; // decimals

    /**
     * @notice Constructor.
     * @param totalSupply Total supply
     */
    constructor(uint256 totalSupply) ERC20("Test USDT", "USDT") {
        _mint(_msgSender(), totalSupply);
    }

    /**
     * @notice Override {ERC20-decimals}.
     */
    function decimals() public view virtual override returns (uint8) {
        return DECIMALS;
    }
}
