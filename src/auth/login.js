import React from 'react';

function Login() {
    return (
        <div>
            <h1>로그인</h1>
            <input type="text" placeholder="아이디"></input><br/><br/>
            <input type="password" placeholder="비밀번호"></input><br/><br/>
            <button>로그인</button>&nbsp;<button>회원가입</button>
        </div>
    );
}

export default Login;