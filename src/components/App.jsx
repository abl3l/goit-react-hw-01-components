import React from 'react';
import Profiles from './Profile/Profile.jsx';
import Statistic from './Statistics/Statistics.jsx';
import stats from './Statistics/statistical-data.json';
import FriendList from './Friends/Friend.jsx';
import friends from './Friends/friends.json';
import TransactionHistory from './Transaction/Transaction.jsx';
import transactions from './Transaction/transactions.json';

const App = () => (
  <div>
    <Profiles />
    <FriendList friends={friends} />
    <Statistic stats={stats} />
    <TransactionHistory transactions={transactions} />
  </div>
);

export default App;
