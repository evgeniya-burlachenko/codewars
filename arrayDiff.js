/*Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]*/
-------------------------------------------------------------
  function arrayDiff(a, b) {

    let arr = [] ; //обьявляем массив
    
    for(var i = 0;i<a.length;i++){ //перебираем пока не закончится массив a
        if(b.indexOf(a[i]) == -1){//Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.
          //Поэтому, сравниваем элементы массива b с элементами массива a, и  когда элемент массива b  == -1 ( т.е. не найден)
            arr.push(a[i]); //добавлять этот ненайденный элемент в масcив  arr
        }
    }
    return arr;
}
-------------------------------------------------------------
 function arrayDiff(a, b) {
  return a.filter(function(e) { //Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
    return b.indexOf(e) == -1; 
  });
}
-------------------//or---------------------------------------
 function arrayDiff(a, b) {
  return a.filter((e) => b.indexOf(e) == -1);
}
--------------------------------------------------------------------------------------------------------------

function arrayDiff(a, b) {
return a.filter(val => !b.includes(val)); //Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
}

