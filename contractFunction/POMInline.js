import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import axios from 'axios'
import { POMPOMABI } from "./../abis/pompomabi";
import { POMContractAddress } from "../POMAddress";

export const inLine = async () => {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)    
    const signer = provider.getSigner()
    let POMcontract = new ethers.Contract(POMContractAddress, POMPOMABI, signer)
    const data = await POMcontract.POMInline()
    const items = await Promise.all(data.map(async i => {
        const tokenUri = await POMcontract.tokenURI(i.tokenId)
        const meta = await axios.get(tokenUri)
        let item = {
            eventName: meta.data.eventName,
            startDate: meta.data.startDate,
            endDate: meta.data.endDate,
            startTime: meta.data.startTime,
            endTime: meta.data.endTime,
            host: i.host,
            guest: i.guest,
            tokenId: i.tokenId.toNumber(),
        }
        return item
      }))
    return items
}
