


function filterArray(numbers, value) {
    
    const result = [];
  
  
    for (let i = 0; i < numbers.length; i++) {
     
      if (numbers[i] > value) {
        result.push(numbers[i]); 
      }
    }
  
   
    return result;
  }
  
  // Перевірка роботи функції
  console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
  console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
  console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
  console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
  console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]


  const profile = {
    username: "Jacob",
    playTime: 300,
  
    // Зміна імені користувача
    changeUsername(newName) {
      this.username = newName;
    },
  
    // Метод для оновлення часу гри
    updatePlayTime(hours) {
      this.playTime += hours;
    },
  
    //Отримання інформації про профіль
    getInfo() {
      return `${this.username} has ${this.playTime} active hours!`;
    },
  };
  
  // Перевірка функції
  console.log(profile.getInfo()); // "Jacob has 300 active hours!"
  
  profile.changeUsername("Marco");
  console.log(profile.getInfo()); // "Marco has 300 active hours!"
  
  profile.updatePlayTime(20);
  console.log(profile.getInfo()); // "Marco has 320 active hours!"