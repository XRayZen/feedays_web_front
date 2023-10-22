class UserConfig {
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

  constructor() {
    this.userName = '';
    this.userUniqueID = '';
    this.clientConfig = new ClientConfig();
    this.accountType = '';
    this.country = '';
    this.searchHistory = [];
    this.subscribeWebSite = [];
    this.favoriteSite = [];
    this.favoriteArticle = [];
    this.readHistory = [];
  }
}

class SubscribeWebSite {
  folderIndex: number;
  folderName: string;
  siteIndex: number;
  //これだとWebSiteを変換する為に都度クエリが走るから、ここはSiteIDだけ保持してクライアント側で必要になったらSite情報を取得するようにする
  // サイト情報はユーザー側で保持しておくからDB型-API型双変換でサイトクエリが走る事にはならない
  siteID: number;

  constructor() {
    this.folderIndex = 0;
    this.folderName = '';
    this.siteIndex = 0;
    this.siteID = 0;
  }
}

class FavoriteSite {
  siteID: number;
  createdAt: string;

  constructor() {
    this.siteID = 0;
    this.createdAt = '';
  }
}

class FavoriteArticle {
  articleID: number;
  createdAt: string;

  constructor(articleID: number, createdAt: string) {
    this.articleID = articleID;
    this.createdAt = createdAt;
  }
}

class SearchHistory {
  searchWord: string;
  searchAt: string;

  constructor(searchWord: string, searchAt: string) {
    this.searchWord = searchWord;
    this.searchAt = searchAt;
  }
}

class ReadHistory {
  link: string;
  accessAt: string;
  accessPlatform: string;
  accessIP: string;

  constructor() {
    this.link = '';
    this.accessAt = '';
    this.accessPlatform = '';
    this.accessIP = '';
  }
}
