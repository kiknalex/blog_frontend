export const isLoggedIn = () => {
	const sessionTokenString = localStorage.getItem("session-token");
	if (!sessionTokenString) {
		return false;
	}

	const sessionToken = JSON.parse(sessionTokenString);

	return sessionToken.expiresAt > Date.now() ? true : false;
};
