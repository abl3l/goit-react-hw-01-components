import React from 'react';
import T from 'prop-types';
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
      {stats.map(el => (
        <StatsList
          key={el.id}
          style={{ backgroundColor: `${generateColor()}` }}
        >
          <Label>{el.label}</Label>
          <Percentage>{el.percentage}</Percentage>
        </StatsList>
      ))}
    </Stats>
  </Statistics>
);

Statistic.defaultProps = {
  title: 'Upload stats',
};

Statistic.propTypes = {
  title: T.string,
  stats: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      label: T.string.isRequired,
      percentage: T.number.isRequired,
    }),
  ).isRequired,
};

export default Statistic;
