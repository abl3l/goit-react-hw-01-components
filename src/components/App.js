import React from 'react';
import Profiles from './Profile/Profile';
import user from './Profile/user.json';
import Statistic from './Statistics/Statistics';
import stats from './Statistics/statistical-data.json';
import FriendList from './Friends/Friend';
import friends from './Friends/friends.json';
import TransactionHistory from './Transaction/Transaction';
import transactions from './Transaction/transactions.json';

const App = () => (
  <div>
    <Profiles user={user} />
    <FriendList friends={friends} />
    <Statistic stats={stats} />
    <TransactionHistory transactions={transactions} />
  </div>
);

export default App;
