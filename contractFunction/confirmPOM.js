import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
import { POMPOMABI } from "./../abis/pompomabi";
import { POMContractAddress } from "../POMAddress";

export const Confirm = async (tokenId) => {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)    
    const signer = provider.getSigner()
    let POMcontract = new ethers.Contract(POMContractAddress, POMPOMABI, signer)
    let transaction = await POMcontract.confirmPOM(tokenId)
    let receipt = await transaction.wait()
    return receipt;
};