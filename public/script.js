const loadStudents=document.getElementById("loadStudents");
const studentList=document.getElementById("studentList");

loadStudents.addEventListener("click",async()=>{
  const response=await fetch("/api/students");
  const students=await response.json();

  studentList.innerHTML="";

  students.forEach((student)=>{

    studentList.innerHTML+=`
      <div id="student-card>
        <h3>${student.name}</h3>
        <p>Course:${student.course}</p>
        <p>Age:${student.age}</p>
      </div>
    `;
    
  })

})