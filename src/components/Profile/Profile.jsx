import React from 'react';
import T from 'prop-types';
import {
  Profile,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  List,
  Label,
  Quantity,
} from './Profile.styled';

const Profiles = ({ user, alt }) => (
  <Profile>
    <Description>
      <Avatar src={user.avatar} alt={alt}></Avatar>
      <Name>{user.name}</Name>
      <Tag>@{user.tag}</Tag>
      <Location>{user.location}</Location>
    </Description>
    <Stats>
      <List>
        <Label>Followers</Label>
        <Quantity>{user.stats.followers}</Quantity>
      </List>
      <List>
        <Label>Views</Label>
        <Quantity>{user.stats.views}</Quantity>
      </List>
      <List>
        <Label>Likes</Label>
        <Quantity>{user.stats.likes}</Quantity>
      </List>
    </Stats>
  </Profile>
);

Profiles.defaultProps = {
  alt: 'User Avatar',
};

Profiles.propTypes = {
  user: T.shape({
    name: T.string.isRequired,
    tag: T.string.isRequired,
    location: T.string.isRequired,
    avatar: T.string.isRequired,
    stats: T.shape({
      followers: T.number.isRequired,
      views: T.number.isRequired,
      likes: T.number.isRequired,
    }),
  }).isRequired,
  alt: T.string,
};

export default Profiles;
