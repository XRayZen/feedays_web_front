// モックテスト用のデータを生成して返す

import { ExploreCategory } from "../data/explore";
import { UserConfig } from "../data/userConfig";
import { Article, RssFeedImage, WebSite } from "../data/webSite";

// サイトを生成する

export function genMockWebSites(): WebSite[] {
  let webSites: WebSite[] = [];
  for (let i = 0; i < 5; i++) {
    let url = "https://www.gstatic.com/webp/gallery/+"+i+".webp";
    if (i == 0) {
      url = "https://www.gstatic.com/webp/gallery/1.webp";
    }
    let webSite = genMockWebSite(url);
    webSites.push(webSite);
  }
  return webSites;
}

export function genMockWebSite(imageUrl:string): WebSite {
  return new WebSite(
    'https://www.g',
    imageUrl,
    '',
    '',
    '',
    '',
    '',
    [''],
    ''
  );
}

// 記事のモックデータを生成して返す
export function genMockArticles(): Article[] {
  let articles: Article[] = [];
  for (let i = 0; i < 6; i++) {
    let imageUrl= "https://colinbendell.github.io/webperf/animated-gif-decode/"+i+".webp"
    if (i == 0) {
      imageUrl = "https://colinbendell.github.io/webperf/animated-gif-decode/1.webp";
    }
    articles.push(
      new Article(
        'title' + i,
        'description' + i,
        'link' + i,
        new RssFeedImage(
          imageUrl,
          'data' + i
        ),
        'site' + i,
        'publishedAt' + i,
        false,
        'category' + i,
        'siteUrl' + i
      )
    );
  }
  return articles;
}

// ExploreCategoryのモックデータを生成して返す
export function genMockExploreCategories(): ExploreCategory[] {
  let exploreCategories: ExploreCategory[] = [];
  for (let i = 0; i < 10; i++) {
    exploreCategories.push(
      new ExploreCategory(
        'category' + i,
        // イラストや画像を表示する
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxvrqXBEb4N9O11rxy6fdpSdnAio1cYG0GvgjmrDeHUVyc-U2SnolR4kUseN5CPhP9vfnxKDim3PjnzlNwWlcfRMRzOItu_kl05cnBIEb_S3D5hwJkhQoKa9tgnUHEYpI3-Y0WO4jWGpiitYso-OtWROLRGwiWw01-_wVqJ6wolygvTQN_i9xj7un7njJB/s400/bluebird_fired_text.png',
        'data' + i,
        'site' + i,
        'Mock JP ' + i
      )
    );
  }
  return exploreCategories;
}

// ユーザー設定を生成する
export function genMockUserConfig(userID: string): UserConfig {
  return new UserConfig("Mock User Name",userID,"Free","JPN",[],[],[],[],[])
}

// 




