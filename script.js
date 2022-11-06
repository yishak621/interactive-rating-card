//import our default module
import getElement from './javascript/getelment.js';
//import our named module
import {
  ratingCard,
  ratingBtns,
  eachBtns,
  submitBtn,
  selectedCard,
  textResult,
  home,
  errorMessage,
} from './javascript/declaration.js';

//Submit btn click event
submitBtn.addEventListener('click', () => {
  callBack();
  const newArray = [...eachBtns]; //spread operator to convert them to array
  newArray.forEach((btn) => {
    if (btn.classList.contains('btn-active')) {
      ratingCard.classList.add('hidden');
      selectedCard.classList.remove('hidden');
      home.classList.remove('hidden');
    } else {
      errorMessage.classList.remove('hidden');
      function hideError() {
        errorMessage.textContent = '';
        errorMessage.classList.remove('error');
      }
      setTimeout(hideError, 2000);
    }
  });
});
//home btn click event
home.addEventListener('click', () => {
  ratingCard.classList.remove('hidden');
  selectedCard.classList.add('hidden');
  home.classList.add('hidden');
  eachBtns.forEach((btn) => {
    //when you go back the selection btns are empty
    btn.classList.remove('btn-active');
  });
});
function callBack() {
  //logic-when we click on the btns container[ratingbtns]
  ratingBtns.addEventListener('click', (e) => {
    const id = e.target.dataset.id;

    if (id) {
      console.log(id);
      //remove active state from btns
      eachBtns.forEach((btn) => {
        btn.classList.remove('btn-active');
        e.target.classList.add('btn-active');
        textResult.innerHTML = `You selected ${id} out of 5`; //printing the selected value to result
      });
    }
  });
}
callBack();

/** if (!btn.classList.contains('btn-active')) {
      console.log(!btn.classList.contains('btn-active'));
      console.log(btn);
      throw Error(`yo you didn't select the rating button`);
    } else {
      ratingCard.classList.add('hidden');
      selectedCard.classList.remove('hidden');
      home.classList.remove('hidden');
    }*/
