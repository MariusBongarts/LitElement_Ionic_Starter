var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class HttpClient {
    constructor(config) {
        this.config = config;
    }
    get(url) {
        return this.createFetch('GET', url);
    }
    post(url, body) {
        return this.createFetch('POST', url, body);
    }
    put(url, body) {
        return this.createFetch('PUT', url, body);
    }
    patch(url, body) {
        return this.createFetch('PATCH', url, body);
    }
    delete(url) {
        return this.createFetch('DELETE', url);
    }
    createFetch(method, url, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestOptions = {
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                method: method,
                credentials: 'include'
            };
            if (body) {
                requestOptions.body = JSON.stringify(body);
            }
            const response = yield fetch(this.config.baseURL + url, requestOptions);
            if (response.ok) {
                return response;
            }
            else {
                let message = yield response.text();
                try {
                    message = JSON.parse(message).message;
                }
                catch (e) { }
                message = message || response.statusText;
                return Promise.reject(message);
            }
        });
    }
}
