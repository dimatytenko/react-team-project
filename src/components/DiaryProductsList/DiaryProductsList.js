import { useState } from 'react';
import { GoX } from 'react-icons/go';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
// import axios from 'axios';
import {
  TableStyled,
  ButtonCross,
} from './DiaryProductsList.styled';

export const DiaryProductsList = ({
  data,
  isPickedDateToday,
  pickedDate,
}) => {
  const [productList, setProductList] = useState(
    makeRows()
  );

  function makeRows() {
    const rowsData = data?.reduce((acc, product) => {
      acc.push({
        title: product.title.en,
        weight: `${product.weight} g`,
        calories: `${product.calories} kcal`,
        key: product._id,
        _id: product._id,
      });
      return acc;
    }, []);

    return rowsData;
  }

  const removeProductFromDB = async product => {
    const reqBody = {
      _id: product._id,
      date: pickedDate,
    };
    console.log(reqBody);
    // await axios.post('/days', reqBody);
  };

  const removeProduct = index => {
    //відправити на бек видалення
    removeProductFromDB(productList[index]);
    //видалити зі стейту
    const newData = productList.slice();
    newData.splice(index, 1);
    setProductList(newData);
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
    />
  );
};
