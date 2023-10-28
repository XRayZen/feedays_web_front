import { ClientConfig, UiConfig, UiResponsiveFontSize } from "./appConfig";

export class UserConfig {
  userName: string;
  userUniqueID: string;
  clientConfig: ClientConfig;
  accountType: string;
  country: string;
  searchHistory: SearchHistory[];
  subscribeWebSite: SubscribeWebSite[];
  favoriteSite: FavoriteSite[];
  favoriteArticle: FavoriteArticle[];
  readHistory: ReadHistory[];

  constructor(
    userName: string,
    userUniqueID: string,
    accountType: string,
    country: string,
    searchHistory: SearchHistory[],
    subscribeWebSite: SubscribeWebSite[],
    favoriteSite: FavoriteSite[],
    favoriteArticle: FavoriteArticle[],
    readHistory: ReadHistory[]
  ) {
    this.userName = userName;
    this.userUniqueID = userUniqueID;
    this.clientConfig = new ClientConfig(
      new UiConfig(0, '', 0, new UiResponsiveFontSize(0, 0, 0), new UiResponsiveFontSize(0, 0, 0))
    );
    this.accountType = accountType;
    this.country = country;
    this.searchHistory = searchHistory;
    this.subscribeWebSite = subscribeWebSite;
    this.favoriteSite = favoriteSite;
    this.favoriteArticle = favoriteArticle;
    this.readHistory = readHistory;
  }
}

export class SubscribeWebSite {
  folderIndex: number;
  folderName: string;
  siteIndex: number;
  //これだとWebSiteを変換する為に都度クエリが走るから、ここはSiteIDだけ保持してクライアント側で必要になったらSite情報を取得するようにする
  // サイト情報はユーザー側で保持しておくからDB型-API型双変換でサイトクエリが走る事にはならない
  siteID: number;

  constructor(folderIndex: number, folderName: string, siteIndex: number, siteID: number) {
    this.folderIndex = folderIndex;
    this.folderName = folderName;
    this.siteIndex = siteIndex;
    this.siteID = siteID;
  }
}

export class FavoriteSite {
  siteID: number;
  createdAt: string;

  constructor(siteID: number, createdAt: string) {
    this.siteID = siteID;
    this.createdAt = createdAt;
  }
}

export class FavoriteArticle {
  articleID: number;
  createdAt: string;

  constructor(articleID: number, createdAt: string) {
    this.articleID = articleID;
    this.createdAt = createdAt;
  }
}

export class SearchHistory {
  searchWord: string;
  searchAt: string;

  constructor(searchWord: string, searchAt: string) {
    this.searchWord = searchWord;
    this.searchAt = searchAt;
  }
}

export class ReadHistory {
  link: string;
  accessAt: string;
  accessPlatform: string;
  accessIP: string;

  constructor(link: string, accessAt: string, accessPlatform: string, accessIP: string) {
    this.link = link;
    this.accessAt = accessAt;
    this.accessPlatform = accessPlatform;
    this.accessIP = accessIP;
  }
}
