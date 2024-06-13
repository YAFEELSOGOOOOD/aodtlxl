// 초기 점수 설정
let manuScore = 0;
let mancityScore = 0;

// HTML 요소 가져오기
const manuCountElem = document.getElementById('manu-count');
const mancityCountElem = document.getElementById('mancity-count');

// 맨유 클릭 시
document.getElementById('manu-score').addEventListener('click', function() {
    manuScore++;
    manuCountElem.textContent = manuScore;
});

// 맨시티 클릭 시
document.getElementById('mancity-score').addEventListener('click', function() {
    mancityScore++;
    mancityCountElem.textContent = mancityScore;
});

// 여기에 점수 저장 및 다른 사람에게 보이게 하는 기능을 추가할 수 있습니다.
