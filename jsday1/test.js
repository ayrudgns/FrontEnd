// node.js 설치하기!! => 자바스크립트 런타임 환경 프로그램
// vsCode에서 스크립트 실행이 허용되지 않은 경우, 시스템에서 powershell 가서 설정 변경해야 함.
// 실행이 잘 되면 OK! (ctrl + F5)

console.log('기러기스위스별똥별토마토역삼역우영우');

let arr1 = [11, 22, 44, 99, 55];
console.log(arr1);
console.log(typeof arr1);
console.log(arr1[3]);
arr1[2] = 77;
console.log(arr1.sort());           // 정렬 가능  
console.log(arr1.reverse());        // 역순 정렬
arr1[6] = 44;                       // 길이 자동으로 늘어남.
console.log(arr1);
arr1 = [1, 5, 6, 7];
console.log(arr1);

// 문자로 된 배열 만들기
const arr2 = ['apple', 'mango', 'kiwi', 'banana', 'strawberry', 'grape'];
console.log(arr2);
arr2[7] = 'pear';       // 기존 객체 변경은 가능
console.log(arr2);