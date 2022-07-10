// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

export function DiaryAddProductForm(props) {
  const [product, setProduct] = useState('');
  const [titles, setTitles] = useState([]);

  console.log(product);
  console.log(titles);

  useEffect(() => {
    if (product === '') {
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
  }

  return (
    <div>
      <DebounceInput
        minLength={2}
        debounceTimeout={300}
        onChange={e => setProduct(e.target.value)}
        value={product}
      />

      {product !== titles[0] && (
        <ul>
          {titles.map(title => {
            return (
              <li
                key={nanoid()}
                onClick={e => handleTitleClick(e)}
              >
                {title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

// DiaryAddProductForm.propTypes = {};
