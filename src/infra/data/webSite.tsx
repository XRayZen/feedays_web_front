// WebSiteの構造体
class WebSite {
  // サイト名
  siteName: string;
  // サイトの画像URL
  siteImage: string;
  // サイトの説明
  siteDescription: string;
  // サイトのID
  siteID: string;
  // サイトのURL
  siteURL: string;
  // サイトのカテゴリー（ニュース、エンタメ、スポーツ、etc...）
  siteCategory: string;
  // サイトのRSS URL
  siteRssURL: string;
  // サイトのタグ
  siteTags: string[];
  // サイトの最終更新日時
  lastModified: string;

  constructor() {
    this.siteName = '';
    this.siteImage = '';
    this.siteDescription = '';
    this.siteID = '';
    this.siteURL = '';
    this.siteCategory = '';
    this.siteRssURL = '';
    this.siteTags = [];
    this.lastModified = '';
  }
}

class Article {
  title: string;
  description: string;
  link: string;
  image: RssFeedImage;
  // 記事のサイト名
  site: string;
  // 記事の公開日時
  publishedAt: string;
  // 記事が既読かどうか
  isReedLate: boolean;
  category: string;
  siteUrl: string;

  constructor() {
    this.title = '';
    this.description = '';
    this.link = '';
    this.image = new RssFeedImage();
    this.site = '';
    this.publishedAt = '';
    this.isReedLate = false;
    this.category = '';
    this.siteUrl = '';
  }
}

class RssFeedImage {
  // 画像のリンク
  link: string;
  // 画像のデータ
  image: string;

  constructor() {
    this.link = '';
    this.image = '';
  }
}
