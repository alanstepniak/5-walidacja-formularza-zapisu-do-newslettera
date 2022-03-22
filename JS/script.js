let newsletterForm = document.getElementById("newsletter-form");
let check = document.getElementById('agreementAll');

const validate = (event) => {
    let nameTxt = document.getElementById('nameSurname');
    let email = document.getElementById('email');
    let agree = document.getElementById('agreement1');
    let err = document.getElementById('errors');
    err.innerHTML = '';


    if (nameTxt.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz imię i nazwisko!';
        err.appendChild(liError);
        console.log(liError);
    }

    if (email.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz poprawny adres e-mail!';
        err.appendChild(liError);
        console.log(liError);
    }

    if (!email.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'Adres e-mail musi zawierać @!';
        err.appendChild(liError);
        console.log(liError);
    }

    if (!agree.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Nie wyraziłeś zgody 1!';
        err.appendChild(liError);
        console.log(liError);
    }

    if (err.children.length > 0)
    event.preventDefault();
}

const allAgree = (event) => {
    let agree1 = document.getElementById('agreement1');
    let agree2 = document.getElementById('agreement2');

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
}

newsletterForm.addEventListener('submit', validate);
check.addEventListener('change', allAgree);