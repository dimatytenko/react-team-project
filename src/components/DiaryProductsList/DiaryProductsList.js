import Table from 'rc-table';
import { useState } from 'react';
// import axios from 'axios';

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
        weight: product.weight,
        calories: product.calories,
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
        <button
          type="button"
          onClick={() => removeProduct(index)}
        >
          X
        </button>
      )
    );
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Weight',
      dataIndex: 'weight',
      key: 'weight',
    },
    {
      title: 'Calories',
      dataIndex: 'calories',
      key: 'calories',
    },
    {
      title: 'Operations',
      dataIndex: '',
      key: 'x',
      render: renderAction,
    },
  ];

  return (
    <Table
      columns={columns}
      data={productList}
      showHeader={false}
    />
  );
};
