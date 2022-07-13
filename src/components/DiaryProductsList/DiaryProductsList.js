import { GoX } from 'react-icons/go';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import axios from 'axios';
import {
  TableStyled,
  ButtonCross,
} from './DiaryProductsList.styled';

export const DiaryProductsList = ({
  productsForDay,
  setProductsForDay,
  setSummary,
  isPickedDateToday,
}) => {
  const productList = makeRows();

  function makeRows() {
    const rowsData = productsForDay?.reduce(
      (acc, product) => {
        acc.push({
          title: product.product_id.title.en,
          weight: `${product.weight} g`,
          calories: `${product.calories} kcal`,
          key: product._id,
          diaryId: product._id,
        });
        return acc;
      },
      []
    );

    return rowsData;
  }

  const removeProductFromDB = async product => {
    const { diaryId } = product;
    try {
      const { data } = await axios.delete(
        `/days/${diaryId}`
      );

      return data.data.summary;
    } catch (error) {
      console.log(error);
      //toast something went wrong
    }
  };

  const removeProduct = async index => {
    //відправити на бек видалення
    const returnedSummary = await removeProductFromDB(
      productList[index]
    );
    //видалити зі стейту i обновити саммарі
    if (returnedSummary) {
      const newData = productsForDay.slice();
      newData.splice(index, 1);
      setProductsForDay(newData);
      setSummary(returnedSummary);
    }
  };

  const renderAction = (o, row, index) => {
    return (
      isPickedDateToday && (
        <ButtonCross
          type="button"
          onClick={() => removeProduct(index)}
        >
          <GoX color={'#9B9FAA'} size={14} />
        </ButtonCross>
      )
    );
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'title',
      className: 'column--large',
      ellipsis: {
        showTitle: false,
      },
      render(title) {
        return (
          <Tooltip placement="topLeft" overlay={title}>
            <span>{title}</span>
          </Tooltip>
        );
      },
    },
    {
      title: 'Weight',
      dataIndex: 'weight',
      key: 'weight',
      className: 'column--small',
    },
    {
      title: 'Calories',
      dataIndex: 'calories',
      key: 'calories',
      className: 'column--medium',
    },
    {
      title: 'Operations',
      dataIndex: '',
      key: 'x',
      className: 'column--cross',
      render: renderAction,
    },
  ];

  return (
    <TableStyled
      columns={columns}
      data={productList}
      showHeader={false}
      emptyText={'No products in diary for this day'}
    />
  );
};
