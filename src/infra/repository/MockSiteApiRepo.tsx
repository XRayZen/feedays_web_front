import { ISiteApiRepo as ISiteApiRepo } from './interfaceApiRepo';

export class MockSiteApiRepo implements ISiteApiRepo {
  Search(userID: string, searchRequest: ApiSearchRequest): Promise<SearchResult> {
    return new Promise((resolve, reject) => {
      resolve(
        new SearchResult(
          'accept',
          'Success Search',
          'WebSite',
          '',
          'WebSite',
          [new WebSite('https://www.g', '', '', '', '', '', '', [''], '')],
          [
            new Article(
              'https://www.google.c',
              '',
              '',
              new RssFeedImage('', ''),
              '',
              '',
              false,
              '',
              ''
            ),
          ]
        )
      );
    });
  }
  SubscribeSite(userID: string, site: WebSite, isSubscribe: boolean): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve('Success Subscribe Site');
    });
  }
  FetchArticle(
    userID: string,
    fetchArticleRequest: FetchArticlesRequest
  ): Promise<FetchArticleResponse> {
    return new Promise((resolve, reject) => {
      resolve(new FetchArticleResponse('accept', genMockArticles(), ''));
    });
  }
  ExploreCategory(userID: string): Promise<ExploreCategory[]> {
    return new Promise((resolve, reject) => {
      resolve(genMockExploreCategories());
    });
  }
  ModifyExploreCategory(
    userID: string,
    exploreCategory: ExploreCategory,
    ModifyType: string
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve('Success ModifyExploreCategory');
    });
  }
  ChangeSiteCategory(userID: string, siteUrl: string, categoryName: string): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve('Success ChangeSiteCategory');
    });
  }
  DeleteSite(userID: string, siteUrl: string, isUnscoped: boolean): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve('Success DeleteSite');
    });
  }
}
