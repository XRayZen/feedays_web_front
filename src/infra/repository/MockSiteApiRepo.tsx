import { ISiteApiRepo as ISiteApiRepo } from './interfaceApiRepo';

export class MockSiteApiRepo implements ISiteApiRepo {
  Search(userID: string, searchRequest: ApiSearchRequest): Promise<SearchResult> {
    return new Promise((resolve, reject) => {
      new SearchResult()
    } );
  }
  SubscribeSite(userID: string, site: WebSite, isSubscribe: boolean): Promise<string> {
    throw new Error('Method not implemented.');
  }
  FetchArticle(
    userID: string,
    fetchArticleRequest: FetchArticlesRequest
  ): Promise<FetchArticleResponse> {
    throw new Error('Method not implemented.');
  }
  ExploreCategory(userID: string): Promise<ExploreCategory[]> {
    throw new Error('Method not implemented.');
  }
  ModifyExploreCategory(
    userID: string,
    exploreCategory: ExploreCategory,
    ModifyType: string
  ): Promise<string> {
    throw new Error('Method not implemented.');
  }
  ChangeSiteCategory(userID: string, siteUrl: string, categoryName: string): Promise<string> {
    throw new Error('Method not implemented.');
  }
  DeleteSite(userID: string, siteUrl: string, isUnscoped: boolean): Promise<string> {
    throw new Error('Method not implemented.');
  }
}
