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
            
    {items.map(({id,type, amount, currency}) =><tr key ={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>)}
    
        </tbody>
        
</table>
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired
    })),
  
  items: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string.isRequired
  })),
  
  items: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.string.isRequired
    }),
  ),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      currency: PropTypes.string.isRequired
    }),
  ),
  
};

export default TransactionHistory;