import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/slice';
import { 
  FindContact,
  Input
} from "./styles";


const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <div>
      <FindContact>Find contacts by name</FindContact>
      <Input      
      type="text"
      name="filter"
      onChange={changeFilter}
      />
    </div>    
  );
};

export default Filter;