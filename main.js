const serverUrl = "https://ofpinptronvn.usemoralis.com:2053/server";
const appId = "pWdm4Ivq5d8YfPLv6nXYTBa976fo8lZowDQlrJAy";
Moralis.start({ serverUrl, appId });

async function getList(){
    const options_rop = { chain: 'ropsten', address: '0xFb0e25CF1eB81b099F5DD9bC32f0D1922D2a80bA' };
    const ropNFTs = await Moralis.Web3API.account.getNFTs(options_rop);
    return ropNFTs
}

async function main(){
    let NFTList = await getList();
    console.log(NFTList.result);
    let first = NFTList.result[0]
    console.log(first);
    // isolateAudio(first)
}



main();