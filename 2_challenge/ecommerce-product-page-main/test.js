var capitals = function (word) {
	// Write your code here
  var arr  = []
  var arr2 = []
   
  for(var i = 0 ; i<=word.length-1; i++){
      
    //   console.log(word[i])
      var tes = word[i].toString()
      arr.push(tes)

  }

  for(var j = 0 ; j<arr.length; j++){
     if(arr[j] == arr[j].toUpperCase()){
        arr2.push(j)
     }
  }
 console.log(arr2)
  
  
};

capitals("CodEWaRs")