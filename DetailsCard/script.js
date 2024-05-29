// const form = document.getElementById("form");


const handleSubmit = (e) => {
    e.preventDefault();
    // print(e.target)
    const data = e.target;
    const attributes = ["Name", "Email", "DOB", "Age", "Contact", "Profile Photo"];

    const details = document.querySelector(".details")
    // console.log(typeof(data));
    
    let i;
    for(i = 0; i <= 4; i++){
        // console.log(data[i].value);
        display = document.createElement('p');
        display.textContent = attributes[i] +": " + (data[i].value ? data[i].value : "--Missing--");
        details.appendChild(display);
    }

    const photo = data[5].files[0];
    const displayPhoto = document.getElementById("photo-upload");
    if (photo){
        displayPhoto.src = URL.createObjectURL(photo);
    }
    displayPhoto.alt = "Profile photo missing"


    const form = document.getElementById("form");
    form.style.display = 'none';

    const card = document.querySelector(".outline");
    card.style.display = "flex";
}

const cardToChange = document.querySelector(".card").style;
const headingIDToChange = document.querySelector(".heading-id").style;
const photoBorderToChange = document.querySelector(".photo").style;

const colors = ["blue", "green", "red", "yellow"];
const changeColor = (e) => {
    const radio = document.getElementsByClassName("color");
    for(let i = 0; i < 4; i++){
        // console.log(radio[i].checked);
        if (radio[i].checked){
            cardToChange.borderColor = colors[i];
            headingIDToChange.backgroundColor = colors[i];
            photoBorderToChange.borderColor = colors[i];
        }
    }

}

    
    // const name = data[0].value;
    // const mail = data[1].value;
    // const dob = data[2].value;
    // const age = data[3].value;
    // const contact = data[4].value;
    // const photo = data[5].files[0];

    // let display;
    // data.forEach((val, idx) => {
    //     console.log(val.value);
    //     // display = document.createElement('p');
    //     // display.textContent = attributes[idx] + val.value;
    //     // details.appendChild(display);
    // })
    
    // const displayName = document.createElement('p');
    // displayName.textContent = "Name: " + name;
    // details.appendChild(displayName);

    // const displayMail = document.createElement('p');
    // displayMail.textContent = "Email: " + mail;
    // details.appendChild(displayMail);

    // const displayDOB = document.createElement('p');
    // displayDOB.textContent = "DOB: " + dob;
    // details.appendChild(displayDOB);

    // const displayAge = document.createElement('p');
    // displayAge.textContent = "Age: " + age;
    // details.appendChild(displayAge);

    // const displayContact = document.createElement('p');
    // displayContact.textContent = "Contact: " + contact;
    // details.appendChild(displayContact);

    

    //////////////////////////////////////////////////////////////////////////////////////////////////

// console.log("hello")

// form.addEventListener("submit", handleSubmit);

