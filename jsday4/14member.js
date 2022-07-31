function valid_check() {
    const frm = document.forms[0];
    const name = frm.name;
    const email = frm.email;
    const password = frm.password;
    const age = frm.age;
    let isValid = true;

    if(name.value == '') {      // 이름 유효성 검사
        alert('이름은 필수 입력입니다.');
        name.focus();
        isValid = false;
    }

    if(password.value.length < 4) {     // password 유효성 검사
        alert('패스워드는 4글자 이상입니다.');
        password.focus();
        isValid = false;
    }

    // 이메일은 기호 @와 .을 모두 포함해야 하는데, .은 마지막 위치는 아니어야 함!
    if(email.value == '' || (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1)
        || email.value.endsWith('.')) {         // email 유효성 검사
            // email.value.indexOf('.') == email.value.length - 1로 써도 된다. (.이 마지막 위치인지 확인할 때)
        alert('이메일은 필수 입력입니다. @를 .을 모두 포함해야 하며, .이 마지막 위치에 올 수 없습니다.');
        alert('간단한 이메일 형식 체크 실패 !');
        email.focus();
        isValid = false;
    }
    // 실제로는 이메일주소 형식이 위의 조건보다 복잡하다.
    // 계정 문자열에 특수 기호는 '-', '_', '.' 만 포함된다.
    // 도메인 이름에는 기호와 숫자를 사용할 수 없다. ex) na-ver.com, 333nav.com (불가능)
    // 복잡한 조건의 유효성 검사를 정규식 표현으로 할 수 있다.
    var regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    // 정규표현식은 전화번호, 이메일, 패스워드, 한글이나 영문 입력 체크에 활용할 수 있다.
    if(regEmail.test(email.value) === false) {
        alert('입력된 값은 이메일 형식이 아닙니다.');
    }
/*
        == 정규 표현식에 관한 설명 ==
        정규표현식은 / / 안에 작성한다.
        ^는 시작을, $는 끝을 지정하는 기호
        []는 [] 안의 문자들 중 1개를 선택 => [0-9a-zA-Z]는 숫자, 영문 소문자, 영문 대문자 중 1개를 선택  
        *는 0번 이상 문자 반복
        []?는 [] 안에 문자가 있는가? 존재 여부
        ()는 그룹
        {n}는 n개
        {n, m}는 n개 이상, m개 이하
        @와 \.은 필수적인 문자를 지정할 때 사용
*/

    if(age.value < 15 || age.value > 99) {          // age 유효성 검사
        alert('나이는 15 ~ 99 범위의 값이어야 합니다.');
        age.focus();
        isValid = false;
    }

    // 취미는 반드시 1개 이상을 선택하도록 조건 추가하기
    let cnt = 0;
    frm.hobby.forEach(value => {
        if(value.checked) {
            cnt++;
        }
    });
    if(cnt == 0) {
        alert('취미는 1개 이상 선택해야 합니다.')
        isValid = false;
    }



// 함수 결과값 === true (함수 결과값이 String "true"일 떄는 거짓, boolean true가 나와야 참이다.)
    if(isValid) {       // 유효성을 통과하면        // 자바스크립트는 동등 비교 ==, ===가 있다.
        frm.action = '13result.html';              // 예시) 2 == "2"는 참 => 문자열과 숫자의 값을 비교해준다.
        frm.submit();   // 제출                  // 예시) 2 === "2"는 거짓 => 문자열과 숫자열의 값과 데이터 타입까지 비교해준다.
    } else {        // 통과 못하면
        alert('유효성 통과 실패!!!');
    }


}