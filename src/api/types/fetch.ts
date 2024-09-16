export type GetRequest = (url: string) => Promise<unknown>;
export type PostRequest = (
	url: string,
	body: Body,
	token?: string
) => Promise<unknown>;
export type PutRequest = (
	url: string,
	body: Body,
	token?: string
) => Promise<unknown>;
export type DeleteRequest = (
	url: string,
	body: Body,
	token?: string
) => Promise<unknown>;
