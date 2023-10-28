export class ApiSearchRequest {
  searchType: string;
  word: string;
  userID: string;
  accountType: string;
  requestTime: string;

  constructor() {
    this.searchType = '';
    this.word = '';
    this.userID = '';
    this.accountType = '';
    this.requestTime = '';
  }
}

// 記事取得は最新の記事か最古の記事かを取得するか指定する
// 新規取得は100件上限に取得する
export class FetchArticlesRequest {
  siteUrl: string;
  // 最新記事取得(Latest)か最古記事取得(Old)か更新取得(Update)かのEnum
  requestType: string;
  // 記事読み込み数
  readCount: number;
  // 更新間隔（分）
  intervalMinutes: number;
  // クライアント側の記事最新日時
  lastModified: string;
  // クライアント側の記事最古日時
  oldestModified: string;

  constructor() {
    this.siteUrl = '';
    this.requestType = '';
    this.readCount = 0;
    this.intervalMinutes = 0;
    this.lastModified = '';
    this.oldestModified = '';
  }
}
