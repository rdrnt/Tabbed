import PropTypes from 'prop-types';

const PrivateView = ({ children, isUnlocked }) =>
  isUnlocked ? children : null;

PrivateView.propTypes = {
  isUnlocked: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default PrivateView;
