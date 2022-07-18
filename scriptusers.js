function getAllCustomers(page) {
    let getAll = 'https://reqres.in/api/users?page=' + page;

    // select div with id customer-cards
    let customerCard = document.getElementById('customer-cards')

    fetch(getAll).then(function (response) {
        // The API call was successful!
        return response.json();
    }).then(function (data) {
        data.data.forEach(element => {
            let customer = (name, email, id) => `<div id="info">
                                                <h1 id="name" customer-id="${id}">${name}</h1>
                                                <p id="email">${email}</p>
                                                <button onclick="getSingleUser(${id})">Click me</button>
                                                </div><br/>`;

            let test = customer(element.first_name + ' ' + element.last_name, element.email, element.id);
            customerCard.insertAdjacentHTML('beforeend', test);
        });
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}

getAllCustomers(1)

function getSingleUser(id) {
    let singleUserUrl = 'https://reqres.in/api/users/' + id;

    fetch(singleUserUrl).then(function (response) {
        // The API call was successful!
        return response.json();
    }).then(function (data) {
        let img = document.getElementById('img');
        img.setAttribute('src', data.data.avatar)

    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
    console.log(1);

}


function createCustomerInfo() {
    document.getElementById('newCustomerInfo').style.display = '';
    document.getElementById('createCustomerInfo').style.display = 'none';
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
}

function createCustomerAPI() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;

    let customer =
    {
        email: email,
        first_name: firstName,
        last_name: lastName,
        avatar: ""
    }

    postUser(customer);

    console.log(firstName);
    console.log(lastName);
    console.log(email);
}


function postUser(customer) {
    debugger;
    fetch('https://reqres.in/api/users', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
    })
        .then(response => response.json())
        .then(data => {
            alert('You as customer are now create with name: '
                + data.first_name + ' '
                + data.last_name + '\nWith email: '
                + data.email + '\nWith Id: '
                + data.id
                + '\nPlease check your mail with your id and store it in a place you\'ll remember');
            document.getElementById('newCustomerInfo').style.display = 'none';
            document.getElementById('createCustomerInfo').style.display = '';
        }).catch(function (err) {
            alert('Something went wrong');
        });
}