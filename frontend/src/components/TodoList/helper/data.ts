import { Todo } from "../../TodoCard/TodoCard";

export const todos: Todo[] = [
    {
        id: "1",
        task: "Do laundry",
        priority: { title: "Urgent", color: "red" },
        tags: [
            { title: "Personal", color: "blue" },
            { title: "Home", color: "red" }
        ],
        deadline: "10/6/2023"
    },
    {
        id: "2",
        task: "Finish work project",
        priority: { title: "High", color: "orange" },
        tags: [
            { title: "Work", color: "blue" }
        ],
        deadline: "15/6/2023"
    },
    {
        id: "3",
        task: "Go for a run",
        priority: { title: "Low", color: "gray" },
        tags: [
            { title: "Health", color: "purple" }
        ],
        deadline: "20/6/2023"
    },
    {
        id: "4",
        task: "Read a book",
        priority: { title: "Medium", color: "blue" },
        tags: [
            { title: "Personal", color: "red" }
        ],
        deadline: "25/6/2023"
    },
    {
        id: "5",
        task: "Plan vacation",
        priority: { title: "High", color: "orange" },
        tags: [
            { title: "Personal", color: "blue" }
        ],
        deadline: "30/6/2023"
    }
];
