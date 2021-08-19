const cipher = {
  encode: function (shift, text) { 
    let arrText = [];
    let miniResult = [];

    for (let i = 0; i < text.length; i++) {

      arrText.push(text.charCodeAt(i)); //formed array from text.lenght

      if (arrText[i] >= 65 && arrText[i] <= 90) {             //uppercase
        miniResult.push((arrText[i] - 65 + parseInt(shift)) % 26 + 65)
      } else if (arrText[i] >= 97 && arrText[i] <= 122) {     //lowercase
        miniResult.push((arrText[i] - 97 + parseInt(shift)) % 26 + 97)
      } else if(arrText[i] >= 32 && arrText[i] <= 64) {       //some special characters
        miniResult.push(arrText[i])
      } else {
          throw TypeError(alert("You're using invalid characters (:"))
      }

      arrText[i]=String.fromCharCode(miniResult[i]); //string formed from the result in position of the declared variable 'i'

    }

    if  (typeof text != "string") {
     throw TypeError("uncovered caracters");
    }

    return arrText.join('')

  }


  ,decode: function (shift, text) {
    let arrText = [];
    let miniResult = [];
    
    for (let i=0; i < text.length; i++) {

      arrText.push(text.charCodeAt(i));

      if (arrText[i] >= 65 && arrText[i] <= 90) {
      miniResult.push((arrText[i] + 65 - parseInt(shift)) % 26 + 65)
      } else if (arrText[i] >= 97 && arrText[i] <= 122) {
      miniResult.push(((arrText[i] - 12) + 97 - parseInt(shift)) % 26 + 97)
      } else if(arrText[i] >= 32 && arrText[i] <= 64) {
      miniResult.push(arrText[i])
      } else {
          throw TypeError(alert("You're using invalid characters (:"))
      }
    
      arrText[i]=String.fromCharCode(miniResult[i]);
    }
    
    if (typeof text != "string") {
      throw TypeError("invalid character");

    }
    
    return arrText.join('')
    
} 
};

export default cipher;
