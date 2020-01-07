import React from 'react';
import T from 'prop-types';
import user from './user.json';
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

const { avatar, name, tag, location } = user;
const { followers, views, likes } = user.stats;

const Profiles = ({ alt }) => (
  <Profile>
    <Description>
      <Avatar src={avatar} alt={alt}></Avatar>
      <Name>{name}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>
    <Stats>
      <List>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </List>
      <List>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </List>
      <List>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
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
