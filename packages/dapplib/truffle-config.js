require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note snow collect harvest option bottom tomato'; 
let testAccounts = [
"0x5779ef2408ef86efcc1de96188f3b0132cadc5a66f4096af2d19819f2e415a7d",
"0xd39f0f5d56ecf0d082e41c4683edbac4bec7c678c98751853f08f6d950480180",
"0xfe2a61abaaa646603a3d79efdf165f6b803e61106ebefe98657730a6f04e018a",
"0x61634f9e5371d2c2925cd5418076a253be4248e7eebc06e0400e9bbc8453d093",
"0xd29e35eafe488f02d0cc75ec74a1fa921ffe2cd9314dd8cd494df4de91c26f7e",
"0x2811dcce75fcc433ab47658a5a60670f98e243035dbb460adb9576848dcc1da4",
"0x5d256e483804a74c06cf1e0976eddc87a5128218610fc7c99545a7c76885c3d1",
"0xb87a0458a23f86b6c26f404c9e60fc1b3d65600b97be8ef8f23ed60b2f98f098",
"0x8abed156a1a918a9f9870fcb010f4ebbb6c8f4a5a5812651abd500ecf8013ebc",
"0x40f9fb1564dcf36a4dd18f60c62bf3fe22f5165114e40bd59b5572481b147662"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

