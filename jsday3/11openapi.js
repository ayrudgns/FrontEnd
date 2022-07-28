document.getElementById('search').addEventListener('click', function () {
    const query = document.getElementById('query').value;
    const page = document.getElementById('page').value;
    const size = document.getElementById('size').value; 
    // radio 버튼은 선택되었는지 확인
    let sort = document.getElementById('accuracy').checked;
    if (sort == true) {
        sort='accuracy';
    } else {
        sort='recency';
    }
    // ${xxx} => xxx는 변수, 수식, 함수 등 결과값이면 모두 가능하다. (출력)
    alert(`query=${query}&page=${page}&size=${size}&sort=${sort}`);

    // 여기까지 파라미터 값을 입력받는 경우를 구현함. (alert으로 중간 확인)


    if (query == "") {      // 필수 입력 항목 확인
        alert('검색어는 필수 입력입니다.');     // 없으면 넣어야 해!
        // 카카오 open api 요청시 필수 파라미터
    } else {
        search(query, page, size, sort);        // 있으면 새로운 검색을 위한 함수 호출
    }

});     // 함수 끝!

// search('트와이스', 1, 10, 'accuracy');      // 함수 정의보다 먼저 호출하면 오류 (js는 위에서 아래 순서로 실행함.)

const search = function (v1, v2, v3, v4) {  // 함수로 만들기!
    // 비동기 통신을 위한 객체 생성
    const xhr = new XMLHttpRequest();

    // 1. http 요청 초기화 : method와 url 설정
    xhr.open("GET", `https://dapi.kakao.com/v2/search/vclip?query=${v1}&page=${v2}&size=${v3}&sort=${v4}`);     // 잘못된 url을 쓰면 404 error
 
    // 2. 요청 header 설정
    xhr.setRequestHeader("Authorization", "KakaoAK 6ada926c674f0008c4e30242fa9453a3");      // 잘못된 REST API KEY를 쓰면 401 error
    // xhr.setRequestHeader();

    // 3. http 요청 전송 : 추가적인 파라미터를 같이 전송하기
    xhr.send();
    
    // 4. onload : 요청이 완료되고, 이에 대한 응답이 왔을 때 실행될 onload 이벤트 핸들러 작성
    xhr.onload = function() {
        if (xhr.status == 200) {    // 응답코드가 200인 경우에만!
            document.getElementById('list').innerHTML = '';     // 새로운 검색 결과만 화면에 표시하기 위해 초기화하기
            let $response = JSON.parse(xhr.response);
            let results = $response.documents;          // author, datetime, title, url, play-time, thumbnail 속성으로 구성된 객체 배열
            results.forEach(element => {                // results 배열의 각 값들을 순서대로 element가 참조하며 함수를 실행한다.
                const $ul = document.createElement('ul');       // 새로운 ul태그 요소 생성
                // ${ } : 표현식 기호 -> 변수, 수식, 함수 등 결과값이 있는 것이면 무엇이든 사용 가능하다.
                const temp = `<li>${element.author}</li>
                <li>${element.datetime}</li>
                <li>${element.play_time}</li>
                <li><a href=${element.url} target="_blank"><img src=${element.thumbnail} width="200px"></a></li>     
                <li><${element.title}></li>
                <li>${href=element.url}</li>`;                  // 그냥 url
                // url은 a태그, thumbnail은 img 태그에 속성값으로 활용할 수 있다.
                // 썸네일에 url 걸기 (Line 41)

                $ul.innerHTML = temp;               // ul태그 요소의 innerHTML 설정
                document.getElementById('list').appendChild($ul);       // ul태그 요소를 <p id="list"></p>의 자식 요소로 추가
            });     // forEach 끝
        }       // if 끝
    } // onload 끝
} // search 함수 끝!

search('트와이스', 1, 10, 'accuracy');      // 정상적인 함수 호출





