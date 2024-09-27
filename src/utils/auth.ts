export const isLoggedIn = () => {
	const sessionTokenString = localStorage.getItem("session-token");
	if (!sessionTokenString) {
		return false;
	}

	const sessionToken = JSON.parse(sessionTokenString);

	const isValid = sessionToken.expiresAt > Date.now() - 10_000 ? true : false;
	if (!isValid) {
		localStorage.removeItem("session-token");
	}
	return isValid;
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

export const getIdAndUsername = ():
	| { userId: number; username: string }
	| undefined => {
	const tokenToParse = localStorage.getItem("session-token");

	if (tokenToParse) {
		const userInfo = JSON.parse(tokenToParse);
		return { userId: userInfo.userId, username: userInfo.username };
	} else {
		return undefined;
	}
};
