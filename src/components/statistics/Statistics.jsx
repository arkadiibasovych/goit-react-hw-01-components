import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const generateItemColor = (min, max) => {
  const itemColor = `rgb(
      ${Math.random() * (max - min) + min},
      ${Math.random() * (max - min) + min},
      ${Math.random() * (max - min) + min}
  )`;

  return itemColor;
};





const Statistics = ({title,stats}) => {
    return<section className={s.statistics}>
  <h2 className={s.title}>{title}</h2>

  <ul className={s.statList}>
        {stats.map(({ label, percentage, id }) => <li className={s.item} key={id}  style={{backgroundColor:generateItemColor(0, 255)}}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>)}
  </ul>
</section>
 };

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }),
  ),
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired
    }),
  ),
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      percentage: PropTypes.number.isRequired
    }),
  ),

};

export default Statistics;
