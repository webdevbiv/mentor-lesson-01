import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import PropTypes from 'prop-types';


const icons = [<FaRegThumbsUp />, <MdPeople />,
<MdOutlineProductionQuantityLimits />, <GiTreeDoor />]

export const Statistics = ({ data, title }) => {
  return (
    <>
      {title && <StatisticTitle >{title}</StatisticTitle>}
      <StatisticsList>
        {data.map((item, i) => {
          return (<StatisticItem key={item.id}
            title={item.title}
            total={item.total}
            icon={icons[i]} />)
        })}
      </StatisticsList>
    </>
  );

};
Statistics.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
  })).isRequired,
  title: PropTypes.string
}