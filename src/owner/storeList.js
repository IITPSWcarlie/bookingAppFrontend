import React from 'react';
import './storeList.css';

function StoreList() {
    /*
    const list = data.restaurants.map((item, index) => {

        let numStr = Number(item.rating);
        let str = "";
        for (let i = 0; i < numStr; i++) {
            str += "★";
        }

        let numUSD = Number(item.price);
        let dSign = "";
        for (let i = 0; i < numUSD; i++) {
            dSign += "$";
        }

        let paraName = item.name;
        return (
                <a href={`/detail/${paraName}`}>
                    <div key={index}>
                        <h2>{item.name}</h2>
                        <p>{str} {dSign}</p>
                        <p>{item.address}</p>
                        <hr/>
                    </div>
                </a>
        );

    });
    */
    return (
        <div>
            <h1>보유 식당 리스트</h1>
            <div>
                {/*{list}*/}
                
                <div className='listItem'>
                    <h3>피오르달리조 안동대점</h3>
                    <table>
                        <tr>
                            <td colSpan={2}>위치: ~~~</td>
                        </tr>
                        <tr>
                            <td>평점: ★★★★☆</td>
                            <td>매출: $$$$</td>
                        </tr>
                        <tr>
                            <td>예약 건수: #건</td>
                            <td>영업 시간: hh:mm~hh:mm</td>
                        </tr>
                    </table>
                </div>
            </div>
            <br/>
            <input type="button" value={"식당 추가"}/>
        </div>
    );
}

export default StoreList;