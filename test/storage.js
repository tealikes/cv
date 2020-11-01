


function ready(){
  let p = document.createElement('p');
  p.innerHTML = 'я в восьмом ряду мой моэстро!'
  const test = document.querySelector(".test")
  test.insertAdjacentElement('beforeend', p)

}

document.addEventListener("DOMContentLoaded", ready)