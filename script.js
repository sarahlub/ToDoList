const wrapper = document.querySelector(".wrapper");
const backBtn = document.querySelector(".back-btn");
const menuBtn = document.querySelector(".menu-btn");

const toggleScreen = () => {
    wrapper.classList.toggle("show-category");
};

menuBtn.addEventListener("click", toggleScreen);
backBtn.addEventListener("click", toggleScreen);

const addTaskBtn = document.querySelector(".add-task-btn");
const addTaskForm = document.querySelector(".add-task");
const blackBackdrop = document.querySelector(".black-backdrop");

const toggleAddTaskForm = () => {
    addTaskForm.classList.toggle("active");
    blackBackdrop.classList.toggle("active");
    addTaskBtn.classList.toggle("active");
};

addTaskBtn.addEventListener("click", toggleAddTaskForm);
blackBackdrop.addEventListener("click", toggleAddTaskForm);

// Adding categories and tasks with JavaScript

let categories = [
    {
    title: "Personal",
    img: "personal.png",
    },
    {
    title: "Work",
    img: "work.png",
    },
    {
    title: "Shopping",
    img: "shopping.png",
    },
    {
    title: "Coding",
    img: "coding.png",
    },
    {
    title: "Health",
    img: "health.png",
    },
    {
    title: "Fitness",
    img: "fitness.png",
    },
    {
    title: "Education",
    img: "education.png",
    },
    {
    title: "Finance",
    img: "money.png",
    },
];

let tasks = [
    {
    id: 1,
    task: "Get some groceries",
    category: "Shopping",
    completed: false,
    },
    {
    id: 2,
    task: "Read a chapter of a book",
    category: "Personal",
    completed: false,
    },
    {
    id: 3,
    task: "Prepare presentation for meeting",
    category: "Work",
    completed: false,
    },
    {
    id: 4,
    task: "Complete coding challenge",
    category: "Coding",
    completed: false,
    },
    {
    id: 5,
    task: "Take a 30-minute walk",
    category: "Health",
    completed: false,
    },
    {
    id: 6,
    task: "Do a 20-minute HIIT workout",
    category: "Fitness",
    completed: false,
    },
    {
    id: 7,
    task: "Watch an educational video online",
    category: "Education",
    completed: false,
    },
    {
    id: 8,
    task: "Review monthly budget",
    category: "Finance",
    completed: false,
    },
    {
    id: 9,
    task: "Buy groceries for the week",
    category: "Shopping",
    completed: false,
    },
    {
    id: 10,
    task: "Write in a journal",
    category: "Personal",
    completed: false,
    },
    {
    id: 11,
    task: "Send follow-up emails",
    category: "Work",
    completed: false,
    },
    {
    id: 12,
    task: "Work on a coding side project",
    category: "Coding",
    completed: false,
    },
    {
    id: 13,
    task: "Try a new healthy recipe",
    category: "Health",
    completed: false,
    },
    {
    id: 14,
    task: "Attend a yoga class",
    category: "Fitness",
    completed: false,
    },
    {
    id: 15,
    task: "Read an article about a new topic",
    category: "Education",
    completed: false,
    },
    {
    id: 16,
    task: "Set up automatic bill payments",
    category: "Finance",
    completed: false,
    },
    // Additional tasks for each category
    {
    id: 17,
    task: "Buy new clothes",
    category: "Shopping",
    completed: false,
    },
    {
    id: 18,
    task: "Meditate for 10 minutes",
    category: "Personal",
    completed: false,
    },
    {
    id: 19,
    task: "Prepare agenda for team meeting",
    category: "Work",
    completed: false,
    },
    {
    id: 20,
    task: "Debug a software issue",
    category: "Coding",
    completed: false,
    },
    {
    id: 21,
    task: "Try a new recipe for lunch",
    category: "Health",
    completed: false,
    },
    {
    id: 22,
    task: "Go for a run",
    category: "Fitness",
    completed: false,
    },
    {
    id: 23,
    task: "Learn a new language online",
    category: "Education",
    completed: false,
    },
    {
    id: 24,
    task: "Read about history",
    category: "Education",
    completed: false,
    },
    {
    id: 25,
    task: "Review investment portfolio",
    category: "Finance",
    completed: false,
    },
    // Add more tasks for each category as desired
];

let selectedCategory = categories[0]; // Initialize with the first category

const categoriesContainer = document.querySelector(".categories");
const categoryTitle = document.querySelector(".category-title");
const totalCategoryTasks = document.querySelector(".category-tasks");
const categoryImg = document.querySelector("#category-img");
const totalTasks = document.querySelector(".totalTasks");

const calculateTotal = () => {
    const categoryTasks = tasks.filter(
        (task) =>
            task.category.toLowerCase() === selectedCategory.title.toLowerCase()
    );
    totalCategoryTasks.innerHTML = `${categoryTasks.length} Tasks`;
    totalTasks.innerHTML = tasks.length;
};

calculateTotal();

