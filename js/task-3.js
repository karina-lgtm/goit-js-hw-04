
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