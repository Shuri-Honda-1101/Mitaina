export const getJSON = async <T>(url: string): Promise<T | undefined> => {
	return await toJSON<T>(fetch(`/api/${url}`));
};
export const toJSON = async <T>(fetchRequest: Promise<Response>): Promise<T | undefined> => {
	return fetchRequest.then((res) => (res.ok ? res.json().then((json) => json) : undefined));
};

export const postJSON = <T>(url: string, data: T) => {
	return fetch(`/api/${url}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	});
};

export const putJSON = <T>(url: string, data: T) => {
	return fetch(`/api/${url}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	});
};
type Methods = 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';
type CustomFetchProps<T, U extends Methods> = U extends 'GET' | 'DELETE'
	? {
			url: string;
			method: U;
	  }
	: U extends 'PATCH'
	? { url: string; method: U; data: Partial<T> }
	: { url: string; method: U; data: T };

export const customFetch = async <Method extends Methods, PostData, GetData = unknown>(
	props: CustomFetchProps<PostData, Method>
) => {
	if (props.method === 'GET' || props.method === 'DELETE') {
		return await toJSON<GetData>(fetch(`/api/${props.url}`, { method: props.method }));
	} else {
		return await toJSON<GetData>(
			fetch(`/api/${props.url}`, {
				method: props.method,
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(props.data)
			})
		);
	}
};
