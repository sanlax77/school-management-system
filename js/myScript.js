let Activity=[];
let mystud=[];
let pstud=[];
let validdata=false ;
var values=  ["Algebra","Geometry", "Physics", "Chemistry",
"Chemistry","Biology","Computer","PT","Art","Music"]    ;

//Fetching the JsonData
function getJdata()     
{
    fetch('./data/Student.json')
    .then((response)  => response.json())
    .then((json) => {
        console.log(json);
    mystud=JSON.parse(JSON.stringify(json));
        console.log(mystud.Student[0]);
        mystud=JSON.parse(JSON.stringify(json)).Student;
        pstud=mystud.slice();
        console.log(mystud[0]);
        console.log(mystud.length);

        const map = new Map(Object.entries(JSON.parse(json)));
        console.log(map);

    });
}
  
//Login function to get jsondata and veriry usrname and password
function Login()
   {
       fetchStudentdata();
   }

function fetchStudentdata()
{
     getJdata();
    callLogin();
    
}


/*function to validate user name and passowrd*/
function callLogin()
{
     
     let uid=document.getElementById("u1").value;
     let pass=document.getElementById("pass").value;
     //a boolean flag to check valid user
     let validUser=false
  
    for(let i=0;i<mystud.length;i++)
    {
        
        if (mystud[i].username ==uid && mystud[i].password==pass)
        {
                sessionStorage.clear;
                validUser=true;
                //setting session storage for username and id
                sessionStorage.setItem('StudId',mystud[i].id);
                sessionStorage.setItem('username',mystud[i].username);
                             break;
                
         
       }
    }

         if(validUser)
        { 
                //redirrecting to welcome page
            window.location.href="welcome.html";
        }
        else
        {
            //if error found display eror
         document.getElementById("loginError").style.display = "block";
        }
}

   //if no error found hide the eror message
    function hideLoginError()
    {
        document.getElementById("loginError").style.display = "none";
    }


//function display marks in exam results form JSon file
    function displayMarks()
    {
         getJdata();
        callDisplayMarks();

       
    }
   
   
    //FUNCTION TO DISPLAY THE MARKS IN EXAM RESULT PAGE
    function callDisplayMarks()
{
        console.log("indisplay");

        let subjects=document.getElementById("subject").value;
        let marks=document.getElementById("marks");
        let grade=document.getElementById("grade");

         marks.value="";
        grade.value="";

        for(let i= 0;i<mystud.length;i++)
    {
        
        if (mystud[i].id  == sessionStorage.getItem("StudId"))
                //sessionStorage.getItem(StudId))
                
     {
                for(const key in mystud[i])
                {
                
                if( mystud[i].hasOwnProperty (key)) 
    {

                    
                 if(subjects ==key)
    {
                  
       

        switch(subjects)

                {

                case "Algebra":
                                marks.value=mystud[i][key]["marks"];
                                grade.value=mystud[i][key]["grade"];
                                break;
                case "Geometry":
                                marks.value=mystud[i][key]["marks"];
                                grade.value=mystud[i][key]["grade"];
                                break;
                 case"Physics":
                                marks.value=mystud[i][key]["marks"];
                                grade.value=mystud[i][key]["grade"];
                                break;
                case "Chemistry":
                            
                                marks.value=mystud[i][key]["marks"];
                                grade.value=mystud[i][key]["grade"];                                     
                                break;
                case "Biology":
                            
                                marks.value=mystud[i][key]["marks"];
                                grade.value=mystud[i][key]["grade"];
                                break;
                case "Music":   
                                marks.value=mystud[i][key]["marks"];
                                grade.value=mystud[i][key]["grade"];
                                break;
               case "Computer":
                                marks.value=mystud[i][key]["marks"];
                                grade.value=mystud[i][key]["grade"];
                                 break;
                        
                case "Art": 
                                 marks.value=mystud[i][key]["marks"];
                                grade.value=mystud[i][key]["grade"];
                                 break;
                case "Social": 
                                marks.value=mystud[i][key]["marks"];
                                grade.value=mystud[i][key]["grade"];
                                break;
                case "PT":
                                marks.value=mystud[i][key]["marks"];
                                grade.value=mystud[i][key]["grade"];
                                break;
                                            
            defualt:document.writeln("Incorrect choice selected!");
                            
                                        
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


          




