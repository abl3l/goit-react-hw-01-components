import styled from 'styled-components';

export const Statistics = styled.section`
  background-color: #fff;
  text-align: center;
  padding-top: 20px;
`;
export const Title = styled.h2`
  padding-bottom: 10px;
  text-transform: uppercase;
  font-weight: 500;
`;
export const Stats = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  list-style-type: none;
  align-items: stretch;
`;
export const StatsList = styled.li`
  width: 100%;
  padding-bottom: 25px;
  padding-top: 25px;
`;

export const Label = styled.span`
  margin-bottom: 8px;
  font-size: 16px;
  display: block;
  color: #000;
  font-weight: bold;
`;

export const Percentage = styled.span`
  font-size: 18px;
  display: block;
  color: #000;
  font-weight: bold;
`;
