import { UserConfig } from "./userConfig";
import { WebSite, Article } from "./webSite";

export class SearchResult {
  apiResponse: string;
  responseMessage: string;
  resultType: string;
  exception: string;
  searchType: string;
  websites: WebSite[];
  articles: Article[];

  constructor(
    apiResponse: string,
    responseMessage: string,
    resultType: string,
    exception: string,
    searchType: string,
    websites: WebSite[],
    articles: Article[]
  ) {
    this.apiResponse = apiResponse;
    this.responseMessage = responseMessage;
    this.resultType = resultType;
    this.exception = exception;
    this.searchType = searchType;
    this.websites = websites;
    this.articles = articles;
  }
}

export class APIResponse {
  responseType: string;
  value: string;
  error: string;

  constructor(responseType: string, value: string, error: string) {
    this.responseType = responseType;
    this.value = value;
    this.error = error;
  }
}

export class FetchArticleResponse {
  responseType: string;
  articles: Article[];
  error: string;

  constructor(responseType: string, articles: Article[], error: string) {
    this.responseType = responseType;
    this.articles = articles;
    this.error = error;
  }
}

export class ConfigSyncResponse {
  responseType: string;
  userConfig: UserConfig;
  error: string;

  constructor(responseType: string, userConfig: UserConfig, error: string) {
    this.responseType = responseType;
    this.userConfig = userConfig;
    this.error = error;
  }
}
