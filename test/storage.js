


function ready(){
  let p = document.createElement('p');
  p.innerHTML = 'Хелло! Америка с другого берега!'
  const test = document.querySelector(".test")
  test.insertAdjacentElement('beforeend', p)

}

document.addEventListener("DOMContentLoaded", ready)
