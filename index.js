const form = document.querySelector("form");
const result = document.querySelector(".result");
const labelPrint = document.querySelector(".calc__hcf h3");

const operationFunc = {
  hcf,
  lcm,
};

const label = {
  hcf: "Calculate hcf of nth numbers",
  lcm: "Calculate lcm of nth numbers",
};

function labelHandler(e) {
  const select = document.querySelector("select");
  labelPrint.innerHTML = label[select.value] ?? "Please select an operation!";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const operation = e.target.operation.value;
  if (!operation) {
    result.style.color = "red";
    return (result.innerHTML = "Please Select an operation!");
  }

  let numberLists = e.target.numberLists.value;

  if (!numberLists) {
    result.style.color = "red";
    return (result.innerHTML = "Please give me numbers!");
  }

  numberLists = numberLists.split(" ").map((item) => +item);

  result.style.color = "#3498db";
  result.innerHTML = "Result: " + operationFunc[operation](numberLists);
});

/**
 *
 * @param {Array<Number>} numberLists
 * @returns A Number
 */

function hcf(numberLists = []) {
  if (numberLists.length == 0) return null;

  const minNumber = Math.min(...numberLists);
  const newArr = [];

  for (let i = 1; i <= minNumber; i++) {
    if (minNumber % i === 0) newArr.push(i);
  }

  let count = 0;

  for (let j = newArr.length - 1; j >= 0; j--) {
    for (let i = 0; i < numberLists.length; i++) {
      if (numberLists[i] % newArr[j] === 0) {
        count++;
      }
    }

    if (count === numberLists.length) {
      return newArr[j]; // answer
    } else {
      count = 0;
    }
  }
}

/**
 *
 * @param {Array<Number>} numberLists
 * @returns A Number
 */

function lcm(numberLists = []) {
  if (numberLists.length == 0) return null;

  const maxNumber = Math.max(...numberLists);

  let count = 0;
  for (let i = maxNumber; i >= maxNumber; i += maxNumber) {
    for (let j = 0; j < numberLists.length; j++) {
      if (i % numberLists[j] === 0) count++;
    }
    if (count === numberLists.length) {
      return i; // answer
    } else {
      count = 0;
    }
  }
}
