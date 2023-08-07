import { axiosInstance } from "constants/axios";

export const useApi = () => {
	const token = localStorage.getItem("token");
	const config = token
		? { headers: { Authorization: `Bearer ${token}` } }
		: undefined;

	const request = (
		method: "get" | "put" | "post" | "delete",
		url: string,
		options?: {
			data?: any;
			onSuccess?: (response: any) => void;
			onError?: (error: any) => void;
		}
	) => {
		const axiosPromise =
			method === "get"
				? axiosInstance.get(url, { params: options?.data, ...config })
				: axiosInstance[method](url, options?.data, config);
		axiosPromise
			.then((response) => options?.onSuccess && options.onSuccess(response))
			.catch((error) => options?.onError && options.onError(error));
	};

	return { request };
};
