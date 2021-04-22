var myArray = [[1,2], [3,4]];



function myFunction(arr){;
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      console.log(myArray[i][j]);
    }
  }
}


var newArray = [ [ ["malice",2] , ["horse" , 4 ] , [ [5 , "tree"] , [ 7 ,8] ] , [ "cardinal",10 ] ] ];



function testGreaterThan(val, arg) {
    if (val) {val > arg;
      return val;
    }
  return arg;
  }
  
  testGreaterThan(10,7);

  function equalTo(val, arg) {
    if (val) {val == arg;
      return true;
    }
  return false;
  }
  
  equalTo(10,7);

  equalTo(9,9);
