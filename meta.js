        
const loginButton = document.getElementById('loginButton')
const userWallet = document.getElementById('userWallet')

function toggleButton() {

    if (!window.ethereum) {
        loginButton.innerText = "Metamask not installed"
        loginButton.classList.remove("bg-purple-500", "text-white")
        loginButton.classList.add("bg-gray-500", "text-gray-300", "cursor-not-allowed")
        return false
    }  

    if (!localStorage.getItem('metamaskAccount')) {
        loginButton.innerText = "Login with Metamask"
        loginButton.addEventListener('click', () => {loginWithMetamask()})
    }

    else { 
        loginButton.innerText = "Connected"
        userWallet.innerText = localStorage.getItem('accountAbrev')
    }
}

async function loginWithMetamask() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    .catch((e) => {
        console.error(e.message)
        return
    })
    if (!accounts) { return }
    localStorage.setItem('metamaskAccount', accounts[0])
    const account = localStorage.getItem('metamaskAccount')
    userWallet.innerText = account.slice(0, 4) + '...' + account.slice(-2)

    localStorage.setItem('accountAbrev', userWallet.innerText)

    loginButton.innerText = "Connected"
    loginButton.removeEventListener('click', loginWithMetamask)
}

// function signOutofMetaMask() {
//     window.userWalletAddress = null
//     userWallet.innerText = ''
//     loginButton.innerText = 'Login with MetaMask'

//     loginButton.removeEventListener('click', signOutofMetaMask)
//     setTimeout(() => {
//         loginButton.addEventListener('click', loginWithMetamask)
//     }, 200)

// }

window.addEventListener('DOMContentLoaded', () => {
    toggleButton()
});