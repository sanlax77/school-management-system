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
    const name = document.getElementById("activityName").value.trim();
    const details = document.getElementById("activityDetails").value.trim();

    if (!name) {
        alert("Please enter an activity name.");
        return;
    }

    sessionStorage.setItem(ACTIVITY_PREFIX + name, details);
    alert("Activity Submitted");
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
    Mtno: "mno"
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

     }             
                                        
                                            
    }

    }
 }
}
}
        
    
   

//function to add extra activity
function addActivity()

{
    
    let activityName="Activity: " + document.getElementById("activityName").value;
    let acDetails=document.getElementById("activityDetails").value;
    console.log(activityName) 
    console.log(acDetails);
    sessionStorage.setItem(activityName,acDetails);
    
    alert("ActivitySubmitted");
    
    }
    

function listActivity()
{

   
    let activityList= document.getElementById("activityList");
   
   //hide the list if length is less than 4
    if  (sessionStorage.length < 4)

    {
           document.getElementById("list").style.display="none";
    } 
    else  
     {
        document.getElementById("list").style.display="block";

        for ( let i= 0;i<sessionStorage.length;i++)
        {
            console.log(i);
            
            let key=sessionStorage.key(i);
            console.log(key);
            //Spillting string to check if first word is "Activity:"
            let  temp=key.split(" ");
       
            if (temp[0] === "Activity:")
           {
                 
             

                let activityName=document.createElement("dt");
                activityName.innerHTML=key;
                activityList.appendChild(activityName);

                let activityDetails=document.createElement("dd");
                activityDetails.innerHTML=sessionStorage.getItem(key);
                activityList.appendChild(activityDetails);

             }


            }

    }

}

//function to display father and mother and student profile    
function profileData()

{
    console.log("inprofile");

   // getJdata();
    
    fetch('./data/Student.json')
    .then((response)  => response.json())
    .then((json) => {
       
        //console.log(json);
        mystud=JSON.parse(JSON.stringify(json));
        //console.log(mystud.Student[0]);
        mystud=JSON.parse(JSON.stringify(json)).Student; 
       
   
   
            const sid= document.getElementById("Sid");
            const dob= document.getElementById("sdob");
            const uname1= document.getElementById("Pname");
            const semail= document.getElementById("semail");
            const Fname= document.getElementById("fname");
            const Mname= document.getElementById("Motname");
            const Femail=document.getElementById("femail");
            const Memail= document.getElementById("memail");


    
    for(let i= 0;i<mystud.length;i++)
{
    
    if (mystud[i].id  == sessionStorage.getItem("StudId"))
            //sessionStorage.getItem(StudId))
            
 {
            for(const key in mystud[i])
            {
            
            if( mystud[i].hasOwnProperty (key)) 
{
             
    //dont check for subjects and marks
      if(key !=values[0] && key!=values[1] && key!=values[2]
        && key!=values[3]&& key!=values[4]&& key!=values[5] && key!=values[6]&& key!=values[7]&&
         key!=values[8]&& key!=values[9]  )
{
        
    switch(key)

        {
                

            case 'id':
                        //console.log("id"+ mystud[i][key]);
                        sid.innerHTML= mystud[i][key]; 
                        break;
            case 'username':
                        //console.log("username" +mystud[i][key]);
                        document.getElementById("Pname").innerHTML=sessionStorage.getItem("username");
                        document.getElementById("Pname").innerHTML=mystud[i][key];
                        uname1.innerHTML=mystud[i][key];
                        break;
            case 'dob':
                       // console.log("dob"+ mystud[i][key]);
                        document.getElementById("sdob").innerHTML=mystud[i][key];
                        dob.innerHTML=mystud[i][key];
                        break;
            case 'email':
                       // console.log("email"+ mystud[i][key]);
                        document.getElementById("semail").innerHTMl= mystud[i][key];
                        semail.innerHTML= mystud[i][key];
                        break;
            
            case 'Fname':
                       // console.log("fname"+ mystud[i][key]);
                        document.getElementById("fname").innerHTML=mystud[i][key];
                        Fname.innerHTML=mystud[i][key];
                        break;
            case 'Mname':
                       // console.log("Mname is" + mystud[i][key]);
                        document.getElementById("Motname").innerHTMl= mystud[i][key];
                        Mname.innerHTML=mystud[i][key];
                        break;
            case 'Femail':
                        //console.log("Femail" +mystud[i][key]);
                        document.getElementById("femail").innerHTMl= mystud[i][key];
                        Femail.innerHTML=mystud[i][key];
                        break;
             
            case 'Memail':
                        //console.log("Memail is" + mystud[i][key]);
                        document.getElementById("memail").innerHTMl= mystud[i][key];
                        Memail.innerHTML=mystud[i][key];
                        break;

            case 'FMno':
                        // console.log("F mobile no is" + mystud[i][key]);
                         document.getElementById("fno").innerHTMl=mystud[i][key];
                        break;
            case 'Mtno':
                        document.getElementById("mno").innerHTML=mystud[i][key];
                        break;
            
                    
            }
}
}
            }
        }
    }
});
}


          




