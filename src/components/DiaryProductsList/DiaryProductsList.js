import { GoX } from 'react-icons/go';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  TableStyled,
  ButtonCross,
} from './DiaryProductsList.styled';
import { AlertModal } from '../AlertModal';
import { languageSelectors } from '../../redux/language';

export const DiaryProductsList = ({
  productsForDay,
  setProductsForDay,
  setSummary,
  isPickedDateToday,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [productIndex, setProductIndex] = useState('');
  const lang = useSelector(languageSelectors.getLanguage);
  const productList = makeRows(lang);

  function makeRows(lang) {
    const rowsData = productsForDay?.reduce(
      (acc, product) => {
        acc.push({
          title: product.product_id.title[lang],
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
    }
  };

  const removeProduct = async index => {
    const returnedSummary = await removeProductFromDB(
      productList[index]
    );
    if (returnedSummary) {
      const newData = productsForDay.slice();
      newData.splice(index, 1);
      setProductsForDay(newData);
      setSummary(returnedSummary);
    }
  };

  const openAlertModal = idx => {
    setProductIndex(idx);
    handleOpen();
  };

  const confirmDeleting = idx => {
    removeProduct(idx);
    handleClose();
  };

  const renderAction = (o, row, index) => {
    return (
      isPickedDateToday && (
        <ButtonCross
          type="button"
          onClick={() => openAlertModal(index)}
        >
          <GoX color={'#9B9FAA'} size={16} />
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
    <>
      <TableStyled
        columns={columns}
        data={productList}
        showHeader={false}
        emptyText={'No products in diary for this day'}
      />
      <AlertModal
        open={open}
        handleClose={handleClose}
        handleConfirm={() => confirmDeleting(productIndex)}
        text={'Are you sure you want to delete?'}
      ></AlertModal>
    </>
  );
};
