import { ClientConfig, ApiLimitConfig } from '../data/appConfig';
import { ConfigSyncResponse } from '../data/response';
import { UserConfig, ReadHistory, SearchHistory, FavoriteSite, FavoriteArticle } from '../data/userConfig';
import { genMockUserConfig } from './genMockData';
import { IUserApiRepo } from './interfaceApiRepo';

export class MockUserApiRepo implements IUserApiRepo {

  genUserID(): Promise<string> {
    // "Mock User ID"を返す
    return new Promise((resolve, reject) => {
      resolve('Mock User ID');
    });
  }

  RegisterUser(userID: string, userConfig: UserConfig): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve('Success RegisterUser');
    });
  }

  ConfigSync(userID: string): Promise<ConfigSyncResponse> {
    return new Promise((resolve, reject) => {
      resolve(new ConfigSyncResponse('accept', genMockUserConfig(userID), ''));
    });
  }

  ReportReadActivity(userID: string, readHistory: ReadHistory): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve('Success ReportReadActivity');
    });
  }

  UpdateUiConfig(userID: string, clientConfig: ClientConfig): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve('Success UpdateUiConfig');
    });
  }

  ModifySearchHistory(
    userID: string,
    searchHistory: SearchHistory[],
    searchHistoryType: string
  ): Promise<string[]> {
    return new Promise((resolve, reject) => {
      resolve(['Mock', 'Mock2']);
    });
  }

  ModifyFavoriteSite(
    userID: string,
    favoriteSite: FavoriteSite[],
    favoriteSiteType: string
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve('Success ModifyFavoriteSite');
    });
  }

  ModifyFavoriteArticle(
    userID: string,
    favoriteArticle: FavoriteArticle[],
    favoriteArticleType: string
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve('Success ModifyFavoriteArticle');
    });
  }

  GetAPIRequestLimit(userID: string): Promise<ApiLimitConfig> {
    return new Promise((resolve, reject) => {
      resolve(new ApiLimitConfig('Mock', 0, 0, 0, 0, 0));
    });
  }

  DeleteUserData(userID: string): Promise<string> {
    // Success DeleteUserData
    return new Promise((resolve, reject) => {
      resolve('Success DeleteUserData');
    });
  }
}
