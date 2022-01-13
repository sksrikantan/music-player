const serverUrl = "https://ofpinptronvn.usemoralis.com:2053/server";
const appId = "pWdm4Ivq5d8YfPLv6nXYTBa976fo8lZowDQlrJAy";
Moralis.start({ serverUrl, appId });

async function getObj(){
    console.log("getObj");
    const options_rop = { chain: 'eth', address: localStorage.metamaskAccount};
    const ropNFTs = await Moralis.Web3API.account.getNFTs(options_rop);
    console.log("ropNFTs");
    return ropNFTs
}

async function addSong(nft) { 
    console.log("addSong");
    if (!nft.token_uri) { 
        return;
    }
    let ipfs = nft.token_uri;
    obj = await (await fetch(ipfs)).json();
    console.log(obj);
    var ul = document.querySelector(".songlist");
    var li = document.createElement("li");

    if (obj.audio) { 
        let audioLink = obj.audio;
        // let audio = audioLink.replace('https://gateway.pinata.cloud/ipfs/', 'ipfs://').replace('?preview=1', '');
        li.src = audioLink;
        console.log(li.src);
    }
    else if (obj.animation_url) { 
        let audioLink = obj.animation_url;
        // let audio = audioLink.replace('https://gateway.pinata.cloud/ipfs/', 'ipfs://').replace('?preview=1', '');
        li.src = audioLink;
        console.log(li.src);
    } else { 
        return;
    }

    let imageLink = obj.image;
    console.log(imageLink);
    var image = document.createElement("iframe");
    image.src = imageLink;
    li.appendChild(image);

    var name = document.createElement("span");
    name.innerHTML = obj.name;
    li.appendChild(name);
    
    ul.appendChild(li);
}

async function fetchNFTs(){
    console.log("fetchNFT");
    let NFTObj = await getObj();
    const NFTList = NFTObj.result;
    console.log(NFTList);
    for (let i = 0; i < NFTList.length; i++) {
        let nft = NFTList[i]
        await addSong(nft);
      }
}

async function loadLibrary() {
    console.log("loadLibrary");
    if (!localStorage.metamaskAccount) { 
        alert("Connect MetaMask to load NFTs!");
    } 
    else { 
        fetchNFTs();
    }
}
