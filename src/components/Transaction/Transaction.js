import React from 'react';
import PropTypes from 'prop-types';
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
      {transactions.map(transaction => (
        <Row key={transaction.id}>
          <RowItem>{transaction.type}</RowItem>
          <RowItem>{transaction.amount}</RowItem>
          <RowItem>{transaction.currency}</RowItem>
        </Row>
      ))}
    </tbody>
  </Transactions>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
