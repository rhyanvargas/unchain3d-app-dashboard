"use client";
import { useEffect, useState } from "react";

const Wallet = () => {
	const [, setData] = useState(null);
	const [ethAddress, setEthAddress] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

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
		return `Error: ${error}`;
	}

	return ethAddress;
};

export default Wallet;
