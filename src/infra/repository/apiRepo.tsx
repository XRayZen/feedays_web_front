interface IApiRepo {
  isMOck: boolean;
  // get: (url: string) => Promise<any>
  genUserID: () => Promise<string>;
  RegisterUser(userID: string,userConfig: UserConfig): Promise<void>;
  ConfigSync(userID: string): Promise<UserConfig>;
  ReportReadActivity(userID: string,readHistory: ReadHistory): Promise<void>;
}

// case "ConfigSync":
//   return functions.ConfigSync(user_id)
// case "ReportReadActivity":
//   return functions.ReportReadActivity(user_id, argument_json_1)
// case "UpdateUiConfig":
//   return functions.UpdateUiConfig(user_id, argument_json_1)
// case "ModifySearchHistory":
//   return functions.ModifySearchHistory(user_id, argument_json_1, argument_json_2)
// case "ModifyFavoriteSite":
//   return functions.ModifyFavoriteSite(user_id, argument_json_1, argument_json_2)
// case "ModifyFavoriteArticle":
//   return functions.ModifyFavoriteArticle(user_id, argument_json_1, argument_json_2)
// case "GetAPIRequestLimit":
//   return functions.GetAPIRequestLimit(user_id)
// case "ModifyAPIRequestLimit":