const renderCategories = () => {
    categoriesContainer.innerHTML = "";
    categories.forEach((category) => {
        // Get all the tasks of the current category
        const categoryTasks = tasks.filter(
            (task) => task.category.toLowerCase() === category.title.toLowerCase()
        );

        // Creating a div to render the category
        const div = document.createElement("div");
        div.classList.add("category");
        div.addEventListener("click", () => {
            wrapper.classList.add("show-category");
            selectedCategory = category;
            categoryTitle.innerHTML = category.title;
            categoryImg.src = `images/${category.img}`;
            calculateTotal();
        });
        div.innerHTML = `
            <div class="left">
                <img src="images/${category.img}" alt="${category.title}" />
                <div class="content">
                    <h1>${category.title}</h1>
                    <p>${categoryTasks.length} Tasks</p>
                </div>
            </div>
            <div class="options">
                <div class="toggle-btn">
                    <img width="48" height="48" src="https://img.icons8.com/fluency/48/toggle-on--v1.png" alt="toggle-on--v1"/>
                </div>
            </div>
        `;

        categoriesContainer.appendChild(div);
    });
};

renderCategories();

const tasksContainer = document.querySelector(".tasks");

const renderTasks = () => {
    tasksContainer.innerHTML = "";
    if (selectedCategory) {
        const categoryTasks = tasks.filter(
            (task) => task.category.toLowerCase() === selectedCategory.title.toLowerCase()
        );

        if (categoryTasks.length === 0) {
            const noTaskMessage = document.createElement("p");
            noTaskMessage.classList.add("no-task");
            noTaskMessage.textContent = "No tasks for this category";
            tasksContainer.appendChild(noTaskMessage);
        } else {
            categoryTasks.forEach((task) => {
                const div = document.createElement("div");
                div.classList.add("task-wrapper");

                // Checkbox and label
                const label = document.createElement("label");
                label.classList.add("task");
                label.setAttribute = ("for", task.id);
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.id = `task-${task.id}`;
                checkbox.checked = task.completed;

                // Adding completion functionality
                checkbox.addEventListener("change", () => {
                    const index = tasks.findIndex((t) => t.id === task.id);
                    tasks[index].completed = !tasks[index].completed;
                    saveLocal();
                });

                     // Checkmark icon
                const checkmark = document.createElement("span");
                checkmark.classList.add("checkmark");
                checkmark.innerHTML = `
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                        />
                    </svg>
                `;

                label.appendChild(checkbox);
                label.appendChild(checkmark);
                div.appendChild(label);

                // Task text
                const taskText = document.createElement("span");
                taskText.textContent = task.task;
                div.appendChild(taskText);

                // Edit button
                const editBtn = document.createElement("div");
                editBtn.classList.add("edit");
                editBtn.innerHTML = `
                    <img width="32" height="32" src="https://img.icons8.com/dusk/64/edit--v1.png" alt="edit--v1"/>
                `;

                editBtn.addEventListener("click", () => {
                    const updatedTask = prompt("Edit task:", task.task);
                    if (updatedTask !== null) {
                        const index = tasks.findIndex((t) => t.id === task.id);
                        tasks[index].task = updatedTask;
                        saveLocal();
                        renderTasks();
                    }
                });

                div.appendChild(editBtn);

                // Delete functionality
                const deleteBtn = document.createElement("div");
                deleteBtn.classList.add("delete");
                deleteBtn.innerHTML = `
                    <img width="25" height="25" src="https://img.icons8.com/keek/100/experimental-trash-keek.png" alt="experimental-trash-keek"/>
                `;

                deleteBtn.addEventListener("click", () => {
                    const index = tasks.findIndex((t) => t.id === task.id);
                    tasks.splice(index, 1);
                    saveLocal();
                    renderTasks();
                });

                div.appendChild(deleteBtn);

                tasksContainer.appendChild(div);
            });
        }
    }
};


// Save and get tasks from local storage
const saveLocal = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

const getLocal = () => {
    const localTasks = JSON.parse(localStorage.getItem("tasks"));
    
    if (localTasks) {
        tasks = localTasks;
    }
};

// adding new tasks function
const categorySelect = document.querySelector("#category-select")
const cancelBtn = document.querySelector(".cancel-btn");
const addBtn = document.querySelector(".add-btn");

const taskInput = document.querySelector("#task-input");

cancelBtn.addEventListener("click", toggleAddTaskForm);

addBtn.addEventListener("click", () => {
    const task = taskInput.value;
    const category = categorySelect.value;

    if (task === "") {
        alert("Please enter a task.");
    } else {
        const newTask = {
            id: tasks.length + 1,
            task,
            category,
            completed: false,
        };
        tasks.push(newTask);
        taskInput.value = "";
        saveLocal();
        toggleAddTaskForm();
        renderTasks();
    }
});


categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.title.toLowerCase();
    option.textContent = category.title;
    categorySelect.appendChild(option);
});

// stored tasks
calculateTotal();
renderTasks();
getLocal();

