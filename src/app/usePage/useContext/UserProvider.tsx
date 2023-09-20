'use client';
import { UserContext, UserInfo } from './context';

type Props = {
  userInfo: UserInfo;
  children: React.ReactNode;
};

const UserProvider = ({ userInfo, children }: Props) => {
  return <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>;
};

export default UserProvider;
