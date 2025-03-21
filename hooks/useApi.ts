"use client";
import { useState } from "react";
import { AxiosResponse } from "axios";

const useApi = <T>(
	apiFunc: (...args: any[]) => Promise<AxiosResponse<any>>
) => {
	const [data, setData] = useState<T>();
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const request = async (...args: any[]) => {
		try {
			setLoading(true);
			const res = await apiFunc(...args);
			setLoading(false);

			setData(res.data);

			return res;
		} catch (error) {
			console.log(error);
			setError(true);
		}
	};

	return { request, data, error, loading };
};

export default useApi;
