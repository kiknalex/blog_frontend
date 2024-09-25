export const isLoggedIn = () => {
	const sessionTokenString = localStorage.getItem("session-token");
	if (!sessionTokenString) {
		return false;
	}

	const sessionToken = JSON.parse(sessionTokenString);

	return sessionToken.expiresAt > Date.now() ? true : false;
};
export const headersWithToken = (): HeadersInit | undefined => {
	const tokenToParse = localStorage.getItem("session-token");
	if (tokenToParse) {
		const token = JSON.parse(localStorage.getItem("session-token")!);
		const headers = {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token.token}`,
		};
		return new Headers(headers);
	} else {
		return undefined;
	}
};
