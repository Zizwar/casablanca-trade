import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface ApiData {
  image: string;
  name: string;
}

const Banner = () => {
  const [name, setName] = useState('Bitcoin');
  const [nameTwo, setNameTwo] = useState('USD');

  //api data
  const [newData, setnewData] = useState<ApiData[]>([]);

  //converter hook
  const [conversionValue, setConversionValue] = useState<string | number>('');
  const [cryptoQuantity, setcryptoQuantity] = useState<string | number>(1);
  const [coinSymbol, setcoinSymbol] = useState('BTC');

  const [image, setImage] = useState(
    '/images/cryptocurrency/cryptocurrency2.png'
  );
  const [imageTwo, setImageTwo] = useState(
    '/images/cryptocurrency/cryptocurrency1.png'
  );

  const [clicked, setClicked] = useState<boolean | null | number>(false);
  const [toggleState, setToggleState] = useState(false);

  const toggleTabOne = () => {
    setToggleState(!toggleState);
  };

  const toggleSelected = (cat, index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
    setName(cat.name);
    setImage(cat.image);
    setcoinSymbol(cat.symbol.toUpperCase());
  };

  useEffect(() => {
    const getCoins = async () => {
      const { data } = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      );
      setnewData(data);
    };
    getCoins();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://min-api.cryptocompare.com/data/price?fsym=${coinSymbol}&tsyms=USD`
      );

      setConversionValue(data.USD);
    };
    getData();
  }, [coinSymbol]);
  return (
    <>
      <div className='main-banner-area'>
        <div className='container'>
          <div className='main-banner-box'>
            <div className='currency-selection'>
              <label>YOU PAY</label>
              <input
                type='text'
                value={cryptoQuantity}
                onChange={(e) => setcryptoQuantity(e.target.value)}
              />
              <div
                className={toggleState ? 'dropdown show' : 'dropdown'}
                onClick={() => toggleTabOne()}
              >
                <button
                  className='dropdown-toggle'
                  type='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <img src={image} alt='image' />
                  {name}

                  <span>
                    {toggleState ? (
                      <i className='bx bx-chevron-up'></i>
                    ) : (
                      <i className='bx bx-chevron-down'></i>
                    )}
                  </span>
                </button>
                <ul
                  className={
                    toggleState ? 'dropdown-menu show' : 'dropdown-menu'
                  }
                >
                  {newData.length > 0 &&
                    newData.map((data, index) => (
                      <li
                        key={index}
                        onClick={(e) => toggleSelected(data, index)}
                        value='watch'
                        className={
                          clicked === index ? 'option selected focus' : 'option'
                        }
                      >
                        <div className='coin-wrapper'>
                          <img src={data.image} alt='image' />
                          <span className='coin-name'> {data.name} </span>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <ul className='features-list'>
              <li>
                <div className='d-flex align-items-center'>
                  <span className='first-span'>
                    <i className='fas fa-minus'></i>
                    2.00 USD
                  </span>
                  <span className='second-span'>TOTAL CARD FEES</span>
                </div>
              </li>
              <li>
                <div className='d-flex align-items-center'>
                  <span className='first-span'>
                    <i className='fas fa-divide'></i>
                    47202
                  </span>
                  <span className='second-span'>CONVERSION RATE</span>
                </div>
              </li>
            </ul>
            <div className='currency-selection'>
              <label>YOU RECEIVE</label>
              <input
                type='text'
                value={Number(conversionValue) * Number(cryptoQuantity)}
                onChange={(e) => e}
              />
              <div className='dropdown'>
                <button
                  className='dropdown-toggle'
                  type='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <img src={imageTwo} alt='image' /> {nameTwo}
                </button>
              </div>
            </div>
            <Link href='https://accounts.binance.com/en/register?ref=IR8OXGEF'>
              <button type='submit'>
                <i className='bx bxs-hand-right'></i> Buy With Visa
              </button>
            </Link>
          </div>
          <div className='row align-items-center m-0'>
            <div className='col-xl-6 col-lg-6 col-md-12 p-0'>
              <div className='main-banner-content'>
                <h1>Buy & Sell Cryptocurrency Easy, Fast and Secure!</h1>
                <p>
                  Easy, fast and secure!
                </p>
                <Link href='https://accounts.binance.com/en/register?ref=IR8OXGEF'>
                  <a className='default-btn'>
                    <i className='bx bxs-user'></i> Register Now
                  </a>
                </Link>
              </div>
            </div>
            <div className='col-xl-4 col-lg-12 col-md-12 p-0'>
              <div className='main-banner-image'>
                <img src='/images/banner/banner-img1.png' alt='image' />
              </div>
            </div>
          </div>
        </div>
        <div className='shape1'>
          <img src='/images/shape/shape1.png' alt='image' />
        </div>
        <div className='shape2'>
          <img src='/images/shape/shape2.png' alt='image' />
        </div>
        <div className='shape3'>
          <img src='/images/shape/shape3.png' alt='image' />
        </div>
        <div className='shape5'>
          <img src='/images/shape/shape5.png' alt='image' />
        </div>
        <div className='shape9'>
          <img src='/images/shape/shape9.png' alt='image' />
        </div>
      </div>
    </>
  );
};

export default Banner;
