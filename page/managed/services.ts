export class Service {
    static baseUrl = "";

    static toURL(request) {
        return `${this.baseUrl}${request}`;
    }
}

export class SearchService {
    async search(prompt: string): Promise<string> {
        const $data = new FormData();
        $data.append("JuYXBjcDVhemp0bjphNDJrZGRhZWJqbm", JSON.stringify(prompt))

        return await fetch(Service.toURL("RlYjRsbnwxYWpxZXNtZWFsMDRvanZibT"), {
            method: "post",
            credentials: "include",
            body: $data
        }).then(res => res.json()).then(r => {
            if ("data" in r) {
                const d = r.data;

                return d === null ? null : `${d}`;
            } else if ("aborted" in r) {
                throw new Error("request aborted by server");
            } else if ("error" in r) {
                throw new Error(r.error);
            }
        });
    }
}