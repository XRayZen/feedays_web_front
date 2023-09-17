import Image from 'next/image';
import Link from 'next/link';
import Counter from './Counter';
import DrawerMenu from './drawerMenu/menu';
import UseCallBackCounter from './useCallBack/page';
import UserList from './user/UserList';

export default function Home() {
  return (
    <div>
      <DrawerMenu />
      {/* <Counter>
        <h2 className='font-bold text-lg mt-4'>ユーザ一覧</h2>
        <UserList />
      </Counter> */}
    </div>
  );
}
