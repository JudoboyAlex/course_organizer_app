const courseInput = document.querySelector(".course-input")
const form = document.querySelector('form')
const courseList = document.querySelector(".course-list");


form.addEventListener("submit", addCourse);

function addCourse(e){
    e.preventDefault();
    console.log(courseInput.value)

    const courseDiv = document.createElement("div");
    courseDiv.classList.add("course");
    //Create list
    const newCourse = document.createElement("li");
    newCourse.innerText = courseInput.value;
    //Save to local - do this last
    //Save to local
    saveLocalCourses(courseInput.value);
    newCourse.classList.add("course-item");
    courseDiv.appendChild(newCourse);
    courseInput.value = ""; 
    // Create Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    courseDiv.appendChild(completedButton);
    //Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    courseDiv.appendChild(trashButton);
    //attach final Todo
    courseList.appendChild(courseDiv);
}

function saveLocalCourses(course) {
    let courses;
    if (localStorage.getItem("courses") === null) {
      courses = [];
    } else {
      courses = JSON.parse(localStorage.getItem("courses"));
    }
    courses.push(course);
    localStorage.setItem("courses", JSON.stringify(courses));
  }