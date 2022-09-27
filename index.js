let store = Redux.createStore(reducer);

let count = store.getState();

let h2 = document.querySelector("h2");

let increment = document.querySelector(".increment");
let decrement = document.querySelector(".decrement");
let reset = document.querySelector(".reset");
let step = document.querySelectorAll(".step");
let max = document.querySelectorAll(".max-value");

h2.innerText = count;

let stepNo;
for (let i = 0; i < step.length; i++) {
  step[i].addEventListener("click", (e) => {
    stepNo = Number(e.target.value);
  });
}

let maxNo;
for (let i = 0; i < max.length; i++) {
  max[i].addEventListener("click", (e) => {
    maxNo = Number(e.target.value);
    console.log(maxNo);
  });
}

increment.addEventListener("click", () => {
  store.dispatch({ type: "increment", step: stepNo, max: maxNo });
});
decrement.addEventListener("click", () => {
  store.dispatch({ type: "decrement", step: stepNo, max: maxNo });
});
reset.addEventListener("click", () => {
  store.dispatch({ type: "reset", step: stepNo, max: maxNo });
});

store.subscribe(() => {
  count = store.getState();
  h2.innerText = count;
});

function reducer(state = 0, action) {
  switch (action.type) {
    case "increment":
      return (state = state + (action.max > count ? action.step || 1 : 0));
      break;
    case "decrement":
      return (state = state - (action.step || 1));
      break;
    case "reset":
      return (state = 0);
      break;
    default:
      return state;
  }
}
