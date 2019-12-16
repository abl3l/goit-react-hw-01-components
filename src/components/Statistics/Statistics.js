import React from 'react';
import PropTypes from 'prop-types';
import {
  Statistics,
  Title,
  Stats,
  StatsList,
  Label,
  Percentage,
} from './Statistics.styled';
import generateColor from './generateColor';

const Statistic = ({ stats }) => (
  <Statistics>
    <Title></Title>
    <Stats>
      {stats.map(stat => (
        <StatsList
          key={stat.id}
          style={{ backgroundColor: `${generateColor()}` }}
        >
          <Label>{stat.label}</Label>
          <Percentage>{stat.percentage}</Percentage>
        </StatsList>
      ))}
    </Stats>
  </Statistics>
);

Statistic.defaultProps = {
  title: 'Upload stats',
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistic;
