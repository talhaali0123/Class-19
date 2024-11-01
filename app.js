// var studentObj = {
    
//     stdName:'Talha',
//     stdAge:25,
//     stdRollNo:9489,
//     education: {
//         program: "CS",
//         bATCH: 2024,
//         Rollno: 123,
//         CGPA: 3.5,
//     },
//     stdAddress:{
//         country:'Pakistan',
//         city:'Karachi',
//         longitude:415.5151,
//         latitude:15.45,
//         zipCode: 12345
//     },
//     stdEmail:"faraz@gmail.com",

// }

// console.log(studentObj["stdRollNo"]);

// for(var outerKeys in studentObj){
//     for(var innerKeys in studentObj[outerKeys]){
//         for(var innerInnerKeys in studentObj[outerKeys][innerKeys]){
//             console.log(studentObj[outerKeys][innerKeys][innerInnerKeys]);
            
//         }
//     }
// }


 // Array of Object

// var students = [

// {
//     Student: 1,
//     program: "CS",
//     bATCH: 2024,
//     Rollno: 123,
//     CGPA: 3.5, 
// },
//  {
//     Student: 2,
//     program: "CS",
//     bATCH: 2024,
//     Rollno: 123,
//     CGPA: 3.5, 
//  },
//  {
//     Student: 3,
//     program: "CS",
//     bATCH: 2024,
//     Rollno: 123,
//     CGPA: 3.5, 
//  }
// ]

// for (var i=0; i < students.length; i++ ){
//     for(var key in students[i]){
//         console.log(key,students[i][key]);
        
//     }
// }

// Try and Catch
function greet() {
    try {
        alert("Hello World");
    } catch (error) {
        console.log(error);
        
    }
}

greet();


