export interface IUserApiRepo {
  isMOck: boolean;

  genUserID: () => Promise<string>;
  RegisterUser(userID: string, userConfig: UserConfig): Promise<string>;
  ConfigSync(userID: string): Promise<ConfigSyncResponse>;
  ReportReadActivity(userID: string, readHistory: ReadHistory): Promise<string>;
  UpdateUiConfig(userID: string, clientConfig: ClientConfig): Promise<string>;

  ModifySearchHistory(
    userID: string,
    searchHistory: SearchHistory[],
    searchHistoryType: string
  ): Promise<string[]>;

  ModifyFavoriteSite(
    userID: string,
    favoriteSite: FavoriteSite[],
    favoriteSiteType: string
  ): Promise<string>;
  ModifyFavoriteArticle(
    userID: string,
    favoriteArticle: FavoriteArticle[],
    favoriteArticleType: string
  ): Promise<string>;

  GetAPIRequestLimit(userID: string): Promise<ApiLimitConfig>;

  DeleteUserData(userID: string): Promise<string>;
}

export interface ISiteApiRepo {
  Search(userID: string, searchRequest: ApiSearchRequest): Promise<SearchResult>;
  SubscribeSite(userID: string, site: WebSite, isSubscribe: boolean): Promise<string>;
  FetchArticle(
    userID: string,
    fetchArticleRequest: FetchArticlesRequest
  ): Promise<FetchArticleResponse>;

  ExploreCategory(userID: string): Promise<ExploreCategory[]>;
  ModifyExploreCategory(
    userID: string,
    exploreCategory: ExploreCategory,
    ModifyType: string
  ): Promise<string>;
  ChangeSiteCategory(userID: string, siteUrl: string, categoryName: string): Promise<string>;

  DeleteSite(userID: string, siteUrl: string, isUnscoped: boolean): Promise<string>;
}
