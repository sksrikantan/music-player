const serverUrl = "https://ofpinptronvn.usemoralis.com:2053/server";
const appId = "pWdm4Ivq5d8YfPLv6nXYTBa976fo8lZowDQlrJAy";
Moralis.start({ serverUrl, appId });

async function getObj(){
    const options_rop = { chain: 'ropsten', address: localStorage.metamaskAccount};
    const ropNFTs = await Moralis.Web3API.account.getNFTs(options_rop);
    return ropNFTs
}

async function addSong(nft) { 
    console.log('reached isolate')
    let ipfs = nft.token_uri.replace("moralis.io:2053", "io")
    obj = await (await fetch(ipfs)).json();

    var ul = document.querySelector(".songlist");
    var li = document.createElement("li");

    let audioLink = obj.audio;
    let audio = audioLink.replace('gateway.pinata.cloud', 'ipfs.io').replace('?preview=1', '');
    console.log(audio);
    li.src = audio;

    let imageLink = obj.image;
    let imageSource = imageLink.replace('gateway.pinata.cloud', 'ipfs.io').replace('?preview=1', '');
    var image = document.createElement("img");
    image.src = imageSource;
    li.appendChild(image);

    var name = document.createElement("span");
    name.innerHTML = obj.name;
    li.appendChild(name);
    
    ul.appendChild(li);
}

async function main(){
    let NFTObj = await getObj();
    const NFTList = NFTObj.result;
    for (let i = 0; i < NFTList.length; i++) {
        let nft = NFTList[i]
        await addSong(nft);
      }
}

main();