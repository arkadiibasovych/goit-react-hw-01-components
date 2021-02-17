import PropTypes from 'prop-types';


const Statistics = ({title,stats}) => {
    return<section className="statistics">
  <h2 className="title">{title}</h2>

  <ul className="stat-list">
    {stats.map(({label,percentage}) =><li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>)}
  </ul>
</section>
 };

Statistics.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;

