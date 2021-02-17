import PropTypes from 'prop-types';


const Statistics = ({title,stats}) => {
    return<section className="statistics">
  <h2 className="title">{title}</h2>

  <ul className="stat-list">
    {stats.map(({label,percentage, id}) =><li className="item" key ={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>)}
  </ul>
</section>
 };

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
};

export default Statistics;

