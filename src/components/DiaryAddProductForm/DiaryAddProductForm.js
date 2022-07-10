// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { TextField, Input } from '@mui/material';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

export function DiaryAddProductForm(props) {
  const [productValue, setProductValue] = useState('');
  const [titles, setTitles] = useState([]);

  console.log(titles);

  useEffect(() => {
    if (productValue === '') {
      return;
    }
    async function fetchProducts(productValue) {
      const { data } = await axios
        .get(`/products?search=${productValue}`)
        .then(res => res.data);
      console.log(data);
      const titleArray = await data.products.map(
        obj => obj.title.en
      );
      await setTitles(titleArray);
      return titleArray;
    }

    fetchProducts(productValue);
  }, [productValue]);

  function handleTitleClick(e) {
    const currentTitle = e.target.outerText;
    setProductValue(currentTitle);
  }

  return (
    <div>
      <Input
        onChange={e => setProductValue(e.target.value)}
        placeholder="Enter product name"
        inputProps={productValue}
        label="Search field"
        type="search"
      />

      {
        <ul>
          {titles.map(title => {
            return (
              <li
                // key={}
                onClick={e => handleTitleClick(e)}
              >
                {title}
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
}

// DiaryAddProductForm.propTypes = {};
