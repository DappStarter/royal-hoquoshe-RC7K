require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success story dash shift pupil inflict drip equal gift'; 
let testAccounts = [
"0xc16cd811bacbf5edbe23edd6d526fcea8a0d4242b2fccdac0aaa7ec0254f78c2",
"0xd212ddbf78f85207ac3b6400aa6a2b619228179a395501b57cd53da58d4489e0",
"0xd56751f9dd8e73fbcdde3c8d7f38bf56e6b511677a65e043310235dc35f308a5",
"0xad6c03a5c8c1fbe719115baf6cf9f2df44a9330772a97b118729dda2ab360011",
"0x16fe5e91b02647d49a0470c4a9d63b7656f02a66c445d59d07b9d787e6f30efe",
"0xd61da3055c5a85c246de5e8514cacacdae4b6bac0a5e99eb9f0769ecf8f995ed",
"0x56b550fde301e793a42ef6611ebb6368003e43d5266c54eec27867a8b1df6aef",
"0x92c001db721bdd914ed7acdd8af43fcb8806f7202ee160df3e22721c3424a168",
"0x5c48def0ea3c88f90f3a283fc4adba6bb11f957e3b647949692c7274e5f3433a",
"0xbe796dcb5e01753faafd8248d71ceb6b3effedce254671f44bdfdde9e099e631"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

