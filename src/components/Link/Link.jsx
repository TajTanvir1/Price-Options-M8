import PropTypes from 'prop-types';

const Link = ({route}) => {
   return (
      <li className="m-6">
         <a href={route.path}>{route.name}</a>
      </li>
   );
};

Link.propTypes = {
   route: PropTypes.object
}

export default Link;