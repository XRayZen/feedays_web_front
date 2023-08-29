import UserList from './UserList';

import React, { Suspense } from 'react'

export default function page() {
  return (
    <div className="m-4">
    <h1 className="text-lg font-bold">ユーザ一覧</h1>
    <Suspense fallback={<p>Loading...</p>}>
      <UserList />
    </Suspense>
  </div>
  )
}
