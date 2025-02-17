# BCSE Token on Binance Smart Chain

## Get bsce token information by using ethers lib
```
tokenInformation: async function (req, res) {
		try {
			const web3Provider = new ethers.Contract(
				process.env.BSCE_CONTRACT,
				bsceMainnetABI,
				new ethers.getDefaultProvider(process.env.BSC_RPC)
			);
			const tokenName   = await web3Provider.name();
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
```