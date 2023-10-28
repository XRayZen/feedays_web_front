import { IUserApiRepo } from './interfaceApiRepo';

// IUserApiRepoを継承して実装する
export class ImplUserApiRepo implements IUserApiRepo {
  constructor() {
  }

  genUserID(): Promise<string> {
    throw new Error('Method not implemented.');
  }

  RegisterUser(userID: string, userConfig: UserConfig): Promise<string> {
    throw new Error('Method not implemented.');
  }

  ConfigSync(userID: string): Promise<ConfigSyncResponse> {
    throw new Error('Method not implemented.');
  }

  ReportReadActivity(userID: string, readHistory: ReadHistory): Promise<string> {
    throw new Error('Method not implemented.');
  }

  UpdateUiConfig(userID: string, clientConfig: ClientConfig): Promise<string> {
    throw new Error('Method not implemented.');
  }

  ModifySearchHistory(
    userID: string,
    searchHistory: SearchHistory[],
    searchHistoryType: string
  ): Promise<string[]> {
    throw new Error('Method not implemented.');
  }

  ModifyFavoriteSite(
    userID: string,
    favoriteSite: FavoriteSite[],
    favoriteSiteType: string
  ): Promise<string> {
    throw new Error('Method not implemented.');
  }

  ModifyFavoriteArticle(
    userID: string,
    favoriteArticle: FavoriteArticle[],
    favoriteArticleType: string
  ): Promise<string> {
    throw new Error('Method not implemented.');
  }
  GetAPIRequestLimit(userID: string): Promise<ApiLimitConfig> {
    throw new Error('Method not implemented.');
  }
  ModifyAPIRequestLimit(userID: string, apiConfig: ApiLimitConfig): Promise<string> {
    throw new Error('Method not implemented.');
  }
  DeleteUserData(userID: string): Promise<string> {
    throw new Error('Method not implemented.');
  }
}
