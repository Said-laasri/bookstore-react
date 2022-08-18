import { useSelector, useDispatch } from 'react-redux';
import { checkStatusBook } from '../redux/categories/categories';
import './Categories.scss';

function Categories() {
  const alert = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const statusChecker = () => {
    dispatch(checkStatusBook());
  };
  return (
    <div className="check d-flex">
      <button className="button font-Roboto" onClick={statusChecker} type="button">
        Check status
      </button>
      <h6 className="alet font-Roboto">{alert}</h6>
    </div>
  );
}

export default Categories;
