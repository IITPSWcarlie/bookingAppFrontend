function EditInfo() {
    return (
        <div>
            <h1>회원정보 수정</h1>
            <h3>어서오세요, @@ <span>고객/사장님</span>!</h3>   {/* @@에는 아이디 또는 이름이 들어감 */}
            <h3>비밀번호</h3>
            <input type="password" placeholder="비밀번호"></input><br /><br />
            <h3>비밀번호 확인</h3>
            <input type="password" placeholder="비밀번호 확인"></input><br /><br />
            <h3>전화번호</h3>
            <input type="text" placeholder="전화번호"></input><br /><br />
            <h3>이메일</h3>
            <input type="text" placeholder="이메일"></input><br /><br />
            <h3>생년월일</h3>
            <input type="date" placeholder="생년월일"></input><br /><br />
            <button>저장</button>&nbsp;<button>취소</button>&nbsp;<button>탈퇴</button>
        </div>
    )
}

export default EditInfo;
