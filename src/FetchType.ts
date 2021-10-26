export type FetchResponse<T> = {
    statusText: string;
    json: () => T;
    ok: boolean;
};
export type FetchError = { message: string }

export type DataOrErrors<T, R = FetchError[]> = {
    data: T | null;
    errors: R | null;
}
