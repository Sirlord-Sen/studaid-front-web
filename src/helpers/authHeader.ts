import { StorageService } from "src/services/storage.service";

export function authHeader() {
    const storage = new StorageService()
    // return authorization header with jwt token
    let token = storage.getTokens();

    if (token && token.accessToken) {
        return { 'Authorization': 'Bearer ' + token.accessToken };
    } else {
        return {};
    }
}