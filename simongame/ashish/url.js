const fl = require('figlet');

fl("Maurya", (error, data) => {  
  if (error) {
    console.log("there is error");
  } else {
    console.log(data);
  }
});