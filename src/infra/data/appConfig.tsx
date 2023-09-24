


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
        this.themeMode = "";
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

class ApiConfig {
    accountType: string;
    refreshArticleInterval: number;
    fetchArticleRequestInterval: number;
    fetchArticleRequestLimit: number;
    fetchTrendRequestInterval: number;
    fetchTrendRequestLimit: number;

    constructor() {
        this.accountType = "";
        this.refreshArticleInterval = 0;
        this.fetchArticleRequestInterval = 0;
        this.fetchArticleRequestLimit = 0;
        this.fetchTrendRequestInterval = 0;
        this.fetchTrendRequestLimit = 0;
    }
}









