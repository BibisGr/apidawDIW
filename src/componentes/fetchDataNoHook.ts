
function getSuspended<T>(promise: Promise<T>) {
    let status: 'pending' | 'success' | 'error' = 'pending';
    let result!: T;
    let error: unknown;
    const suspender = promise.then(
        (res) => {
            status = 'success';
            result = res;
        },
        (err) => {
            status = 'error';
            error = err;
        }
    )
    return {
        read(): T {
            if (status == 'pending') {
                throw suspender;
            } else if (status == 'error') {
                throw error
            } else {
                return result
            }
        }
    };
}

export function fetchDatanoHook(url: string){
    const promise = fetch(url)
        .then(res => res.json());
    return getSuspended(promise)
}
