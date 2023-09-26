
class SearchResult {
    apiResponse: string;
    responseMessage: string;
    resultType: string;
    exception: string;
    searchType: string;
    websites: WebSite[];
    articles: Article[];

    constructor() {
        this.apiResponse = "";
        this.responseMessage = "";
        this.resultType = "";
        this.exception = "";
        this.searchType = "";
        this.websites = [];
        this.articles = [];
    }
}

class APIResponse {
    responseType: string;
    value: string;
    error: string;

    constructor() {
        this.responseType = "";
        this.value = "";
        this.error = "";
    }
}

class FetchArticleResponse {
    responseType: string;
    articles: Article[];
    error: string;

    constructor() {
        this.responseType = "";
        this.articles = [];
        this.error = "";
    }
}

class ConfigSyncResponse {
    responseType: string;
    userConfig: UserConfig;
    error: string;

    constructor() {
        this.responseType = "";
        this.userConfig = new UserConfig();
        this.error = "";
    }
}

