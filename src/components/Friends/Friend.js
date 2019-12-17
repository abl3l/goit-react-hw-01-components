import React from 'react';
import T from 'prop-types';
import {
  Friends,
  FriendsItem,
  Avatar,
  Online,
  Offline,
  Name,
} from './Friends.styled';

const FriendList = ({ friends }) => (
  <Friends>
    {friends.map(el => (
      <FriendsItem key={el.id}>
        {el.isOnline ? <Online></Online> : <Offline></Offline>}
        <Avatar src={el.avatar} alt="Avatar"></Avatar>
        <Name>{el.name}</Name>
      </FriendsItem>
    ))}
  </Friends>
);

FriendList.propTypes = {
  friends: T.arrayOf(T.shape().isRequired).isRequired,
};

export default FriendList;
