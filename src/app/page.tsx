import Image from 'next/image'
import Link from 'next/link'
import Counter from './Counter'
import UserList from './user/UserList'

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link
            href={{
              pathname: '/user',
              // query: { name: 'user' },
            }}
          >
            user
          </Link>
        </li>
      </ul>
      <h1 className="text-4xl">Home</h1>
      <Counter>
        <h2 className="font-bold text-lg mt-4">ユーザ一覧</h2>
        <UserList />
      </Counter>
    </div>
  )
}
