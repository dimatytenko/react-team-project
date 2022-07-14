// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { nanoid } from 'nanoid';
import axios from 'axios';
import { css } from '@emotion/css';

import { createToast } from '../../functions/toasts';
import { mediaMaxPhone } from '../../functions/media';
import { formatDateForFetch } from '../../functions/formatDateForFetch';
import { AddButton } from '../AddButton';
import { AddButtonModal } from '../AddButtonModal';
import {
  FormBody,
  FormInputGrams,
  ProductsList,
  ProductsItem,
  DiaryAddProduct,
} from './DiaryAddProductForm.styled';
import { useWindowDimensions } from '../../customHooks';

import { createProduct } from '../../services/connectionsAPI';
axios.defaults.baseURL = 'http://localhost:8080/api';

export function DiaryAddProductForm({
  theme,
  date,
  onClose,
  getProduct,
}) {
  const windowDimensions = useWindowDimensions();
  const [product, setProduct] = useState('');
  const [productObj, setProductObj] = useState(null);
  const [grams, setGrams] = useState('');
  const [productsArray, setProductsArray] = useState([]);
  const [isFocus, setIsFocus] = useState(true);

  // ===== fetch products ==== //
  useEffect(() => {
    if (product === '') {
      setProductsArray([]);
      return;
    }

    async function fetchProducts(productValue) {
      const { data } = await axios
        .get(`/products?search=${productValue}`)
        .then(res => res.data);
      const productsArray = data.products.map(obj => obj);
      await setProductsArray(productsArray);
      return productsArray;
    }

    fetchProducts(product);
  }, [product]);
  // =================================== //

  // ===== choose product ==== //
  function handleTitleClick(e) {
    const currentTitle = e.target.outerText;

    if (currentTitle === 'not Found') {
      return setProduct('');
    }

    const currentProduct = productsArray.find(obj => {
      return obj.title.en === currentTitle;
    });

    setProduct(currentTitle);
    setProductObj(currentProduct);
    setIsFocus(false);
  }
  // =================================== //

  // ===== add new product ==== //
  async function handleSubmit(e) {
    e.preventDefault();

    const isList = productsArray.some(
      obj => obj.title.en === product
    );

    if (date !== formatDateForFetch(new Date())) {
      createToast(
        'warning',
        'You can not add product in past days!'
      );
      return;
    }

    if (!isList) {
      createToast('warning', 'Select an existing product!');
      return;
    }

    if (grams.length === 0) {
      createToast('warning', 'Fill in the gram field!');
    }

    const requestObj = {
      productId: productObj._id,
      weight: grams,
      date: date,
    };

    try {
      const { data } = await createProduct(requestObj);
      console.log(data);
      getProduct(data);
    } catch (error) {
      console.log(error);
    }

    setProduct('');
    setGrams('');

    if (windowDimensions.width < 768) {
      onClose();
    }
  }
  // =================================== //

  return (
    <DiaryAddProduct>
      <form onSubmit={handleSubmit}>
        <FormBody>
          <DebounceInput
            className={css`
              ${mediaMaxPhone(`
              width: 280px;
              margin-bottom: 32px;
                `)}

              width: 240px;
              border: none;
              border-bottom: 1px solid #e0e0e0;
              outline: none;
              background-color: transparent;
              color: ${theme.fontColors.primary};

              ::placeholder {
                font-family: 'VerdanaBold';
                letter-spacing: 0.04em;
              }
            `}
            autoComplete="off"
            id="debounceInput"
            debounceTimeout={500}
            onChange={e => {
              setProduct(e.target.value);
            }}
            onFocus={() => setIsFocus(true)}
            value={product}
            name="product"
            placeholder="Enter product name"
            disabled={
              date !== formatDateForFetch(new Date())
            }
          />

          <FormInputGrams
            name="grams"
            autoComplete="off"
            type="number"
            min="0"
            id="pyat"
            className={css`
              -moz-appearance: textfield;
              ::-webkit-inner-spin-button {
                display: none;
              }
            `}
            placeholder="Grams"
            value={grams}
            onChange={e => {
              setGrams(e.target.value);
            }}
            disabled={
              date !== formatDateForFetch(new Date())
            }
          />

          {windowDimensions.width >= 768 && (
            <AddButton type="submit" />
          )}

          {windowDimensions.width < 768 && (
            <AddButtonModal type="submit" />
          )}
        </FormBody>

        {product !== productsArray[0] &&
          product.length !== 0 &&
          isFocus && (
            <ProductsList id="productList">
              {productsArray.length === 0 &&
                product.length !== 0 && (
                  <ProductsItem
                    key={nanoid()}
                    onClick={e => handleTitleClick(e)}
                  >
                    not Found
                  </ProductsItem>
                )}

              {productsArray.map(obj => {
                return (
                  <ProductsItem
                    key={obj._id}
                    onClick={e => handleTitleClick(e)}
                  >
                    {obj.title.en}
                  </ProductsItem>
                );
              })}
            </ProductsList>
          )}
      </form>
    </DiaryAddProduct>
  );
}
