interface IUserApiRepo {
  isMOck: boolean;
  // get: (url: string) => Promise<any>
  genUserID: () => Promise<string>;
  RegisterUser(userID: string,userConfig: UserConfig): Promise<string>;
  ConfigSync(userID: string): Promise<ConfigSyncResponse>;
  ReportReadActivity(userID: string,readHistory: ReadHistory): Promise<string>;
  UpdateUiConfig(userID: string,clientConfig: ClientConfig): Promise<string>;

  ModifySearchHistory(userID: string,searchHistory: SearchHistory[],searchHistoryType: string): Promise<string>;
  ModifyFavoriteSite(userID: string,favoriteSite: FavoriteSite[],favoriteSiteType: string): Promise<string>;
  ModifyFavoriteArticle(userID: string,favoriteArticle: FavoriteArticle[],favoriteArticleType: string): Promise<string>;

  GetAPIRequestLimit(userID: string): Promise<ApiConfig>;
  ModifyAPIRequestLimit(userID: string,apiConfig: ApiConfig): Promise<string>;

  DeleteUserData(userID: string): Promise<string>;
}

interface IRssApiRepo {
  
	// case "Search":
	// 	return functions.Search(access_ip, user_id, request_argument_json1)
	// case "SubscribeSite":
	// 	return functions.SubscribeSite(access_ip, user_id, request_argument_json1, request_argument_json2)
	// case "FetchArticle":
	// 	return functions.FetchArticle(access_ip, user_id, request_argument_json1)
	// case "ModifyExploreCategory":
	// 	return functions.ModifyExploreCategory(request_argument_json1, request_argument_json2)
	// case "ChangeSiteCategory":
	// 	return functions.ChangeSiteCategory(access_ip, user_id, request_argument_json1, request_argument_json2)
	// case "DeleteSite":
	// 	return functions.DeleteSite(access_ip, request_argument_json1, request_argument_json2)

}





