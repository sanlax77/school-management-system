// ===== State =====
let mystud = [];

// ===== Load student data (cached, so the JSON is fetched only once) =====
async function getJdata() {
    if (mystud.length > 0) return mystud;

    const response = await fetch('data/Student.json');
    if (!response.ok) {
        throw new Error('Could not load Student.json (status ' + response.status + ')');
    }
    const json = await response.json();
    mystud = json.Student;
    return mystud;
}

// ===== Login =====
async function Login() {
    try {
        await getJdata();   // wait until data is loaded
        callLogin();
    } catch (error) {
        console.error(error);
        document.getElementById("loginError").style.display = "block";
    }
}

function callLogin() {
    const uid = document.getElementById("u1").value.trim();
    const pass = document.getElementById("pass").value;

    const student = mystud.find(s => s.username === uid && s.password === pass);

    if (student) {
        sessionStorage.setItem('StudId', student.id);
        sessionStorage.setItem('username', student.username);
        window.location.href = "welcome.html";
    } else {
        document.getElementById("loginError").style.display = "block";
    }
}

function hideLoginError() {
    document.getElementById("loginError").style.display = "none";
}

// ===== Exam results =====
async function displayMarks() {
    try {
        await getJdata();
        callDisplayMarks();
    } catch (error) {
        console.error(error);
    }
}

function callDisplayMarks() {
    const subject = document.getElementById("subject").value;
    const marks = document.getElementById("marks");
    const grade = document.getElementById("grade");

    marks.value = "";
    grade.value = "";

    const student = mystud.find(s => String(s.id) === sessionStorage.getItem("StudId"));

    // The subject name in the dropdown must match the key in the JSON file
    if (student && student[subject]) {
        marks.value = student[subject].marks;
        grade.value = student[subject].grade;
    }
}

// ===== Extra-curricular activities =====
const ACTIVITY_PREFIX = "Activity: ";

function addActivity() {
    const nameInput = document.getElementById("activityName");
    const detailsInput = document.getElementById("activityDetails");
    const name = nameInput.value.trim();
    const details = detailsInput.value.trim();

    if (!name) {
        alert("Please enter an activity name.");
        return;
    }

    sessionStorage.setItem(ACTIVITY_PREFIX + name, details);
    alert("Activity Submitted");

    // Clear the form for the next entry
    nameInput.value = "";
    detailsInput.value = "";
}

function listActivity() {
    const activityList = document.getElementById("activityList");
    const listSection = document.getElementById("list");

    activityList.innerHTML = "";   // clear first so items don't repeat

    const keys = [];
    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (key.startsWith(ACTIVITY_PREFIX)) keys.push(key);
    }

    if (keys.length === 0) {
        listSection.style.display = "none";
        return;
    }

    listSection.style.display = "block";

    keys.forEach(key => {
        const dt = document.createElement("dt");
        dt.textContent = key;                       // textContent is safe from injected HTML
        activityList.appendChild(dt);

        const dd = document.createElement("dd");
        dd.textContent = sessionStorage.getItem(key);
        activityList.appendChild(dd);
    });
}

// ===== Profile page =====
// JSON key -> HTML element id
const PROFILE_FIELDS = {
    id: "Sid",
    username: "Pname",
    dob: "sdob",
    email: "semail",
    Fname: "fname",
    Mname: "Motname",
    Femail: "femail",
    Memail: "memail",
    FMno: "fno",
    Mtno: "mno",
    // Optional fields: only shown if they exist in Student.json
    address: "saddress",
    bloodGroup: "sblood",
    division: "sdivision"
};

async function profileData() {
    try {
        await getJdata();

        const student = mystud.find(s => String(s.id) === sessionStorage.getItem("StudId"));
        if (!student) return;

        for (const [jsonKey, elementId] of Object.entries(PROFILE_FIELDS)) {
            const element = document.getElementById(elementId);
            if (element && student[jsonKey] !== undefined) {
                element.textContent = student[jsonKey];
            }
        }
    } catch (error) {
        console.error(error);
    }
}
