# School Management System

A responsive web application for **Spring Flowers Public School** that lets a student log in and view their profile, timetable, exam results and extra-curricular activities. Built with HTML5, CSS3, Bootstrap 5 and vanilla JavaScript, with student data loaded from a JSON file.

🔗 **Live Demo:** [https://sanlax77.github.io/school-management-system/]
> **Demo login:** username `student1` | password `Demo@123`

---

## Screenshots

<table align="center">
  <tr>
    <td align="center">
      <b>Login</b><br>
     <img src="/Login.png" alt="Login page" width="400">
    </td>
    <td align="center">
      <b>Home</b><br>
     <img src="/Home.png" alt="Home page" width="400">
    </td>
  </tr>
  <tr>
    <td align="center">
      <b>Exam Result</b><br>
      <img src="/ExamResult.png" alt="Exam result page" width="400">
    </td>
    <td align="center">
      <b>Profile</b><br>
      <img src="/StudentProfile.png" alt="Student profile page" width="400">
    </td>
  </tr>
</table>



## Features

- **Login:** validates username and password against student data and starts a session
- **Home page:** school introduction and a list of the student's extra-curricular activities
- **Student profile:** personal details and parent information, loaded dynamically for the logged-in student
- **Exam results:** choose a subject to see marks and grade
- **Time table:** weekly class schedule in a responsive table
- **Extra-curricular activities:** add an activity with details and see it listed on the home page
- **Responsive design:** works on mobile, tablet and desktop (Bootstrap grid and collapsible navbar)
- **Page protection:** pages redirect to the login screen if no one is logged in

---

## Tech Stack

| Area | Technology |
|------|------------|
| Structure | HTML5 |
| Styling | CSS3, Bootstrap 5.0.2 |
| Logic | JavaScript (ES6+): `fetch`, `async/await`, DOM manipulation, `sessionStorage` |
| Data | JSON file (`data/Student.json`) |
| Hosting | GitHub Pages |

---

## Project Structure

```
school-management-system/
├── index.html          # Login page
├── welcome.html        # Home page
├── Sprofile.html       # Student profile
├── ExamResult.html     # Exam results
├── TimeTable.html      # Time table
├── ExtraCurr.html      # Add extra-curricular activity
├── css/
│   └── Mystyle.css
├── js/
│   └── myScript.js
├── data/
│   └── Student.json    # Dummy student data
└── img/
```

---

## Run Locally

Because the app loads `data/Student.json` with `fetch()`, open it through a local server instead of double-clicking the HTML file.

## How It Works

1. `index.html` calls `Login()`, which fetches `Student.json` and checks the entered credentials.
2. On success, the student's id and username are saved in `sessionStorage` and the user is redirected to `welcome.html`.
3. Each page reads the stored id to show only that student's profile, marks and activities.
4. Extra-curricular activities are saved in `sessionStorage` and rendered on the home page.
-----

## Known Limitations

This is a front-end learning project, so some parts are simplified on purpose:

- **Authentication is client-side only.** Credentials sit in a JSON file that anyone can read, so this is for demonstration only. A real system needs server-side authentication.
- **Activities are stored in `sessionStorage`,** so they disappear when the browser tab is closed. A real system would save them in a database.
- **All data is dummy data.** No real student information is used.

---

## What I'd Improve Next

- Replace client-side login with a backend (Spring Boot with JWT authentication, as I implemented in my [e-commerce project]will upload soon
- Store students, marks and activities in a database (MySQL) behind REST APIs
- Add an admin/teacher role to enter marks and manage the time table
- Show a result summary (total, percentage, overall grade)
- Add form validation and better error messages

---

## Author

**Laxmi Satish**
MCA (2023) | Fullstack Developer (Java, Spring Boot, React, JavaScript)

- GitHub: [@YOUR-USERNAME](https://github.com/YOUR-USERNAME)
- LinkedIn: [Your LinkedIn URL](https://www.linkedin.com/in/YOUR-PROFILE)
