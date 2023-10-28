import '@testing-library/jest-dom';
import { ApiHandler } from './apiHandler';
import { MockUserApiRepo } from '../repository/mockUserApiRepo';
import { genMockUserConfig, genMockWebSite, genMockWebSites } from '../repository/genMockData';
import { ReadHistory } from '../data/userConfig';
import { ClientConfig, UiConfig, UiResponsiveFontSize } from '../data/appConfig';
import { MockRssApiRepo } from '../repository/mockRssApiRepo';
import { ApiSearchRequest } from '../data/request';

// モックデーターが正しく生成されるかテスト
describe('MockApi Test', () => {
  it('MockUserApiRepo Test', async () => {
    let api = new ApiHandler(new MockUserApiRepo(), new MockRssApiRepo());

    let genUserId = await api.userApiRepo.genUserID();
    expect(genUserId).toBe('Mock User ID');

    let registerUser = await api.userApiRepo.RegisterUser('Mock User ID', genMockUserConfig('Mock User ID'));
    expect(registerUser).toBe('Success RegisterUser');

    let configSync = await api.userApiRepo.ConfigSync('Mock User ID');
    expect(configSync.responseType).toBe('accept');

    let reportReadActivity = await api.userApiRepo.ReportReadActivity(
      'Mock User ID',
      new ReadHistory('Mock User ID', 'Mock Article ID', 'Mock Article Title', 'Mock Article URL')
    );
    expect(reportReadActivity).toBe('Success ReportReadActivity');

    let updateUiConfig = await api.userApiRepo.UpdateUiConfig(
      'Mock User ID',
      new ClientConfig(new UiConfig(0, '', 0, new UiResponsiveFontSize(0, 0, 0), new UiResponsiveFontSize(0, 0, 0)))
    );
    expect(updateUiConfig).toBe('Success UpdateUiConfig');
  });

  // モックデーターが正しく生成されるかテスト
  it('MockRssApiRepo Test', async () => {
    let api = new ApiHandler(new MockUserApiRepo(), new MockRssApiRepo());
    let search = await api.rssApiRepo.Search(
      'Mock User ID',
      new ApiSearchRequest('Mock Search Type', 'Mock Word', 'Mock User ID', 'Mock Account Type', 'Mock Request Time')
    );
    expect(search.apiResponse).toBe('accept');
    let subscribeSite = await api.rssApiRepo.SubscribeSite( 'Mock User ID', genMockWebSites()[0], true);
    expect(subscribeSite).toBe('Success Subscribe Site');
  });
});
