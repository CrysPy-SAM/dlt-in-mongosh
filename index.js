const mongoose = require('mongoose');

//let url = "https://localhost:8080/users"

main()
.then(() => {console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  }