
//use of this
function user(username,loginCount,isLoggedin) {
   this. username=username;
   this. loginCount=loginCount;
   this.isLoggedin=isLoggedin

   return this;
}


//use of new

const user1= new user("Shubham",8,false)
const user2=  new user("Shubh",7,true)

console.log(user1);
console.log(user2);