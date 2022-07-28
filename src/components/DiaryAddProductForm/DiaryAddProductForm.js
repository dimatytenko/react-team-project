import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { nanoid } from 'nanoid';
import axios from 'axios';
import { css } from '@emotion/css';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

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
import { addProduct } from '../../services/productsAPI';
import { breakPoints } from '../../libs/constants';
import { languageSelectors } from '../../redux/language';
import '../../utils/i18next';

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
  const lang = useSelector(languageSelectors.getLanguage);
  const { t } = useTranslation();

  // ===== fetch products ==== //
  useEffect(() => {
    if (product === '') {
      setProductsArray([]);
      return;
    }

    async function fetchProducts(productValue) {
      const { data } = await axios
        .get(
          `/products?search=${productValue}&lang=${lang}`
        )
        .then(res => res.data);
      const productsArray = data.products.map(obj => obj);
      await setProductsArray(productsArray);
      return productsArray;
    }

    fetchProducts(product);
  }, [product, lang]);
  // =================================== //

  // ===== choose product ==== //
  function handleTitleClick(e) {
    const currentTitle = e.target.outerText;

    if (currentTitle === 'not Found') {
      return setProduct('');
    }

    const currentProduct = productsArray.find(obj => {
      return obj.title[lang] === currentTitle;
    });

    setProduct(currentTitle);
    setProductObj(currentProduct);
    setIsFocus(false);
  }
  // =================================== //
  function rounded(number) {
    return Math.round(parseFloat(number) * 100) / 100;
  }
  // ===== add new product ==== //
  async function handleSubmit(e) {
    e.preventDefault();

    const isList = productsArray.some(
      obj => obj.title[lang] === product
    );
    if (date !== formatDateForFetch(new Date())) {
      createToast('warning', `${t('diary.pastDay')}`);
      return;
    }
    if (!isList) {
      createToast('warning', `${t('diary.selectProduct')}`);
      return;
    }
    if (grams.length === 0) {
      createToast('warning', `${t('diary.fillGrams')}`);
      return;
    }
    if (grams <= 0 || grams > 99999) {
      createToast('warning', `${t('diary.enterGrams')}`);
      return;
    }

    const requestObj = {
      productId: productObj._id,
      weight: rounded(grams),
      date: date,
    };

    try {
      const { data } = await addProduct(requestObj);
      getProduct(data);
    } catch (error) {}

    setProduct('');
    setGrams('');

    if (windowDimensions.width < breakPoints.TABLET) {
      onClose();
    }
  }
  // =================================== //

  return (
    <DiaryAddProduct>
      <form onSubmit={handleSubmit} noValidate>
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
              overflow: hidden;
              text-overflow: ellipsis;

              ::placeholder {
                color: ${theme.fontColors.primary};

                font-family: 'VerdanaBold';
                letter-spacing: 0.04em;
              }
            `}
            autoComplete="off"
            id="debounceInput"
            debounceTimeout={0}
            onChange={e => {
              setProduct(e.target.value);
            }}
            onFocus={() => setIsFocus(true)}
            value={product}
            name="product"
            placeholder={t('diary.productInput')}
            disabled={
              date !== formatDateForFetch(new Date())
            }
          />

          <FormInputGrams
            name="grams"
            autoComplete="off"
            type="number"
            min="0"
            max="99999"
            id="pyat"
            className={css`
              -moz-appearance: textfield;
              ::-webkit-inner-spin-button {
                display: none;
              }
            `}
            placeholder={t('diary.gramInput')}
            value={grams}
            onChange={e => {
              setGrams(e.target.value);
            }}
            disabled={
              date !== formatDateForFetch(new Date())
            }
          />

          {windowDimensions.width >= breakPoints.TABLET && (
            <AddButton type="submit" theme={theme} />
          )}

          {windowDimensions.width < breakPoints.TABLET && (
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
                    {t('diary.notFound')}
                  </ProductsItem>
                )}

              {productsArray.map(obj => {
                return (
                  <ProductsItem
                    key={obj._id}
                    onClick={e => handleTitleClick(e)}
                  >
                    {obj.title[lang]}
                  </ProductsItem>
                );
              })}
            </ProductsList>
          )}
      </form>
    </DiaryAddProduct>
  );
}

DiaryAddProductForm.propTypes = {
  date: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  getProduct: PropTypes.func.isRequired,
};
