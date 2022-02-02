import PropTypes from 'prop-types';

const Continent = ({ o }) => (
  <li key={o.code}>
    <p>{o.name}</p>
  </li>
);

Continent.propTypes = {
  o: PropTypes.string.isRequired,
};

export default Continent;
