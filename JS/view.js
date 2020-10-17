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
        case 'admin':
            document.getElementById('app').innerHTML = component.admin;
            logOutBtn = document.getElementById('logOutBtn');
            logOutBtn.addEventListener('click', () => {
                firebase.auth().signOut();
                model.currentUser = {};
                localStorage.removeItem('currentRole');

            });
            model.getProductData();
            //view.showListProductAdmin();
            //nút này là nút mở ra form thêm mới
            // const addProductBtn = document.getElementById('addBtn');
            // addProductBtn.addEventListener('click', () => {
            //     view.myFunction()
            // });

            break;
        case 'home':
            document.getElementById('app').innerHTML = component.home;
            var logOutBtn = document.getElementById('logOutBtn');
            logOutBtn.addEventListener('click', () => {
                firebase.auth().signOut();
                model.currentUser = {};
                localStorage.removeItem('currentRole');
                model.productData = [];
            });
            model.getProductData();
            //view.showListProductHome();
            //đoạn này show ra hello ng dùng.
            view.setWelcomeMessage('welcome-header', `Welcome eCommerce Project ,${model.currentUser.displayName} `);
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
view.showListProductAdmin = () => {
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    for (let data of model.productData) {
        tbody.insertAdjacentHTML('beforeend', `
        <th>${data.id}</th>
        <th><img class="img" src="${data.img[0]}" alt=""></th>
        <th>${data.name}</th>
        <th>${data.availableQuantity}</th>
        <th><button class="btnDetail" >Detail</button></br>
        <button class="btnDelete" >Delete</button></br>
        <button class="btnUpdate" >Update</button>
        </th>
        `);

    }

    const deleteProductBtn = document.getElementsByClassName('btnDelete');
    for (let i = 0; i < deleteProductBtn.length; i++) {
        deleteProductBtn[i].addEventListener('click', () => {
            let dataToDelete = model.productData[i];
            model.deleteProduct(dataToDelete);
        })
    };
    // const detailProductBtn = document.getElementsByClassName('btnDetail');
    // for (let i = 0; i < detailProductBtn.length; i++) {
    //     detailProductBtn[i].addEventListener('click', () => {
    //         let dataToDelete = model.productData[i];

    //     })
    // };
    // const updateProductBtn = document.getElementsByClassName('btnUpdate');
    // for (let i = 0; i < deleteProductBtn.length; i++) {
    //     updateProductBtn[i].addEventListener('click', () => {
    //         let dataToDelete = model.productData[i];
    //         console.log(dataToDelete.id);
    //     })
    // };
};

view.myFunction = () => {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}



view.showListProductHome = () => {
    console.log(model.productData);
    const productSection = document.getElementById('product_section');
    const div = document.createElement('div');
    div.classList.add('row');
    let data = model.productData;
    for (let i=0;i<4 ;i++) {

        div.innerHTML += `<div class="col span-1-of-4">
                            <div class="item">
                                <div class="item_img">
                                    <a href=""><img src="${data[i].img[0]}" alt=""></a>
                                </div>
                                <div class="item_title"><a href="">${data[i].name}</a></div>
                                <div class="item_price">
                                    <p>${data[i].price}$</p>
                                </div>
                                <div class="buy_now">
                                    <a href="#">
                                        <p>ADD TO CART</p>
                                    </a>
                                </div>
                            </div>
                        </div>`;
    }




    productSection.appendChild(div)

};

