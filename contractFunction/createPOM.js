import Web3 from "web3";
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
import { POMPOMABI } from "./../abis/pompomabi";
import { POMContractAddress } from "../POMAddress";

export const mintNFT = async (guestWallet,uri) =>{
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)    
    const signer = provider.getSigner()
    const web3 = new Web3(window.ethereum);
    let contract = new ethers.Contract(POMContractAddress, POMPOMABI, signer)
    let transaction = await contract.createPOM(guestWallet,uri)
    let receipt = await transaction.wait()
    return receipt;
};