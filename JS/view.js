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
                localStorage.removeItem('currentLocationScreen');

            });
            model.getProductData();
            //view.showListProductAdmin();
            //nút này là nút mở ra form thêm mới
            // const addProductBtn = document.getElementById('addBtn');
            // addProductBtn.addEventListener('click', () => {
            //     view.myFunction()
            // });

            break;
        case 'homePage':
            document.getElementById('app').innerHTML = component.headerHome;
            document.getElementById('app').innerHTML += component.homePage;
            document.getElementById('app').innerHTML += component.footerHome;
            //đoạn này xử lí nút đăng xuất,
            var logOutBtn = document.getElementById('logOutBtn');
            logOutBtn.addEventListener('click', () => {
                firebase.auth().signOut();
                model.currentUser = {};
                localStorage.removeItem('currentLocationScreen');
                model.productData = [];
            });
            model.getProductData();
            //view.showListProductHome();

            //đoạn này show ra hello ng dùng.
            view.setWelcomeMessage('welcome-header', `Welcome eCommerce Project ,${model.currentUser.displayName} `);
            break;
        case 'detailProductHome':
            document.getElementById('app').innerHTML = component.headerHome;
            document.getElementById('app').innerHTML += component.detailProduct;
            document.getElementById('app').innerHTML += component.footerHome;
            logOutBtn = document.getElementById('logOutBtn');
            logOutBtn.addEventListener('click', () => {
                firebase.auth().signOut();
                model.currentUser = {};
                localStorage.removeItem('currentLocationScreen');
                model.productData = [];
            });
            const homePage = document.getElementById('homePage');
            homePage.addEventListener('click', () => {
                localStorage.setItem('currentLocationScreen', 'homePage');
            });


            view.loadDetailProductHome();



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



// đoạn này show sản phẩm hot ở trang chủ 
view.showHotListProductHome = () => {
    //console.log(model.productData);
    const productSection = document.getElementById('product_section');
    const div = document.createElement('div');
    div.classList.add('row');
    let data = model.productData;
    console.log(data);
    for (let i = 0; i < 4; i++) {
        div.innerHTML += `
        <div class="col span-1-of-4">
            <div class="item">
                <div class="item_img">
                    <a href=""><img src="${data[i].img[0]}" alt=""></a>
                </div>
                <div class="item_title"><a href="">${data[i].name}</a></div>
                <div class="item_price"
                    <p>${data[i].price}$</p>
                </div>
                <div class="buy_now">
                <a href="#"><p>ADD TO CART</p></a>
                </div>
            </div>
        </div>`;
        productSection.appendChild(div)

        const item = document.getElementsByClassName('item');
        for (let i = 0; i < item.length; i++) {
            item[i].addEventListener('click', () => {

                model.tickProduct(model.productData[i]);


                view.loadDetailProductHome(model.productData[i]);


            })
        }
    }
};

view.loadDetailProductHome = () => {
    let data = model.chosenProduct;
    let dataDetail = data.detail;
    const inforProduct = document.getElementById('inforProduct');
    const inforImg = document.getElementById('innerImg');
    const inforDes = document.getElementById('desProduct')

    //đoạn này để tải ra hình ảnh ở slider
    for (let i = 0; i < data.img.length; i++) {
        inforImg.innerHTML += `
        <div class="slide slide_${i}">
            <div class="slide-content">
                <img src="${data.img[i]}" alt="">
            </div>
        </div>                                                                                                      
        `;
    };

    inforDes.innerHTML= `
    <div class="des_video">
        ${data.video}
        <p>Source: Youtube</p>
    </div>
    <div class="des_word">
    <p> Some Description about Product </br>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aliquid blanditiis adipisci consectetur quisquam consequuntur reprehenderit corporis illo non dolore omnis deleniti, rem ipsa perferendis ipsam incidunt? Reprehenderit, culpa aut.</p>
    </div>
    `;










//đoạn này in ra infor sản phẩm
    inforProduct.insertAdjacentHTML('afterbegin', `
    <h4>${data.name}</h4>
    <h3> ${data.price}$</h3>
    <div class="item_price">
        <ul>
            <li>
                <h1>Screen:</h1>
                <p>${dataDetail.display} pxl</p>
            </li>
            <li>
                <h1>Operating system:</h1>
                <p>${dataDetail.os}</p>
            </li>
            <li>
                <h1>Rear camera:</h1>
                <p>${dataDetail.rearCam} </p>
            </li>
            <li>
                <h1>Rear camera:</h1>
                <p>${dataDetail.frontCam} </p>
            </li>
            
            <li>
                <h1>Chip:</h1>
                <p> ${dataDetail.chip} </p>
            </li>
            <li>
                <h1>RAM:</h1>
                <p> ${dataDetail.ram} GB </p>
            </li>
            <li>
                <h1>Internal Memory:</h1>
                <p> ${dataDetail.capacity} GB</p>
            </li>
            <li>
                <h1>Battery Capacity:</h1>
                <p> ${dataDetail.battery} mAH </p>
            </li>
            <li>
                <h1>Quantity:</h1>
                <div class="def-number-input number-input safari_only">
                    <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="minus"></button>
                    <input class="quantity" min="0" name="quantity" value="1" type="number">
                    <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
                </div>
            </li>
        </ul>
    </div>
    `);





};

view.loadCategories = () => {
    const subMenu = document.getElementById('subMenu');
    const data = model.categoriesProductData;
    for (let i = 0; i < data.length; i++) {
        subMenu.innerHTML += `<li><a href="">${data[i]} </a></li>`
    };
};

view.myFunction = () => {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

