import Goback from './goback.svg';
import AddCard from './addcard.svg';
import Update from './update.svg';
import Delete from './delete.svg';

const Icons = ({
  width = 20,
  height = 20,
  fill = '#fff',
  name,
  stroke = '#fff',
}) => {
  switch (name) {
    case 'Goback':
      return (
        <Goback width={width} height={height} fill={fill} stroke={stroke} />
      );
    case 'AddCard':
      return (
        <AddCard width={width} height={height} fill={fill} stroke={stroke} />
      );
      case 'Update':
      return (
        <Update width={width} height={height} fill={fill} stroke={stroke} />
      );
      case 'Delete':
      return (
        <Delete width={width} height={height} fill={fill} stroke={stroke} />
      );
    default:
      return null;
  }
};

export default Icons;
