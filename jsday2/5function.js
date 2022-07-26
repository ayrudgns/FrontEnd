// 함수의 목적 : 코드의 재사용
// 자바스크립트에서, 함수는 객체 타입이다.
// 따라서, 자바의 메소드처럼 필요에 따라 인자와 리턴값이 필요하다.

// 1. 함수의 기본 형식 : 함수 리터럴(등호를 기준으로 오른쪽)로 선언하기
const myfunc1 = function(x) {       // myfunc1 은 함수 리터럴 참조하는 식별자, 괄호 안의 x는 인자
    console.log('myfunc1 함수');
    return x * 11 + 12;     // 리턴값이 있다.
}      

// const va1 = 123;          // 123은 number 형식 리터럴

// 함수 호출 - 위의 함수 식별자(변수)로 호출한다.
let result = myfunc1(10);   // 함수 실행 후 리턴값은 result 변수에 저장.
console.log('result : ' + result);

result = myfunc1();             // 인자값이 없으므로 리턴값을 계산할 수 없다. 따라서 리턴값은 NaN (Not a Number)
console.log('result : ' + result);

console.log(' ');
// ****************************************** //

// 2. 함수의 기본 형식 : 리터럴 없이 선언하기, 함수 이름을 사용
//                      ㄴ 식별자 선언이 생략된 형태이고, 자동으로 함수 이름을 식별자로 한다.
function myfunc2(y) {
    console.log('myfunc2 함수');
    console.log('myfunc1에서 지정하지 않은 함수 이름이 있습니다.');
    return y * 11 - 12;
}

result = myfunc2(10);       // myfunc2가 함수 이름이면서 생략된 식별자(변수)
console.log('result : ' + result);

console.log(' ');
// ****************************************** //

// 3. 함수 리터럴을 화살표 함수로 사용. (인자를 받아서 리턴값을 전달할 때 사용)
const myfunc3 = (x) => x * 11 + 12;     // myfunc1과 리턴하는 수식은 동일.

console.log('myfunc3 result : ' + myfunc3(10));      // 리턴값이 있을 때 변수 저장을 사용하지 않고 출력

console.log(' ');

const myfunc4 = (x) => {
    console.log('myfunc4 : myfunc2와 동일하게 동작한다.');
    return x * 11 - 12;
}  // 화살표 함수에서 실행 명령이 여러개인 경우 { } 사용.

console.log('result : ' + myfunc4(10));

console.log(' ');

const myfunc5 = (x) => console.log('myfunc5 x : ' + x);

myfunc5(999);       // 리턴값 없이 인자값을 그냥 출력 (함수에 console.log가 있음)
// console.log(' ');   
console.log(myfunc5(999));      // myfunc5 실행, 근데 리턴값이 없으므로 undefined 출력
                                // console.log 안에 console.log가 들어가 있는 상태 = undefined
// 자바에서는 리턴값이 없는 메소드를 리턴값을 받아서 저장하고 출력하려고 하면 오류 발생
// 자바스크립트에서는 오류 없이 undefined 출력됨. => 자바보다 자바스크립트가 덜 엄격함.
