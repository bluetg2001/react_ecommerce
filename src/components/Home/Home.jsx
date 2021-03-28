import React from 'react';
import Sale from './components/Sale/Sale';
import { useSelector } from 'react-redux';
import './css/index.css';
import Items from './components/Items/Items';
import Gauge from './components/Gauge/gauge';

function Home() {
  const final_offerSet = useSelector((state) => state.layouts.final_offer);
  const phonesSet = useSelector((state) => state.layouts.phones);
  const salesSet = useSelector((state) => state.layouts.sales);
  const arrivalsSet = useSelector((state) => state.layouts.new_arrivals);
  const best_sellers = useSelector((state) => state.layouts.best_sellers);
  const offers = useSelector((state) => state.layouts.offers);

  return (
    <div className="home">
      <div className="banner">
        <div className="wrapper">
          <Gauge />
          <Sale sales={final_offerSet} />
        </div>
      </div>

      <div className="refer">
        <div className="wrapper">
          <div className="block">
            <div className="icon">
              <img src="/assets/Home/warranty-icon.svg" alt="2" />
            </div>
            <div className="context">Two years warranty</div>
          </div>
          <div className="block">
            <div className="icon">
              <img src="/assets/Home/shipping-icon.svg" alt="배송비 무료" />
            </div>
            <div className="context">Free shipping</div>
          </div>
          <div className="block">
            <div className="icon">
              <img src="/assets/Home/return-icon.svg" alt="30일 반품" />
            </div>
            <div className="context">Return policy in 30 days</div>
          </div>
        </div>
      </div>

      <div className="sales">
        <div className="wrapper">
          <div className="left">
            <Sale sales={phonesSet} />
          </div>
          <div className="right">
            {salesSet.map((salesSet, idx) => {
              return <Sale sales={salesSet} key={idx} />;
            })}
          </div>
        </div>
      </div>

      <Items item={arrivalsSet} />
      <Items item={best_sellers} />

      <div className="to-phone">
        <div className="title txt-bold">Phone of the Year</div>
        <div className="context">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry orem Ipsum..
        </div>
        <div className="btn txt-bold">Shop Now</div>
      </div>

      <Items item={offers} />

      <div className="brands">
        <div className="wrapper">
          <div className="title txt-bold">Brands We Love</div>
          <div className="context">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore tempor sed do magna
            aliqua.
          </div>
          <ul className="contents">
            <li className="content">
              <div></div>
            </li>
            <li className="content">
              <div></div>
            </li>
            <li className="content">
              <div></div>
            </li>
            <li className="content">
              <div></div>
            </li>
          </ul>
        </div>
      </div>

      <div className="journal">
        <div className="wrapper">
          <div className="context txt-bold">
            <div className="title">Journal</div>
            <div className="view-all">View all</div>
          </div>
          <div className="contents">
            <div className="block">
              <div className="content"></div>
              <div className="category">Category</div>
              <div className="title txt-bold">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="context">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
            <div className="block">
              <div className="content"></div>
              <div className="category">Category</div>
              <div className="title txt-bold">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="context">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
            <div className="block">
              <div className="content"></div>
              <div className="category">Category</div>
              <div className="title txt-bold">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="context">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
