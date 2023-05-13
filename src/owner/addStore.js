import React, { useState } from 'react';
import DaumPost from './daumPost';
import PopupDom from './popupDom';
import './addStore.css';
function AddStore() {
    // 팝업창 상태 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false)
 
	// 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }
 
	// 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }
    return (
        <div>
            <h1>식당 등록</h1>
            <h3>점포명</h3>
            <input type="text" placeholder="점포명"></input>
            <br /><br />

            <h3>주소</h3>
            <input type="text" placeholder='주소 검색' disabled/>&nbsp;
            <button type="button" onClick={openPostCode}>주소 검색</button>
            <div id='popupDom'>
                {
                    isPopupOpen && (
                        <PopupDom>
                            <DaumPost onClose={closePostCode} />
                        </PopupDom>
                    )
                    // z-index 조절
                }
            </div>
            <br /><br />

            <h3>대표자명</h3>
            <input type="text" placeholder="대표자명"></input>
            <br /><br />

            <h3>사업자등록증</h3>
            <input type="file" ></input>
            <br /><br />

            <h3>식당 전화번호</h3>
            <input type="tel" placeholder="식당 전화번호"></input>
            <br /><br />

            <h3>식당 내부 사진</h3>
            <input type="file"></input>
            <br /><br />

            <h3>식당 영업 시간대</h3>
            <input type="time" min="09:00" max="18:00" required></input>
            &nbsp;~&nbsp;
            <input type="time" min="09:00" max="18:00" required></input>
            <br /><br />

            <h3>휴무일</h3>
            <input type="checkbox" name="day" value="mon" />월&nbsp;
            <input type="checkbox" name="day" value="tue" />화&nbsp;
            <input type="checkbox" name="day" value="wed" />수&nbsp;
            <input type="checkbox" name="day" value="thu" />목&nbsp;
            <input type="checkbox" name="day" value="fri" />금&nbsp;
            <input type="checkbox" name="day" value="sat" />토&nbsp;
            <input type="checkbox" name="day" value="sun" />일&nbsp;
            <br /><br />

            <h3>시그니처 메뉴</h3>
            <input type="file"></input>
            <input type="text" placeholder="메뉴명"></input><br /><br />
            <input type="file"></input>
            <input type="text" placeholder="메뉴명"></input><br /><br />
            <input type="file"></input>
            <input type="text" placeholder="메뉴명"></input>
            <br /><br />
            
            <h3>총 테이블 수</h3>
            <input type="number" placeholder="총 테이블 수"></input>
            <br /><br />

            <h3>최대 예약/수용 가능 인원</h3>
            <input type="number" placeholder="최대 예약/수용 가능 인원"></input>
            <br /><br />

            <br/>
            <input type="submit" value={"식당 등록"}/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default AddStore;