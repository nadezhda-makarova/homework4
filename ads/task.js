const allText = document.querySelectorAll('.rotator__case');
let indexElem = 0;

setInterval(showNextAds, 1000);

function showNextAds() {
  document.querySelector('.rotator__case_active').classList.remove('rotator__case_active');
  if(indexElem < allText.length - 1) {
    allText[indexElem + 1].classList.add('rotator__case_active');
    indexElem = indexElem + 1;
  } else {
    allText[0].classList.add('rotator__case_active');
    indexElem =0;
  };
};

showNextAds();
