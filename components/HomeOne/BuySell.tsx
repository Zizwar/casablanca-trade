import React from 'react';

const BuySell = ({pt70}:{pt70?:string}) => {
  return (
    <>
      <div className={`buy-sell-cryptocurrency-area bg-image ${pt70}`}>
        <div className='container'>
          <div className='section-title'>
            <h2>How to Buy and Sell Cryptocurrency</h2>
            <p>
              
            </p>
          </div>
          <div className='row justify-content-center'>
            <div className='col-xl-6 col-lg-12 col-md-12'>
              <div className='buy-sell-cryptocurrency-image'>
                <img src='/images/women-with-tab.png' alt='image' />
              </div>
            </div>
            <div className='col-xl-6 col-lg-12 col-md-12'>
              <div className='buy-sell-cryptocurrency-content'>
                <div className='row justify-content-center'>
                  <div className='col-lg-6 col-sm-6 col-md-6'>
                    <div className='single-buy-sell-box'>
                      <div className='icon'>
                        <img src='/images/icon/icon12.png' alt='image' />
                      </div>
                      <h3>Bank Transfers</h3>
                      <p>
                        Fast and Secure SEPA Bank transfer 
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-6 col-sm-6 col-md-6'>
                    <div className='single-buy-sell-box'>
                      <div className='icon'>
                        <img src='/images/icon/icon13.png' alt='image' />
                      </div>
                      <h3>On/Off line Wallets</h3>
                      <p>
                        Compatible with both yes you can plug your offline cold wallet 
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-6 col-sm-6 col-md-6'>
                    <div className='single-buy-sell-box'>
                      <div className='icon'>
                        <img src='/images/icon/icon14.png' alt='image' />
                      </div>
                      <h3>Cash Payment</h3>
                      <p>
                        
					
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-6 col-sm-6 col-md-6'>
                    <div className='single-buy-sell-box'>
                      <div className='icon'>
                        <img src='/images/icon/icon15.png' alt='image' />
                      </div>
                      <h3>Debit/Credit Cards</h3>
                      <p>
                    
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-6 col-sm-6 col-md-6'>
                    <div className='single-buy-sell-box'>
                      <div className='icon'>
                        <img src='/images/icon/icon16.png' alt='image' />
                      </div>
                      <h3>Discounted Gift Cards</h3>
                      <p>
                        
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-6 col-sm-6 col-md-6'>
                    <div className='single-buy-sell-box'>
                      <div className='icon'>
                        <img src='/images/icon/icon17.png' alt='image' />
                      </div>
                      <h3>Goods & Services</h3>
                      <p>
                        
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuySell;
