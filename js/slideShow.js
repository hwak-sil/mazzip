const slides = document.querySelector('.slides'); //전체 슬라이드 컨테이너
const slideImg = document.querySelectorAll('.slides li'); //모든 슬라이드들
let currentIdx = 0; //현재 슬라이드 index
const slideCount = slideImg.length; // 슬라이드 개수
const prev = document.querySelector('.prev'); //이전 버튼
const next = document.querySelector('.next'); //다음 버튼
const slideWidth = 300; //한개의 슬라이드 넓이
const slideMargin = 150; //슬라이드간의 margin 값

//전체 슬라이드 컨테이너 넓이 설정
slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

function moveSlide(num) {
  slides.style.left = -num * 450 + 'px';
  currentIdx = num;
}

prev.addEventListener('click', function () {
  /*첫 번째 슬라이드로 표시 됐을때는 
  이전 버튼 눌러도 아무런 반응 없게 하기 위해 
  currentIdx !==0일때만 moveSlide 함수 불러옴 */

  if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener('click', function () {
  /* 마지막 슬라이드로 표시 됐을때는 
  다음 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==slideCount - 1 일때만 
  moveSlide 함수 불러옴 */
  if (currentIdx !== slideCount - 1) {
    moveSlide(currentIdx + 1);
  }
});


/*   2  */
const slides1 = document.querySelector('.slides1'); //전체 슬라이드 컨테이너
const slideImg1 = document.querySelectorAll('.slides1 li'); //모든 슬라이드들
let currentIdx1 = 0; //현재 슬라이드 index
const slideCount1 = slideImg1.length; // 슬라이드 개수
const prev1 = document.querySelector('.prev1'); //이전 버튼
const next1 = document.querySelector('.next1'); //다음 버튼
const slideWidth1 = 300; //한개의 슬라이드 넓이
const slideMargin1 = 150; //슬라이드간의 margin 값

//전체 슬라이드 컨테이너 넓이 설정
slides1.style.width = (slideWidth1 + slideMargin1) * slideCount1 + 'px';

function moveSlide1(num) {
  slides1.style.left = -num * 450 + 'px';
  currentIdx1 = num;
}

prev1.addEventListener('click', function () {
  /*첫 번째 슬라이드로 표시 됐을때는 
  이전 버튼 눌러도 아무런 반응 없게 하기 위해 
  currentIdx !==0일때만 moveSlide 함수 불러옴 */

  if (currentIdx1 !== 0) moveSlide1(currentIdx1 - 1);
});

next1.addEventListener('click', function () {
  /* 마지막 슬라이드로 표시 됐을때는 
  다음 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==slideCount - 1 일때만 
  moveSlide 함수 불러옴 */
  if (currentIdx1 !== slideCount1 - 1) {
    moveSlide1(currentIdx1 + 1);
  }
});


/*   3  */
const slides2 = document.querySelector('.slides2'); //전체 슬라이드 컨테이너
const slideImg2 = document.querySelectorAll('.slides2 li'); //모든 슬라이드들
let currentIdx2 = 0; //현재 슬라이드 index
const slideCount2 = slideImg2.length; // 슬라이드 개수
const prev2 = document.querySelector('.prev2'); //이전 버튼
const next2 = document.querySelector('.next2'); //다음 버튼
const slideWidth2 = 300; //한개의 슬라이드 넓이
const slideMargin2 = 150; //슬라이드간의 margin 값

//전체 슬라이드 컨테이너 넓이 설정
slides2.style.width = (slideWidth2 + slideMargin2) * slideCount2 + 'px';

function moveSlide2(num) {
  slides2.style.left = -num * 450 + 'px';
  currentIdx2 = num;
}

prev2.addEventListener('click', function () {
  /*첫 번째 슬라이드로 표시 됐을때는 
  이전 버튼 눌러도 아무런 반응 없게 하기 위해 
  currentIdx !==0일때만 moveSlide 함수 불러옴 */

  if (currentIdx2 !== 0) moveSlide2(currentIdx2 - 1);
});

next2.addEventListener('click', function () {
  /* 마지막 슬라이드로 표시 됐을때는 
  다음 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==slideCount - 1 일때만 
  moveSlide 함수 불러옴 */
  if (currentIdx2 !== slideCount2 - 1) {
    moveSlide2(currentIdx2 + 1);
  }
});


/*   4  */
const slides3 = document.querySelector('.slides3'); //전체 슬라이드 컨테이너
const slideImg3 = document.querySelectorAll('.slides3 li'); //모든 슬라이드들
let currentIdx3 = 0; //현재 슬라이드 index
const slideCount3 = slideImg3.length; // 슬라이드 개수
const prev3 = document.querySelector('.prev3'); //이전 버튼
const next3 = document.querySelector('.next3'); //다음 버튼
const slideWidth3 = 300; //한개의 슬라이드 넓이
const slideMargin3 = 150; //슬라이드간의 margin 값

//전체 슬라이드 컨테이너 넓이 설정
slides3.style.width = (slideWidth3 + slideMargin3) * slideCount3 + 'px';

function moveSlide3(num) {
  slides3.style.left = -num * 450 + 'px';
  currentIdx3 = num;
}

prev3.addEventListener('click', function () {
  /*첫 번째 슬라이드로 표시 됐을때는 
  이전 버튼 눌러도 아무런 반응 없게 하기 위해 
  currentIdx !==0일때만 moveSlide 함수 불러옴 */

  if (currentIdx3 !== 0) moveSlide3(currentIdx3 - 1);
});

next3.addEventListener('click', function () {
  /* 마지막 슬라이드로 표시 됐을때는 
  다음 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==slideCount - 1 일때만 
  moveSlide 함수 불러옴 */
  if (currentIdx3 !== slideCount3 - 1) {
    moveSlide3(currentIdx3 + 1);
  }
});