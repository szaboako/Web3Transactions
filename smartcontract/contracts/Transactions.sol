//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCount;

    event Transfer(address from, address to, uint amount, string message, uint timestamp, string keyword);

    struct TransferStruct {
        address from;
        address to;
        uint amount;
        string message;
        uint timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address payable _to, uint _amount, string memory _message, string memory _keyword) public {
        transactionCount++;
        transactions.push(TransferStruct(msg.sender, _to, _amount, _message, block.timestamp, _keyword));
        emit Transfer(msg.sender, _to, _amount, _message, block.timestamp, _keyword);
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}