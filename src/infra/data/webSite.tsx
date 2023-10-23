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

  constructor(
    siteName: string,
    siteImage: string,
    siteDescription: string,
    siteID: string,
    siteURL: string,
    siteCategory: string,
    siteRssURL: string,
    siteTags: string[],
    lastModified: string
  ) {
    this.siteName = siteName;
    this.siteImage = siteImage;
    this.siteDescription = siteDescription;
    this.siteID = siteID;
    this.siteURL = siteURL;
    this.siteCategory = siteCategory;
    this.siteRssURL = siteRssURL;
    this.siteTags = siteTags;
    this.lastModified = lastModified;
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

  constructor(title: string, description: string, link: string, image: RssFeedImage, site: string, publishedAt: string, isReedLate: boolean, category: string, siteUrl: string) {
    this.title = title;
    this.description = description;
    this.link = link;
    this.image = image;
    this.site = site;
    this.publishedAt = publishedAt;
    this.isReedLate = isReedLate;
    this.category = category;
    this.siteUrl = siteUrl;
  }
}

class RssFeedImage {
  // 画像のリンク
  link: string;
  // 画像のデータ
  image: string;

  constructor(link: string, image: string) {
    this.link = link;
    this.image = image;
  }
}
