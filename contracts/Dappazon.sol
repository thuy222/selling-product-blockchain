// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Dappazon {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    //List Product
    function lis(
        uint256 _id,
        string memory _name,
        string memory _category,
        string memory _image,
        uint256 _cost,
        uint256 _rating
    ) public {
        //code goes here
    }

    //Buy Product

    //Withdraw funds
}
