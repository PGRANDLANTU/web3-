var ethers = require('ethers')

let n = 100
for (let i = 0;i < n; i++){
    let randomWallet = ethers.Wallet.createRandom();
    console.log(i+1)
    console.log(randomWallet.address)
    console.log(randomWallet.privateKey)
    console.log(randomWallet.mnemonic.phrase)
}
