class CustomClass extends Error {  
    constructor (message) {
      super(message);
      this.name = "CustomClass";
    }
  }
module.exports={CustomClass}

//   function test() {
//     throw new CustomClass("Error Found!");
//   }
  
//   try {
//     test();
//   } catch(err) {
//     console.error(err.message);
//     console.error(err.name); 
//     //console.error(err.stack);
//   }