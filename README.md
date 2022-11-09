# Frontend Mentor - Interactive rating component solution

holla everyone my name is yishak abrham
This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)

  - [The challenge](#the-challenge)

  - [Links](#links)

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

hey my name is yishak and this is my solution to the interactive-rating-component design so enjoy it!

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://ratecard621.netlify.app/](https://your-live-site-url.com)

## My process

the process to build the rating is very easy if someone knows how to acess DOM using javascript.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flex
- CSS Grid
- Mobile-first workflow
- javascript
- javascript module

### What I learned

these helps me to practice a basics of javascript methods specially forEach method ,by selecting the parent container and then accessing
each and every elment of that item .and also displaying the dataset-id in the result section of card.
the parent container for rating btns is

```html
<h1>
  <div class="rating-container">
    <button class="btn btn-rating" data-id="1">1</button>
    <button class="btn btn-rating" data-id="2">2</button>
    <button class="btn btn-rating" data-id="3">3</button>
    <button class="btn btn-rating" data-id="4">4</button>
    <button class="btn btn-rating" data-id="5">5</button>
  </div>
</h1>
```

and also for writing a media query for those who cant be hover[mobile and tabs]

```css
@media (hover: hover) {
  .btn-rating:hover {
    background-color: var(--color-light-grey);
    color: var(--color-white);
  }
}
@media (hover: none) {
  /*targets only medias that can not be hover for mobile devices or tabs <!--TODO:*/
  .btn-rating:hover {
    background-color: var(--color-Orange);
    color: var(--color-white);
  }
}
```

and the result card should be set like these by default when we acess the DOM we remove these classlist and then add it to the
rating card thats the whole logic in the css

```css
.hidden {
  opacity: 0;
  display: none;
}
```

the main logic in the js is printing the data-set id of the given btn and then print it to the result card

```js
//remove active state from btns
eachBtns.forEach((btn) => {
  btn.classList.remove('btn-active');
  e.target.classList.add('btn-active');
  textResult.innerHTML = `You selected ${id} out of 5`; //printing the selected value to result
});
```

and also checking if the user didnt click on the rating btn and showing a error message using forEach method

```js
const newArray = [...eachBtns]; //spread operator to convert them to array
newArray.forEach((btn) => {
  //checking if the user click on rating btn-at least one of it makes it true
  if (btn.classList.contains('btn-active')) {
    ratingCard.classList.add('hidden');
    selectedCard.classList.remove('hidden');
    home.classList.remove('hidden');
    errorMessage.classList.remove('error-active');
  } else if (!selectedCard.classList.contains('hidden')) {
    errorMessage.classList.remove('error-active');
  } else {
    errorMessage.classList.add('error-active');
    function hideError() {
      errorMessage.classList.remove('error-active');
    }
    setTimeout(hideError, 2000);
  }
});
```

### Continued development

to be honest i just wanna practice the logic in the rating section(not on these project) is when the user rated first and then when
he/she get back and when they try to rate again to display error message

## Author

- Frontend Mentor - [@yishak621](https://www.frontendmentor.io/profile/yourusername)
