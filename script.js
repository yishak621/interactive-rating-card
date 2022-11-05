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
} from './javascript/declaration.js';

//Submit btn click event
submitBtn.addEventListener('click', () => {
  ratingCard.classList.add('hidden');
  selectedCard.classList.remove('hidden');
  home.classList.remove('hidden');
  //logic-when we click on the btns container[ratingbtns]
  ratingBtns.addEventListener('click', (e) => {
    const id = e.target.dataset.id;

    if (id) {
      //remove active state from btns
      eachBtns.forEach((btn) => {
        btn.classList.remove('btn-active');
        e.target.classList.add('btn-active');
        textResult.innerHTML = `You selected ${id} out of 5`; //printing the selected value to result
      });
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
