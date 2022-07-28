// 배열 정렬 'sort'

// 데이터 타입 : number
const points = [40, 100, 1, 15, 11, 25];
console.log('초기값 : ' + points);

points.sort();                  // number의 숫자를 사전식 오름차순으로 정렬
console.log('정렬 : ' + points);
points.reverse();               // number의 숫자를 사전식 내림차순으로 정렬
console.log('역순 정렬 : ' + points);

console.log('');

// number의 크기값으로 비교 / 정렬 : 함수를 생성해서 호출해야 한다.
points.sort(function(a, b) {
    return a - b
});
console.log('number 값 정렬 :' + points);

points.sort(function(a, b) {
    return b - a
});
console.log('number 값 역순 정렬 :' + points);

console.log('');

// 데이터 타입 : string
const fruits = ['banana', 'Mango', 'apple', 'orange', 'carrot'];
console.log('초기값 : ' + fruits);

fruits.sort();
console.log('정렬 : ' + fruits);
fruits.reverse();
console.log('역순 정렬 : ' + fruits);

console.log('');

const cars = [{type:'volvo', year:2016},
            {type:'Saab', year:2001},
            {type:'BMW', year:2010},
            {type:'audi', year:2014}];
console.log('cars 배열 초기값 ::');
cars.forEach(value => console.log(value));

// 객체는 어떤 속성을 기준으로 sort하는지에 대한 callback 함수를 작성해야 한다.
cars.sort(function (a, b) {
    return a.year - b.year
});
console.log('cars 배열 year 순서로 정렬 ::');
cars.forEach(value => console.log(value));

console.log('');

cars.sort(function (a, b) {     // 오름차순 (문자열 타입일 때)
    if(a.type < b.type) {           // a.type이 사전순으로 b.type 보다 앞에 있다면 -1 (음수)
        return -1                   
    } else {                        // 그렇지 않으면 1 (양수)
        return 1
    }    
});
console.log('cars 배열 type 순서로 정렬 ::');
cars.forEach(value => console.log(value));

console.log('');


// type 역순으로 정렬
cars.sort(function (a, b) {     // callback 함수가 함수 리터럴 그 자체
    if(b.type < a.type) {       // 함수 리터럴은 화살표 함수 형식으로 변경할 수 있다.
        return -1               
    } else {
        return 1
    }
});
console.log('cars 배열 type 역순으로 정렬 ::');
cars.forEach(value => console.log(value));

console.log('');

// cars 배열을 대소문자 상관없이 type 역순으로 정렬
//      => '대소문자 상관없이'는 문자열을 대문자 또는 소문자로 통일해서 비교해야 한다.

function type_reverse(a, b) {       // 함수 이름이 자동으로 함수를 참조하는 변수(식별값)입니다.
    if(b.type.toLowerCase() < a.type.toLowerCase()) {
        return -1
    } else {
        return 1
    }
}

// '대소문자 상관없이' 만들기
cars.sort(type_reverse);        // callback 함수는 함수를 참조하는 식별자 (변수)
console.log('cars 배열 type 역순으로 정렬(대소문자 무관) ::');
cars.forEach(value => console.log(value));


// 모든 프로그래밍 언어에는 정렬 메소드(함수)가 있다.
// 정렬 순서 또는 기준에 따라 정렬 방법을 직접 정해야 할 때가 있다.
// 값 x, y의 비교
// (오름차순인 경우) x - y가 음수이면 그대로, x - y가 양수이면 교환한다.
// (내림차순인 경우) y - x가 양수이면 그대로, y - x가 음수이면 교환한다.
// 자바는 문자열의 뺄셈이 불가능하지만, 자바스크립트는 문자열의 뺄셈이 가능하므로 함수를 이용하여 정렬한다.



