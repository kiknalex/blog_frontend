export const isStatusOk = (statusCode: number) => {
	return statusCode - 200 >= 0 && statusCode - 200 < 100 ? true : false;
};
