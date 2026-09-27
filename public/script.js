const loadStudents=document.getElementById("loadStudents");
const studentList=document.getElementById("studentList");

const form=document.getElementById("studentsForm");
const nameIn=document.getElementById("name");
const courseIn=document.getElementById("course");
const ageIn=document.getElementById("age");

loadStudents.addEventListener("click",async()=>{
  const response=await fetch("/api/students");
  const students=await response.json();

  studentList.innerHTML="";

  students.forEach((student)=>{

    studentList.innerHTML+=`
      <div class="student-card">
        <h3>${student.name}</h3>
        <p>Course:${student.course}</p>
        <p>Age:${student.age}</p>
      </div>
    `;
    
  })

})

form.addEventListener("submit",async (e)=>{
  
  e.preventDefault();

  const data={
    id:Date.now(),
    name:nameIn.value,
    course:courseIn.value,
    age:Number(ageIn.value)
  };

  const response=await fetch("/api/students",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
  })

  const result=await response.json();
  
  if(result.success){
    form.reset();
    loadStudents.click();
  }

})