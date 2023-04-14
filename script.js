let input = document.querySelector("#card-number"),
  numbers = /[0-9]/,
  regExp = /[0-9]{4}/

// добавляем слушатель события на инпут
input.addEventListener("input", (ev) => {
  // не позволяем ввести ничего, кроме цифр 0-9, ограничиваем размер поля 19-ю символами
  if (
    (ev.inputType === "insertText" && !numbers.test(ev.data)) ||
    input.value.length > 19
  ) {
    input.value = input.value.slice(0, input.value.length - 1)
    return
  }

  // обеспечиваем работу клавиш "backspace","delete"
  let value = input.value
  if (
    ev.inputType === "deleteContentBackward" &&
    regExp.test(value.slice(-4))
  ) {
    input.value = input.value.slice(0, input.value.length - 1)
    return
  }

  // добавяем пробел после 4 цифр подряд
  if (regExp.test(value.slice(-4)) && value.length < 19) {
    input.value += " "
  }
})


// Modal window

const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
// const span = document.getElementsByClassName("close")[0];

btn.onmouseover = function () {
  modal.style.display = "block";
};

btn.onmouseout = function () {
  modal.style.display = "none";
};



// span.onclick = function () {
//   modal.style.display = "none";
// };

// window.onmousedown = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
