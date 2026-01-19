export const coursesData = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Learn HTML, CSS, and JavaScript from scratch",
    duration: "8 weeks",
    lessons: 24,
    instructor: "John Doe",
    enrolled: 1234,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
    lessonsList: [
      {
        id: 1,
        title: "Introduction to HTML",
        duration: "45 min",
        completed: false,
        content:
          "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page semantically and originally included cues for the appearance of the document. HTML elements are the building blocks of HTML pages.",
        slides: [
          "/lessons/lesson2/slide1.png",
          "/lessons/lesson2/slide2.jpeg",
          "/lessons/lesson2/slide3.png"
        ]
      },
      {
        id: 2,
        title: "HTML Tags and Elements",
        duration: "60 min",
        completed: false,
        content:
          "HTML tags are used to mark up the start and end of an HTML element. Elements can contain text, data, or nothing at all. Most elements have opening and closing tags with content in between.",
        slides: [
          "/slides/htmltags1.png",
          "/slides/htmltags2.png"
        ]
      },
      {
        id: 3,
        title: "HTML Forms and Input",
        duration: "50 min",
        completed: false,
        content:
          "HTML forms are used to collect user input. The form element can contain various input elements like text fields, checkboxes, radio buttons, submit buttons, and more.",
        slides: [
          "/slides/forms1.png",
          "/slides/forms2.png"
        ]
      },
      {
        id: 4,
        title: "CSS Basics",
        duration: "55 min",
        completed: false,
        content:
          "CSS (Cascading Style Sheets) is used to style and layout web pages. It describes how HTML elements should be displayed on screen, paper, or in other media."
      },
      {
        id: 5,
        title: "CSS Flexbox Layout",
        duration: "70 min",
        completed: false,
        content:
          "Flexbox is a one-dimensional layout method for arranging items in rows or columns. Items flex (expand) to fill additional space or shrink to fit into smaller spaces."
      },
      {
        id: 6,
        title: "CSS Grid System",
        duration: "65 min",
        completed: false,
        content:
          "CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay content out in rows and columns."
      },
      {
        id: 7,
        title: "JavaScript Fundamentals",
        duration: "80 min",
        completed: false,
        content:
          "JavaScript is a programming language that adds interactivity to your website. It can update and change both HTML and CSS, calculate, manipulate and validate data."
      },
      {
        id: 8,
        title: "DOM Manipulation",
        duration: "75 min",
        completed: false,
        content:
          "The Document Object Model (DOM) represents the page so that programs can change the document structure, style, and content."
      }
    ],

    tests: [
      {
        id: 1,
        title: "HTML Basics Quiz",
        duration: "15 min",
        questions: [
          {
            id: 1,
            question: "What does HTML stand for?",
            options: [
              "Hyper Text Markup Language",
              "High Tech Modern Language",
              "Home Tool Markup Language",
              "Hyperlinks and Text Markup Language"
            ],
            correct: 0
          },
          {
            id: 2,
            question: "Which HTML tag is used for the largest heading?",
            options: ["heading", "h6", "h1", "head"],
            correct: 2
          },
          {
            id: 3,
            question: "What is the correct HTML element for inserting a line break?",
            options: ["break", "lb", "br", "linebreak"],
            correct: 2
          }
        ]
      },
      {
        id: 2,
        title: "CSS Styling Assessment",
        duration: "20 min",
        questions: [
          {
            id: 1,
            question: "Which property is used to change the background color?",
            options: ["bgcolor", "color", "background-color", "bg-color"],
            correct: 2
          },
          {
            id: 2,
            question: "How do you select an element with id header?",
            options: [".header", "#header", "*header", "header"],
            correct: 1
          }
        ]
      }
    ]
  },

  {
    id: 2,
    title: "Python Programming",
    description: "Master Python programming from basics to advanced",
    duration: "10 weeks",
    lessons: 32,
    instructor: "Jane Smith",
    enrolled: 2156,
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
    lessonsList: [
      {
        id: 1,
        title: "Python Introduction",
        duration: "40 min",
        completed: false,
        content:
          "Python is a high-level, interpreted programming language known for its clear syntax and readability.",
        slides: [
          "/slides/python_intro1.png",
          "/slides/python_intro2.png"
        ]
      },
      {
        id: 2,
        title: "Variables and Data Types",
        duration: "50 min",
        completed: false,
        content:
          "Python has several built-in data types including integers, floats, strings, booleans, lists, tuples, sets, and dictionaries."
      },
      {
        id: 3,
        title: "Control Flow",
        duration: "60 min",
        completed: false,
        content:
          "Control flow in Python includes conditional statements (if, elif, else) and loops (for, while)."
      },
      {
        id: 4,
        title: "Functions and Modules",
        duration: "70 min",
        completed: false,
        content:
          "Functions are reusable blocks of code that perform specific tasks. Modules are files containing Python code that can be imported and used in other programs."
      }
    ],
    tests: [
      {
        id: 1,
        title: "Python Basics Quiz",
        duration: "15 min",
        questions: [
          {
            id: 1,
            question: "Which of the following is a Python data type?",
            options: ["int", "float", "str", "All of the above"],
            correct: 3
          },
          {
            id: 2,
            question: "What is the output of print(2 ** 3)?",
            options: ["6", "8", "9", "5"],
            correct: 1
          }
        ]
      }
    ]
  },

  {
    id: 3,
    title: "Data Science Essentials",
    description: "Introduction to data analysis and machine learning",
    duration: "12 weeks",
    lessons: 40,
    instructor: "Mike Johnson",
    enrolled: 987,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    lessonsList: [
      {
        id: 1,
        title: "Introduction to Data Science",
        duration: "45 min",
        completed: false,
        content:
          "Data Science is an interdisciplinary field that uses scientific methods, algorithms and systems to extract knowledge and insights from data.",
        slides: [
          "/slides/ds_intro1.png",
          "/slides/ds_intro2.png"
        ]
      },
      {
        id: 2,
        title: "NumPy Fundamentals",
        duration: "60 min",
        completed: false,
        content:
          "NumPy is the fundamental package for scientific computing in Python. It provides support for large, multi-dimensional arrays and matrices."
      },
      {
        id: 3,
        title: "Pandas for Data Analysis",
        duration: "75 min",
        completed: false,
        content:
          "Pandas is a powerful data manipulation and analysis library for Python. It provides data structures like DataFrame and Series that make it easy to work with structured data."
      }
    ],
    tests: [
      {
        id: 1,
        title: "Statistics Fundamentals",
        duration: "25 min",
        questions: [
          {
            id: 1,
            question: "What is the mean of [2, 4, 6, 8, 10]?",
            options: ["5", "6", "7", "8"],
            correct: 1
          }
        ]
      }
    ]
  }
];
