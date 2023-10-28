import { IRssApiRepo, IUserApiRepo } from '../repository/interfaceApiRepo';

// DIの実装方法は色々あるが、ここではコンストラクタインジェクションを採用する
export class ApiHandler {
  // IUserApiRepoを継承したクラスを受け取る
  public userApiRepo: IUserApiRepo;
  // IRssApiRepoを継承したクラスを受け取る
  public rssApiRepo: IRssApiRepo;

  constructor(userApiRepo: IUserApiRepo, rssApiRepo: IRssApiRepo) {
    this.userApiRepo = userApiRepo;
    this.rssApiRepo = rssApiRepo;
  }
}
