import PropTypes from 'prop-types';
import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import {formatDateTransactions} from 'utils/dataFormatter';

export const CryptoHistory = ({items}) => {
  return (
    <BaseTable>
  <THead>
    <tr>
      <Th>№</Th>
      <Th>PRICE</Th>
      <Th>AMOUNT</Th>
      <Th>DATE</Th>
    </tr>
  </THead>

  <tbody>
    {items.map((item, i) => (
      <Tr key={item.id}>
      <Td>{i+1}</Td>
      <Td>{item.price}</Td>
      <Td>{item.amount}</Td>
      <Td>{formatDateTransactions(item.date)}
      </Td>
    </Tr>
    ))}
    

  </tbody>
</BaseTable>
  );
};

CryptoHistory.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    amount:PropTypes.number.isRequired,
    date:PropTypes.string.isRequired,

  }).isRequired
}