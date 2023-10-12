/* eslint-disable no-unused-vars */
import '../../../Styles/Home.css';
import axios from 'axios';
import { useReducer, useEffect, useState} from 'react';
import '../../../Styles/Home.css';
import { FaShoppingBag, FaHeart, FaStar, FaRegStar } from 'react-icons/fa';
import reducer from '../../../Reducers/DataFetchReducer';



const ApplePhone = () => {
  // Product Fetching
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/products/applephone');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);

 
  return (
    <>
      <div className="product-container">
        {products.map((product) => {
          return (
            <>
              <div className="single-product">
                <img src={product.image} alt="" />
                <div className="details">
                  <div className="details-all">
                    <p>{product.name}</p>
                    <div className="rating">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                    </div>
                    <h3>FCFA {product.price}</h3>
                  </div>
                  <div className="details-icons">
                    <FaShoppingBag
                      className="bag"
                      
                    />
                    <FaHeart className="heart" />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ApplePhone;
