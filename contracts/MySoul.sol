// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MySoul is ERC1155Supply, Ownable {

    uint256 public constant Soul = 1;
    uint256 public constant Life = 2;
    uint256 public constant Problem = 3;
    uint256 public constant Woman = 4;
    uint256 public constant Venus = 5;
    uint256 public constant Blood = 6;
    uint256 public constant Brisingr = 7;
    uint256 public constant Smile = 8;
    uint256 public constant Shadows = 9;
    uint256 public constant Far = 10;


    mapping (uint256 => string) private _uris;

    constructor() ERC1155("ipfs://QmW4AvUCLqjovVvLL6aEQBwzR11yonSrBFhN4MCVPPrcoH/{id}.json") {
      
      
    }

    function mint(address to, uint256 id, uint256 amount, bytes memory data) external onlyOwner {
        _mint(to, id, amount, data);
    }
    
    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data) external onlyOwner {
    _mintBatch(to, ids, amounts, data);
    }

    function setTokenUri(uint256 tokenId, string calldata tokenUri) external onlyOwner {
        _uris[tokenId] = tokenUri;
    }

    function getTokenUri(uint256 tokenId) external view returns (string memory) {
        return _uris[tokenId];
    }
}