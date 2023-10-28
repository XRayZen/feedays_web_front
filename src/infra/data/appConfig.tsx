export class ClientConfig {
  uiConfig: UiConfig;

  constructor(uiConfig: UiConfig) {
    this.uiConfig = uiConfig;
  }
}

export class UiConfig {
  themeColorValue: number;
  themeMode: string;
  drawerMenuOpacity: number;
  articleListFontSize: UiResponsiveFontSize;
  articleDetailFontSize: UiResponsiveFontSize;

  constructor(
    themeColorValue: number,
    themeMode: string,
    drawerMenuOpacity: number,
    articleListFontSize: UiResponsiveFontSize,
    articleDetailFontSize: UiResponsiveFontSize
  ) {
    this.themeColorValue = themeColorValue;
    this.themeMode = themeMode;
    this.drawerMenuOpacity = drawerMenuOpacity;
    this.articleListFontSize = articleListFontSize;
    this.articleDetailFontSize = articleDetailFontSize;
  }
}

export class UiResponsiveFontSize {
  mobile: number;
  tablet: number;
  defaultSize: number;

  constructor(mobile: number, tablet: number, defaultSize: number) {
    this.mobile = mobile;
    this.tablet = tablet;
    this.defaultSize = defaultSize;
  }
}

export class ApiLimitConfig {
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
