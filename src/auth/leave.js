import React from 'react';

function Leave() {
    return (
        <div>
            <h1>정말 탈퇴하시겠어요?</h1>
            <input type="text" placeholder="아이디"></input><br/><br/>
            <input type="password" placeholder="비밀번호"></input><br/><br/>
            <h3>탈퇴 사유</h3>
            <input type="text" placeholder="탈퇴 사유"></input><br/><br/>
            <h3>비밀번호 확인</h3>
            <input type="password" placeholder="비밀번호 확인"></input><br/><br/>
            <h3>탈퇴하시면 모든 정보가 삭제됩니다.</h3>
            <h3>탈퇴 후에는 복구가 불가능하며,</h3>
            <h3>재가입은 가능합니다.</h3>       {/* 이 조항은 자동완성으로 채워진 부분이므로 추후 논의 후 수정 */}

            <button>탈퇴</button>&nbsp;<button>취소</button>
        </div>
    );
}

export default Leave;