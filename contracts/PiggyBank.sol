// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
struct piggyBank{
    string name;
    uint amount;
    address owner;
}
contract PiggyBank{
    piggyBank[] public piggies;
    function piggyOwned(address addr) internal view returns(int){
        for(uint i=0;i<piggies.length;i++){
            if(piggies[i].owner==addr)
            return int(i);
        }
        return -1;
    }
    function removePiggy(address addr) internal{
        int index=piggyOwned(addr);
        piggyBank memory piggybank;
        piggybank=piggies[piggies.length-1];
        piggies[piggies.length-1]=piggies[uint(index)];
        piggies[uint(index)]=piggybank;
        piggies.pop();        
    }
    function createPiggy(string memory _name) external{
        require(piggyOwned(msg.sender)==-1,"Already owned");
        piggyBank memory piggybank;
        piggybank.name=_name;
        piggybank.owner=msg.sender;
        piggies.push(piggybank);   
    }
    function addMoney(address addr) external payable{
        int index=piggyOwned(addr);
        require(index!=-1,"Piggy not created");
        piggies[uint(index)].amount=msg.value;
    }
    function breakPiggy(address addr) external payable{
        int index=piggyOwned(addr);
        require(index!=-1,"Piggy not created");
        require(piggies[uint(index)].owner==msg.sender,"You are not owner of project");
        payable(msg.sender).transfer(piggies[uint(index)].amount);
        removePiggy(addr);
    }
    function showPiggies() external view returns(piggyBank[] memory){
        return piggies;
    }
 }