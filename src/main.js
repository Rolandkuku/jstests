import expect from "expect";
import TestUser from "./tests/model/user.spec";

// const user1 = new User({
//     email: "roland@kuku.com",
//     firstName: "toto",
//     lastName: "tata",
//     age: 18
// });
//
// console.log(user);
// console.log("Is Email Valid : " + user1.isEmailValid());
// console.log("Names exist : " + user1.namesExist());
// console.log("Is old enough : " + user1.isOldEnough());
// console.log("IS VALID : " + user1.isValid());

const testUser = new TestUser();
testUser.testAll();
