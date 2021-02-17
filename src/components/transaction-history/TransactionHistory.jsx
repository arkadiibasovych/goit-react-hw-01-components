import PropTypes from 'prop-types';

const TransactionHistory = ({items}) => {
    return <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

        <tbody>     
            
    {items.map(({type, amount, currency}) =><tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>)}
    
        </tbody>
        
</table>
};

TransactionHistory.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
};

export default TransactionHistory;