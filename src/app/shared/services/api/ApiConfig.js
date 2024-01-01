import axios from "axios";

export const Api = () => {
	return axios.create({
		baseURL: "https://api-piatto-divino.vercel.app",
	});
};
