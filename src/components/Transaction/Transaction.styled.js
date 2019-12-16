import styled from 'styled-components';

export const Transactions = styled.table`
  max-width: 872px;
  margin: 30px auto;
  border-collapse: collapse;
`;

export const Head = styled.tr`
  background-color: #00bcd4;
`;

export const HeadItem = styled.th`
  min-width: 250px;
  padding: 10px;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
  border: 1px solid #e0e6e7;
`;

export const Row = styled.tr`
  text-align: center;
  :nth-child(even) {
    background-color: #ecf2f3;
  }
`;

export const RowItem = styled.td`
  padding: 12px 0;
  font-size: 15px;
  text-transform: capitalize;
  color: #5c6975;
  border: 1px solid #e0e6e7;
`;
