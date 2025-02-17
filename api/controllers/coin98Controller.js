"use strict";
const { ethers } = require("ethers");
const coin98MainnetABI = require("./../../abi/coin98/mainnet.json")

module.exports = {
	tokenInformation: async function (req, res) {
		try {
			const web3Provider = new ethers.Contract(
				process.env.COIN98_CONTRACT,
				coin98MainnetABI,
				new ethers.getDefaultProvider(process.env.BSC_RPC)
			);
			const tokenName = await web3Provider.name();
			const tokenSymbol = await web3Provider.symbol();
			const totalSupply = await web3Provider.totalSupply();

			res.json({
				tokenName: tokenName,
				tokenSymbol: tokenSymbol,
				totalSupply: ethers.formatEther(totalSupply),
				network: 'This is binance smart chain mainnet'
			});
		} catch (error) {
			console.error("Error fetching token data:", error);
			res.status(500).json({ error: "Failed to retrieve token data" });
		}
	}
}
