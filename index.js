const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log("Connection successful");
}

main().catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model("User", userSchema);

User.findByIdAndDelete("67b5ebb999b6c4ebed831ab1").then((res) => {
  console.log(res);
});


/*
User.updateMany({age: {$gt: 48}},{age:55})
  .then((res)=>{
    console.log(res);
  })
.catch((err)=>{
  console.log(err);
})


User.findOne({_id:"67b5eb136a107dbf62257336"})
.then((res) =>{
  console.log(res);
})
.catch((err) => {console.log(err);
});


User.insertMany([
  {name:"Tony",email:"tony@gmail.com",age:45},
  {name:"Tomy",email:"tomy@gmail.com",age:55},
  {name:"Harry",email:"harry@gmail.com",age:65},
  {name:"Shown",email:"shown@gmail.com",age:75},
  {name:"Stark",email:"stark@gmail.com",age:85}
]).then((res) => {
  console.log(res);
});

//const Employee = mongoose.model("Employee", userSchema);

const user1 = new User({
  name:"sam",
  email:"ssmishra@9026gmail.com",
  age:48,
});

const user2 = new User({
  name:"Ravi",
  email:"ravi@9026gmail.com",
  age:45,
});

/*user1.save().then((res) => {
  console.log(res);
}).catch ((err) =>{
  console.log(err);
});


user2.save().then((res) => {
  console.log(res);
}).catch ((err) =>{
  console.log(err);
});
*/