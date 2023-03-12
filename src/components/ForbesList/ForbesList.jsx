import PropTypes from 'prop-types';
import { ForbesListItem } from 'components';
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({ data }) => {
  return (
    <LeaderBoard>
      <BoardHeader>
        <BoardTitle>
          <TitleTop>Forbes</TitleTop>
          <TitleBottom>Leader board</TitleBottom>
        </BoardTitle>
      </BoardHeader>

      <LeaderBoardProfiles>
        {data.map(item => (
          <ForbesListItem data={item} key={item.id} />
        ))}
      </LeaderBoardProfiles>
    </LeaderBoard>
  )
};

ForbesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    capital: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    isIncrease: PropTypes.bool.isRequired
  })).isRequired,
}