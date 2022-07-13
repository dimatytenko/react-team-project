// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { nanoid } from 'nanoid';
import axios from 'axios';
import { css } from '@emotion/css';

import { createToast } from '../../functions/toasts';
import { mediaMaxPhone } from '../../functions/media';

import { AddButton } from '../AddButton';
import { AddButtonModal } from '../AddButtonModal';
import {
  FormBody,
  FormInputGrams,
  ProductsList,
  ProductsItem,
  DiaryAddProduct,
  AddButtonWrapper,
  AddButtonModalWrapper,
} from './DiaryAddProductForm.styled';

import { createProduct } from '../../services/connectionsAPI';
axios.defaults.baseURL = 'http://localhost:8080/api';

export function DiaryAddProductForm({
  theme,
  currentDate,
}) {
  const [product, setProduct] = useState('');
  const [productObj, setProductObj] = useState(null);
  const [grams, setGrams] = useState('');

  const [productsArray, setProductsArray] = useState([]);
  const [isFocus, setIsFocus] = useState(true);

  // console.log(grams);
  // console.log(productObj);

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

  function handleTitleClick(e) {
    const currentTitle = e.target.outerText;

    const currentProduct = productsArray.find(obj => {
      return obj.title.en === currentTitle;
    });

    setProduct(currentTitle);
    setProductObj(currentProduct);
    setIsFocus(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isList = productsArray.some(
      obj => obj.title.en === product
    );

    if (!isList) {
      createToast('warning', 'Select an existing product!');
      return;
    }
    const data = {
      productId: productObj._id,
      weight: grams,
      date: currentDate,
    };

    createProduct(data);

    setProduct('');
    setGrams('');
  }

  return (
    <DiaryAddProduct>
      <form onSubmit={handleSubmit}>
        <FormBody>
          <DebounceInput
            className={css`
              ${mediaMaxPhone(`
              width: 100%;
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
          />

          <FormInputGrams
            name="grams"
            autoComplete="off"
            type="number"
            placeholder="Grams"
            value={grams}
            onChange={e => {
              setGrams(e.target.value);
            }}
          />
          <AddButtonWrapper>
            <AddButton type="submit" />
          </AddButtonWrapper>

          <AddButtonModalWrapper>
            <AddButtonModal type="submit" />
          </AddButtonModalWrapper>
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
