import PropTypes from 'prop-types';
import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';
import { ForbesItem, Avatar, Name, Capital } from './ForbesListItem.styled';

import { theme } from 'styles/theme';

export const ForbesListItem = ({ data: { name, capital, avatar, isIncrease } }) => {
  return (
    <ForbesItem>
      <Avatar
        src={avatar}
        alt={name}
      />
      <Name>{name}</Name>
      <Capital>
        {capital} <BiDollarCircle color={theme.colors.accent} size={22} />
        {!isIncrease ? <FcBearish /> : <FcBullish />}
      </Capital>
    </ForbesItem>
  )
};

ForbesListItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    capital: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    isIncrease: PropTypes.bool.isRequired
  }).isRequired,
}