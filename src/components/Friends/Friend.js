import React from 'react';
import PropTypes from 'prop-types';
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
    {friends.map(friend => (
      <FriendsItem key={friend.id}>
        {friend.isOnline ? <Online></Online> : <Offline></Offline>}
        <Avatar src={friend.avatar} alt="Avatar"></Avatar>
        <Name>{friend.name}</Name>
      </FriendsItem>
    ))}
  </Friends>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};

export default FriendList;
