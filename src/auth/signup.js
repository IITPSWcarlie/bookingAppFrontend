function Signup() {
    return (
        <div>
            <h1>회원가입</h1>
            <h3>구분</h3>
            <input type="radio" name="type" value="customer" />고객<br />
            <input type="radio" name="type" value="owner" />사장님<br />
            <h3>아이디</h3>
            <input type="text" placeholder="아이디"></input><br /><br />
            <h3>비밀번호</h3>
            <input type="password" placeholder="비밀번호"></input><br /><br />
            <h3>비밀번호 확인</h3>
            <input type="password" placeholder="비밀번호 확인"></input><br /><br />
            <h3>이름</h3>
            <input type="text" placeholder="이름"></input><br /><br />
            <h3>전화번호</h3>
            <input type="text" placeholder="전화번호"></input><br /><br />
            <h3>이메일</h3>
            <input type="text" placeholder="이메일"></input><br /><br />
            <h3>생년월일</h3>
            <input type="date" placeholder="생년월일"></input><br /><br />

            <h2>사업자 인증</h2>
            <h3>사업자등록증</h3>
            <input type="file" placeholder="사업자등록증"></input><br /><br />
            <button>회원가입</button>
        </div>
    )
}

export default Signup;
