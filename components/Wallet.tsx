"use client";
import { useEffect, useState } from "react";

const Wallet = () => {
	const [, setData] = useState(null);
	const [ethAddress, setEthAddress] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// todo: might use this in future...
	//  const truncWallet = ethAddress
	// 	? String(ethAddress)?.toString().substring(0, 8) + "..."
	// 	: "";

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`/api/wallet`);

				if (!response.ok) {
					throw new Error("Network Error");
				}
				const result = await response.json();
				setData(result);
				setEthAddress(result.wallets.ethAddress);
			} catch (err: any) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) {
		return "Loading...";
	}

	if (error) {
		return `Can't get wallet, please refresh page...`;
	}

	return <p className="truncate hover:trun">{ethAddress}</p>;
};

export default Wallet;
