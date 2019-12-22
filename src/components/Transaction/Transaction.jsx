import React from 'react';
import T from 'prop-types';
import {
  Transactions,
  Head,
  HeadItem,
  Row,
  RowItem,
} from './Transaction.styled';

const TransactionHistory = ({ transactions }) => (
  <Transactions>
    <thead>
      <Head>
        <HeadItem>Type</HeadItem>
        <HeadItem>Amount</HeadItem>
        <HeadItem>Currency</HeadItem>
      </Head>
    </thead>
    <tbody>
      {transactions.map(el => (
        <Row key={el.id}>
          <RowItem>{el.type}</RowItem>
          <RowItem>{el.amount}</RowItem>
          <RowItem>{el.currency}</RowItem>
        </Row>
      ))}
    </tbody>
  </Transactions>
);

TransactionHistory.propTypes = {
  transactions: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      type: T.string.isRequired,
      amount: T.string.isRequired,
      currency: T.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
