import React from 'react';
import PropTypes from 'prop-types';
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

const Profiles = ({ user }) => (
  <Profile>
    <Description>
      <Avatar src={user.avatar} alt={user.alt}></Avatar>
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
  alt: 'Avatar',
};

Profiles.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
  alt: PropTypes.string,
};

export default Profiles;
