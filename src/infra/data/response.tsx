


// type SearchResult struct {
// 	// refuse, accept
// 	ApiResponse     string `json:"apiResponse"`
// 	ResponseMessage string `json:"responseMessage"`
// 	// found, none, new site, error
// 	ResultType string `json:"resultType"`
// 	Exception  string `json:"exception"`
// 	//AddContentならサイトを返す
// 	//PowerSearchなら記事を返す
// 	SearchType string    `json:"searchType"`
// 	Websites   []WebSite `json:"websites"`
// 	Articles   []Article `json:"articles"`
// }

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


// type APIResponse struct {
// 	ResponseType string `json:"responseType"`
// 	Value        string `json:"value"`
// 	Error        string `json:"error"`
// }

// type FetchArticleResponse struct {
// 	ResponseType string    `json:"responseType"`
// 	Articles     []Article `json:"articles"`
// 	Error        string    `json:"error"`
// }

// type ConfigSyncResponse struct {
// 	ResponseType string     `json:"responseType"`
// 	UserConfig   UserConfig `json:"userConfig"`
// 	Error        string     `json:"error"`
// }


