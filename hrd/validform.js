// 외부평가때는 유효성 검사에서 꼭 정규 표현식을 쓰지 않아도 된다.

// 현재 날짜 new Date()
const today = new Date()
console.log(today);     // Thu Jul 28 2022 14:40:02 GMT+0900 (대한민국 표준시)
                        // 20220728
console.log('연도 : ' + today.getFullYear());
console.log('월 : ' + (today.getMonth() + 1));        // Month는 0부터 시작해서 11까지이다. (+1 해줘야 한다.)
console.log('일 : ' + today.getDate());

let result = [today.getFullYear(), (today.getMonth() + 1), today.getDate()].join('-');       // 배열 요소를 특정 기호로 연결하기
console.log(result);

const month = (today.getMonth() + 1).toString().padStart(2, 0);
const date = (today.getDate().toString().padStart(2, 0));
console.log([today.getFullYear(), month, date].join(''));
// padstart는 자릿수가 부족하면 0을 붙여준다. 예) 8월 => 08, 12월 => 12

result = [today.getFullYear(), month, date].join('');
console.log(result);

// 오늘 날짜로 초기화
document.forms[0].elements[4].value = result;

function valid_checker() {
    const frm = document.forms[0];
    const custom_id = frm.custom_id;
    const name = frm.name;
    const phone = frm.phone;
    const addr = frm.addr;
    const reg_date = frm.reg_date;
    const grade = frm.grade;
    const locode = frm.locode;
    let isValid = true;

    if (custom_id.value == '') {      // 회원번호 유효성 검사
        alert('회원번호는 필수 입력입니다.');
        custom_id.focus();
        isValid = false;
    }
    
    if (name.value == '') {         // 회원성명 유효성 검사
        // document.getElementById('name').innerHTML = '필수 입력사항입니다.';
        alert('회원성명이 입력되지 않았습니다.');
        name.focus();
        isValid = false;
    } else {
        // document.getElementById('name').innerHTML = '';
    }

    // 회원 전화 정규식 표현
    var pnum = /^010-[0-9]{4}-[0-9]{4}$/;
    // 정규식 표현을 검사하는 함수 -> 변수명.test(문자열) -> 문자열이 변수명 패턴인지 검사하는 것.
    if (pnum.test(phone.value) === false) {       // 회원 전화 유효성 검사
        // document.getElementById('phone').innerHTML = '입력된 값은 핸드폰번호 형식이 아닙니다.'
        alert('입력된 값은 핸드폰번호 형식이 아닙니다.')
    } else {
        // document.getElementById('phone').innerHTML = '';
    }

    if (addr.value == '') {     // 회원 주소 유효성 검사
        // document.getElementById('addr').innerHTML = '필수 입력 사항입니다.';
        alert('회원주소가 입력되지 않았습니다.');
        addr.focus();
        isValid = false;
    } else {
        // document.getElementById('addr').innerHTML = '';
    }

    if (reg_date.value == '' || reg_date.value != result) {      // 가입일자 유효성 검사
        // document.getElementById('reg_date').innerHTML = 'YYYYMMDD 형식, 오늘 날짜로 필수 입력입니다.';
        alert('가입일자는 필수 입력이고 오늘 날짜로 해야합니다.');
        reg_date.focus();
        isValid = false;
    } else {
        // document.getElementById('reg_date').innerHTML = '';
    }

    if (!(grade.value == 'A' || grade.value == 'B' || grade.value == 'C')) {          // 고객등급 유효성 검사
        // document.getElementById('grade').innerHTML = '고객등급은 A, B, C 중 선택입니다.';
        alert('올바른 고객등급이 아닙니다. (A, B, C 중 선택)');
        grade.focus();
        isValid = false;
    } else {
        // document.getElementById('grade').innerHTML = '';
    }
    
    if (locode.value < 10 || locode.value > 99) {           // 도시코드 유효성 검사
        // document.getElementById('locode').innerHTML = '도시코드는 숫자 2자리입니다.';
        alert('올바른 도시코드가 아닙니다. (10 ~ 99)');
        locode.focus();
        isValid = false;
    } else {
        // document.getElementById('locode').innerHTML = '';
    }


    if (isValid) {          // 통과하면
        alert('회원 등록이 완료되었습니다.');
        frm.action = 'gallery.html';
    } else {                // 통과 못하면
        alert('회원 등록에 실패했습니다.')
        isValid = false;
    }

}