import '@testing-library/jest-dom';
import { ApiHandler } from './apiHandler';
import { ImplUserApiRepo } from '../repository/implUserApiRepo';
import { ImplSiteApiRepo } from '../repository/implRssApiRepo';
import { MockUserApiRepo } from '../repository/mockUserApiRepo';
import { MockSiteApiRepo } from '../repository/mockRssApiRepo';
import { genMockUserConfig } from '../repository/genMockData';
import { ReadHistory } from '../data/userConfig';
import { ClientConfig, UiConfig, UiResponsiveFontSize } from '../data/appConfig';

// モックデーターが正しく生成されるかテスト
describe('MockData Test', () => {
  it('MockUserApiRepo Test', async () => {
    let api = new ApiHandler(new MockUserApiRepo(), new MockSiteApiRepo());

    let genUserId = await api.userApiRepo.genUserID();
    expect(genUserId).toBe('Mock User ID');

    let registerUser = await api.userApiRepo.RegisterUser(
      'Mock User ID',
      genMockUserConfig('Mock User ID')
    );
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
      new ClientConfig(
        new UiConfig(0, '', 0, new UiResponsiveFontSize(0, 0, 0), new UiResponsiveFontSize(0, 0, 0))
      )
    );
    expect(updateUiConfig).toBe('Success UpdateUiConfig');
  });

  it('ImplUserApiRepo Test', async () => {
    let api = new ApiHandler(new MockUserApiRepo(), new MockSiteApiRepo());
  });
});
