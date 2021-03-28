import React from 'react';

function Mypage() {
  return (
    <div className="mypage">
      <div className="mymenus">
        <div className="myprofile">
          <img src="/assets/Search/myprofile-icon.svg" alt="내 프로필" />
        </div>
        <div className="mysettings">
          <img src="/assets/Search/mysettings-icon.svg" alt="내 설정" />
        </div>
      </div>
      <div className="myshop">
        <img src="/assets/Search/myshop-icon.svg" alt="내 장바구니" />
      </div>
    </div>
  );
}

export default Mypage;
