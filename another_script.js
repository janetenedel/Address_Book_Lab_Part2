const divMain = document.querySelector('.maindiv');
const contactBoxes = document.querySelector('.contact-boxes');
const inputName = document.querySelector('.name');
const inputEmail = document.querySelector('.email');
const inputPhone = document.querySelector('.phone');
const inputRelation = document.querySelector('.relation');
const addButton = document.querySelector('.add');


const book = [{ name: 'Irene', phone: "3132220000", email: "irene@irene.com", relation: "Other" }, { name: 'Miguel', phone: "2485060000", email: "miguel@miguel.com", relation: "Family" }];


const add = (name, phone, email, relation) => {
    book.push({ name: name, phone: phone, email: email, relation: relation });
}

const deleteAt = (index) => {
    book.splice(index, 1);
}


const display = () => {
    contactBoxes.innerHTML = '';
    for (let i = 0; i < book.length; i++) {
        const item = book[i];
        const divContacts = document.createElement('div');
        divContacts.classList.add('contactdiv');

        const nameP = document.createElement('p');
        const phoneP = document.createElement('p');
        const emailP = document.createElement('p');
        const relationP = document.createElement('p');
        const deleteBtn = document.createElement("img");
        deleteBtn.setAttribute('src', 'images/trash-bin.jpg');
        deleteBtn.classList.add('trash');
        divContacts.appendChild(deleteBtn);

        


        nameP.innerText = `Name: ${item.name}`;
        phoneP.innerText = `Phone: ${item.phone}`;
        emailP.innerText = `Email: ${item.email}`;
        relationP.innerText = `Relation: ${item.relation}`;


        //  button.innerText = `Delete`;
        deleteBtn.addEventListener('click', () => {
            deleteAt(i);
            display();
        });

        divContacts.appendChild(nameP);
        divContacts.appendChild(phoneP);
        divContacts.appendChild(emailP);
        divContacts.appendChild(relationP);
        divContacts.appendChild(deleteBtn);

        contactBoxes.appendChild(divContacts);

        inputName.value = "";
        inputEmail.value = "";
        inputPhone.value = "";
        inputRelation.value = "Family";

    }
}



addButton.addEventListener('click', () => {
    add(inputName.value, inputEmail.value, inputPhone.value, inputRelation.value);
    display();
})

display();