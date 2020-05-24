const courseCategoryInput = document.querySelector(".course-category-input")
const courseCategoryForm = document.querySelector(".course-category-form")
const courseCategoryList = document.querySelector(".course-category-list");
const courseForm = document.querySelector(".course-form")
const courseInput = document.querySelector(".course-input")
const courseCategory = document.querySelector(".course-category")

courseCategoryForm.addEventListener("submit", addCourseCategory);
courseForm.addEventListener("submit", addCourse);

function addCourseCategory(e){
    e.preventDefault();
    console.log(courseCategoryInput.value)

    const courseCategoryDiv = document.createElement("div");
    courseCategoryDiv.classList.add("course-category");
    const newCourseCategory = document.createElement("li");
    newCourseCategory.innerText = courseCategoryInput.value;
    //Save to local
    saveLocalCourses(courseCategoryInput.value);
    newCourseCategory.classList.add("course-category-item");
    courseCategoryDiv.appendChild(newCourseCategory);
    courseCategoryInput.value = ""; 
    // Create Button
    // const completedButton = document.createElement("button");
    // completedButton.innerHTML = `<i class="fas fa-plus"></i>`;
    // completedButton.classList.add("complete-btn");
    // courseCategoryDiv.appendChild(completedButton);
    //Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    courseCategoryDiv.appendChild(trashButton);
    //Create Form
    courseCategoryList.appendChild(courseCategoryDiv);
    const addCourseForm = document.createElement("form");
    addCourseForm.classList.add("course-form");
    addCourseForm.innerHTML = `                        
        <input type="text" class="course-input" />
        <button class="course-button" type="submit">
        <i class="fas fa-plus-square"></i>
        </button>
    `;
    courseCategoryDiv.appendChild(addCourseForm);
}

function addCourse(e){
    e.preventDefault();
    console.log(event.currentTarget)
    console.log(courseInput.value)
    const courseDiv = document.createElement("div");
    const courseList = document.createElement("li");
    courseList.innerText = courseInput.value
    courseDiv.appendChild(courseList);
    courseCategory.appendChild(courseDiv);
    courseInput.value = "";
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