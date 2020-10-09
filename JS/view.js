const view = {};

view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'registerPage':
            document.getElementById('app').innerHTML = component.registerPage;
            const registerForm = document.getElementById('register-form');
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const data = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    gender: registerForm.gender.value,
                    dob: registerForm.gender.value,
                    phone: registerForm.phone.value,
                    email: registerForm.email.value,
                    address: registerForm.address.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value
                };
                controller.register(data);
            });
            console.log(model.currentUser);
            // đoạn này điều hướng tới trang login
            document.getElementById('redirect-login').addEventListener('click', () => {
                view.setActiveScreen('loginPage')
            });
            break;
        case 'loginPage':
            document.getElementById('app').innerHTML = component.loginPage;
            const loginForm = document.getElementById('login-form');
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const data = {
                    email: loginForm.email.value,
                    password: loginForm.password.value
                };
                controller.login(data);

            });
            //đoạn này đăng nhập bằng tk gg
            const googleAccount = document.getElementById('googleAccountBtn');
            googleAccount.addEventListener('click', () => {
                    model.loginGoogleAccount();
                })
                // đoạn này điều hướng tới form đăng kí
            document.getElementById('redirect-register').addEventListener('click', () => {
                view.setActiveScreen('registerPage');
            });
            break;

        case 'home':
            document.getElementById('app').innerHTML = component.home;
            var logOutBtn = document.getElementById('logOutBtn');
            logOutBtn.addEventListener('click', () => {
                firebase.auth().signOut();
                model.currentUser = {};
                localStorage.removeItem('currentRole');
            });
            console.log(model.currentUser.displayName);
            console.log(model.currentRole);
            view.setWelcomeMessage('welcome-header', `Welcome eCommerce Project ,${model.currentUser.displayName} `);
            break;
        case 'admin':
            document.getElementById('app').innerHTML = component.admin;
            logOutBtn = document.getElementById('logOutBtn');
            logOutBtn.addEventListener('click', () => {
                firebase.auth().signOut();
                model.currentUser = {};
                localStorage.removeItem('currentRole');
            });
            model.getProductData();


            break;
    }
};

view.setErrorMessage = (elementId, content) => {
    document.getElementById(elementId).innerText = content;
};
// function này thuộc Admin
view.setWelcomeMessage = (elementId, content) => {
    document.getElementById(elementId).innerText = content;
};

// function này thuộc Admin, đoạn này show bảng sản phẩm
view.showListProduct = () => {

    const tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    for (let data of model.productData) {

        tbody.insertAdjacentHTML('beforeend', `

        <th>${data.id}</th>
        <th><img class="img" src="${data.img[0]}" alt=""></th>
        <th>${data.name}</th>
        <th>${data.availableQuantity}</th>
        <th><button id="btnDetail" class="btn">Detail</button></br>
        <button id="btnDelete" class="btn">Delete</button></br>
        <button id="btnUpdate" class="btn">Update</button>
        
        </th>
        `);
    }

}