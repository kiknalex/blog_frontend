import { createContext } from "react";

export const useAuthContext = () => {
	const sessionToken = localStorage.getItem("session-token");
	if (!sessionToken) {
		return createContext("");
	}
	return createContext(sessionToken);
};
