const loadStudents=document.getElementById("loadStudents");
const studentList=document.getElementById("studentList");

const form=document.getElementById("studentsForm");
const nameIn=document.getElementById("name");
const courseIn=document.getElementById("course");
const ageIn=document.getElementById("age");

const studentCount=document.getElementById("studentCount");
let i=0;

loadStudents.addEventListener("click",async()=>{
  const response=await fetch("/api/students");
  const students=await response.json();

  studentList.innerHTML="";
  
  i=0;
  students.forEach((student)=>{
    i++;
    studentList.innerHTML+=`
      <div class="student-card">
        <h3>${student.name}</h3>
        <p>Course:${student.course}</p>
        <p>Age:${student.age}</p>

        <button class="delete-btn" onClick="deleteStudent(${student.id})">
          Delete
        </button>
      </div>
    `;
    
  })

  studentCount.innerHTML=i;

})



form.addEventListener("submit",async (e)=>{
  
  e.preventDefault();

  if(nameIn.value.trim()==="" ||
    courseIn.value.trim()==="" ||
    ageIn.value.trim()===""
  ){
    alert("Fill the details in the form");
    return;
  }

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
  i++;
  studentCount.innerText=i;
  
  if(result.success){
    form.reset();
    loadStudents.click();
  }

})



async function deleteStudent(id){

  const response=await fetch(`/api/students/${id}`,{
    method:"DELETE"
  })

  const student=await response.json();

  i--;
  studentCount.innerText=i;

  if(response.success){
    loadStudents.click();
  }

}