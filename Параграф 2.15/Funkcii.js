//Задание 1:

//И тот и дургой вариант будут работать идентично.


//Задание 2:

/*
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
  }

  function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  } */



//Задание 3:
/*
function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

  function min(a, b) {
    return a < b ? a : b;
  } */


  //Задание 4:

  function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Степень ${n} не поддерживается`);
  } else {
    alert( pow(x, n) );
  }