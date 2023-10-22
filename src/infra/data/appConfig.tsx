class ClientConfig {
  uiConfig: UiConfig;

  constructor() {
    this.uiConfig = new UiConfig();
  }
}

class UiConfig {
  themeColorValue: number;
  themeMode: string;
  drawerMenuOpacity: number;
  articleListFontSize: UiResponsiveFontSize;
  articleDetailFontSize: UiResponsiveFontSize;

  constructor() {
    this.themeColorValue = 0;
    this.themeMode = '';
    this.drawerMenuOpacity = 0;
    this.articleListFontSize = new UiResponsiveFontSize();
    this.articleDetailFontSize = new UiResponsiveFontSize();
  }
}

class UiResponsiveFontSize {
  mobile: number;
  tablet: number;
  defaultSize: number;

  constructor() {
    this.mobile = 0;
    this.tablet = 0;
    this.defaultSize = 0;
  }
}

class ApiLimitConfig {
  accountType: string;
  refreshArticleInterval: number;
  fetchArticleRequestInterval: number;
  fetchArticleRequestLimit: number;
  fetchTrendRequestInterval: number;
  fetchTrendRequestLimit: number;

  constructor(
    accountType: string,
    refreshArticleInterval: number,
    fetchArticleRequestInterval: number,
    fetchArticleRequestLimit: number,
    fetchTrendRequestInterval: number,
    fetchTrendRequestLimit: number
  ) {
    this.accountType = accountType;
    this.refreshArticleInterval = refreshArticleInterval;
    this.fetchArticleRequestInterval = fetchArticleRequestInterval;
    this.fetchArticleRequestLimit = fetchArticleRequestLimit;
    this.fetchTrendRequestInterval = fetchTrendRequestInterval;
    this.fetchTrendRequestLimit = fetchTrendRequestLimit;
  }
}
