// 전역변수 선언하기

// let days = document.forms[0].days;
let frm = document.forms[0];

let checkIn = frm.start;
let checkOut = frm.end;
let during = frm.days;
console.log(typeof during);           // object
console.log(typeof during.value);     // string
// during = parseInt(during.value);    // number 타입으로 변환 => 필요할 때 사용하기!

// 선택할 수 있는 입실 날짜의 범위를 설정하는 min, max 속성값
let today = new Date();
checkIn.min = dateFormat(today);
today.setDate(today.getDate() + 25);        // 임의로 오늘부터 25일 후까지 범위 지정!
checkIn.max = dateFormat(today);


function daySelect() {
    alert(during.value + '박 선택하셨습니다.');
    if(checkIn.value != '') {       // 입실 날짜를 먼저 선택하고 숙박일수를 입력했을 때
        endOutput();                // 퇴실 날짜 계산해서 출력해주기
    }
}

function endOutput() {
    let selDate = new Date(checkIn.value);      // 선택한 입실 날짜로 Date 객체 생성
    console.log('입실 날짜 : ' + selDate);       // 확인
    selDate.setDate(selDate.getDate() + parseInt(during.value));        // 숙박일수 더하기
    console.log('퇴실 날짜 : ' + selDate);       // 확인
    console.log('퇴실 날짜 dateFormat : ' + dateFormat(selDate));       // 확인
    checkOut.value = dateFormat(selDate);
}

function dateFormat(selDate) {  // endOutput()에서 써먹을 함수 
                                //      ㄴ 날짜 타입 new Date() 인자 -> yyyy-mm-dd 형식으로 문자열을 리턴하기 위함.
    const month = (selDate.getMonth() + 1).toString().padStart(2, 0);
    const date = selDate.getDate().toString().padStart(2, 0);
    let result = [selDate.getFullYear(), month, date].join('-');
    console.log(result);
    return result;
}