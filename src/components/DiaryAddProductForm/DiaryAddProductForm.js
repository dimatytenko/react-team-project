// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import axios from 'axios';
import { css } from '@emotion/css';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { AddButton } from '../AddButton';
import {
  FormBody,
  FormInputGrams,
  // FormInputProduct,
  ProductsList,
  ProductsItem,
  DiaryAddProduct,
} from './DiaryAddProductForm.styled';

axios.defaults.baseURL = 'http://localhost:8080/api';

export function DiaryAddProductForm({ theme }) {
  const [product, setProduct] = useState('');
  const [grams, setGrams] = useState('');

  const [titles, setTitles] = useState([]);
  const [isFocus, setIsFocus] = useState(true);

  console.log(product);
  console.log(grams);

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
    console.log(e);
  }

  return (
    <DiaryAddProduct>
      <form>
        <FormBody>
          <DebounceInput
            className={css`
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
            placeholder="Grams"
            value={grams}
            onChange={e => {
              setGrams(e.target.value);
            }}
          />

          <AddButton
            type="submit"
            onSubmit={e => handleSubmit(e)}
          />
        </FormBody>

        {product !== titles[0] && isFocus && (
          <ProductsList>
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
