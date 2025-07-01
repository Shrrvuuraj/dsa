// Create an array with 5 students' names. After that, create a function which takes 2 parameters (allStudents & studentName).
// Iterate over all students and find that specific user studentName.

const array = ["shrrvvuu", "shravan", "tanishq", "Anurag", "Raghav"]; // data strcuture 

function selectStudent(array, selectedStudent) {
  // const foundIt = array.find((student) => student === selectedStudent);


  // algorithum that we use 
  for (let i=0;i<array.length;i++){
    if(array[i]=== selectedStudent){
      console.log(`${selectedStudent} is in the database`)
      break
      
    }
    
  }


}

selectStudent(array,"tanishq")