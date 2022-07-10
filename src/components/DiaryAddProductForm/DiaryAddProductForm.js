// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

export function DiaryAddProductForm(props) {
  const [productValue, setProductValue] = useState('');
  console.log(productValue);

  // async function fetchProducts(product) {
  //   const data = await axios
  //     .get('/products', product)
  //     .then(res => res.data);
  //   return data;
  // }
  useEffect(() => {
    if (productValue === '') {
      return;
    }
    async function fetchProducts() {
      const data = await axios
        .get('/products')
        .then(res => res.data);
      return data;
    }

    fetchProducts();
  }, [productValue]);

  return (
    <div>
      <TextField
        onChange={e => setProductValue(e.target.value)}
        id="standard-search"
        label="Search field"
        type="search"
        variant="standard"
      />
    </div>
  );
}

// DiaryAddProductForm.propTypes = {};
