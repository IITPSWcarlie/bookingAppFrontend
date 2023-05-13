import DaumPostcode from 'react-daum-postcode';
import React from 'react';
import './daumPost.css';

const DaumPost = (props) => {
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        console.log(fullAddress)
        console.log(data.zonecode)
        props.onClose()
    }
    return (
        <div className='dpost'>
            <DaumPostcode onComplete={handlePostCode} className="post-code" />
            <button type='button' onClick={() => {props.onClose()}}>닫기</button>
        </div>
    );
}
export default DaumPost;