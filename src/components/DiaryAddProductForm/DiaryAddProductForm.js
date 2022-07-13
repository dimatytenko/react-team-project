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

axios.defaults.baseURL = 'http://localhost:8080/api';

export function DiaryAddProductForm({ theme }) {
  const [product, setProduct] = useState('');
  const [grams, setGrams] = useState('');

  const [titles, setTitles] = useState([]);
  const [isFocus, setIsFocus] = useState(true);

  useEffect(() => {
    if (product === '') {
      setTitles([]);
      return;
    }

    async function fetchProducts(productValue) {
      const { data } = await axios
        .get(`/products?search=${productValue}`)
        .then(res => res.data);
      const titleArray = await data.products.map(
        obj => obj.title.en
      );
      await setTitles(titleArray);
      return titleArray;
    }

    fetchProducts(product);
  }, [product]);

  function handleTitleClick(e) {
    const currentTitle = e.target.outerText;
    setProduct(currentTitle);
    setIsFocus(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isList = titles.some(title => title === product);

    if (!isList) {
      createToast('warning', 'Select an existing product!');
      return;
    }

    console.log(product);
    console.log(grams);

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

        {product !== titles[0] &&
          product.length !== 0 &&
          isFocus && (
            <ProductsList id="productList">
              {titles.length === 0 && product.length !== 0 && (
                <ProductsItem
                  key={nanoid()}
                  onClick={e => handleTitleClick(e)}
                >
                  not Found
                </ProductsItem>
              )}

              {titles.map(title => {
                return (
                  <ProductsItem
                    key={nanoid()}
                    onClick={e => handleTitleClick(e)}
                  >
                    {title}
                  </ProductsItem>
                );
              })}
            </ProductsList>
          )}
      </form>
    </DiaryAddProduct>
  );
}
