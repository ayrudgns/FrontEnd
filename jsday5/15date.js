console.log('1. 현재 날짜와 시간 (local - 컴퓨터에 저장된 날짜와 시간)');
console.log(new Date());

console.log('2. 날짜를 직접 지정');
console.log(new Date(2022, 7, 12));     // Month를 number로 표기할 때는 0 ~ 11
console.log(new Date('2022-7-12'));

console.log('3. 날짜와 시간까지 지정');
console.log(new Date(2022, 6, 23, 16, 9, 30));

console.log('4. 세계 표준 시간 - UTC');
console.log(new Date().toUTCString());

console.log('5. 세계 표준 시간 - ISO');
console.log(new Date().toISOString());      // 자바에서 LocalDateTime, ms 단위까지 표시

console.log('6. 로컬 형식 (운영체제에 설정된 국가에 따른 형식)');
console.log(new Date().toLocaleString());

console.log('* 자바에서 시간은 long 타입으로, 1970-1-1 0시 기준으로 한다. (ms 값을 기준으로 얼마나 지났는지?)');
console.log(new Date().getTime());

console.log('7. 날짜 / 시간 메소드');
let today = new Date();
console.log('7-1) 연도 : ' + today.getFullYear());
console.log('7-2) 월 : ' + today.getMonth());       // Month를 number로 표기할 때는 0 ~ 11
console.log('7-3) 일 : ' + today.getDate());
console.log('7-4) 시 : ' + today.getHours());
console.log('7-5) 분 : ' + today.getMinutes());
console.log('7-6) 초 : ' + today.getSeconds());

console.log('8. 날짜 변경 메소드');
today.setFullYear(today.getFullYear() + 3);
    // 현재 날짜를 get해서 + 3년을 하고 set 한다.
console.log('8-1) 3년 후 날짜 : ' + (today));
today = new Date();     // today 초기화!
today.setFullYear(today.getFullYear() - 3);
    // 현재 날짜를 get해서 - 3년을 하고 set 한다.
console.log('8-2) 3년 전 날짜 : ' + (today));

// 탄생일 기준 + 10000일 구하기
let bday = new Date('1995-08-01');
console.log('8-3) 나의 탄생일 : ' + bday.toLocaleString());
bday.setDate(bday.getDate() + 10000);
console.log('8-4) 나의 탄생일 + 10000일은? : ' + bday.toLocaleString());

// 나는 태어난 지 며칠이 지났을까?
bday = new Date('1995-08-01');
let diff = new Date() - bday;
console.log('8-5) new Date() - bday');
console.log(diff + 'ms');       // ms를 일 단위로 바꾸기 1일은 86400초이고, * 1000 하면 ms 단위
const $1day = 24 * 60 * 60 * 1000;
console.log('8-6) 내가 태어난 이후 Day + ' + (diff/$1day) + '일 지났습니다.');
// 자바스크립트의 반올림, 올림, 버림 메소드는 ?
/*
Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)   Returns the integer part of x (new in ES6)
*/
diff = Math.round(diff/$1day);
console.log(diff);

// hrd 폴더의 validform.js 에서 내용 가져오기!
today = new Date(2022, 7, 1);
console.log(today);     // Thu Jul 28 2022 14:40:02 GMT+0900 (대한민국 표준시)
                        // 20220728
console.log('연도 : ' + today.getFullYear());
console.log('월 : ' + (today.getMonth() + 1));
console.log('일 : ' + today.getDate());

const month = (today.getMonth() + 1).toString().padStart(2, 0);
const date = today.getDate().toString().padStart(2, 0);
// padstart는 자릿수가 부족하면 0을 붙여준다. 예) 8월 => 08, 12월 => 12
// 월, 일은 무조건 2자리 숫자로 / 만약 1 ~ 9이면 앞에 0 추가

console.log('9. 날짜형식 yyyy-mm-dd');
let result = [today.getFullYear(), month, date].join('-');       // 배열 요소를 특정 기호로 연결하기
console.log(result);

console.log('10. 날짜형식 yyyymmdd');
result = [today.getFullYear(), month, date].join('');
console.log(result);







