const view = {};

view.setActiveScreen = (screenName) => {
    //function này để load dữ liệu từ db về

    // model.getProductData();

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
                model.signOutButton();
            });



            break;
        case 'homePage':

            document.getElementById('app').innerHTML = component.headerHome;
            document.getElementById('app').innerHTML += component.homePage;
            document.getElementById('app').innerHTML += component.footerHome;

            console.log('huan');
            model.getProductData();
            //đoạn này show ra hello ng dùng.
            view.setWelcomeMessage('welcome-header', `Welcome eCommerce Project ,${model.currentUser.displayName} `);
            break;
        case 'detailProductHome':
            document.getElementById('app').innerHTML = component.headerHome;
            document.getElementById('app').innerHTML += component.detailProduct;
            document.getElementById('app').innerHTML += component.footerHome;

            model.getProductData()
            view.showDetailProductHome();
            break;
        case 'allProductHome':

            document.getElementById('app').innerHTML = component.headerHome;
            document.getElementById('app').innerHTML += component.allProduct;
            document.getElementById('app').innerHTML += component.footerHome;
            model.getProductData();

            break;

        case 'cart':
            //document.getElementById('app').innerHTML = component.headerHome;
            document.getElementById('app').innerHTML += component.cart;
            //document.getElementById('app').innerHTML += component.footerHome;
    }
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
view.showListProductHome = (filterList, fromFilter = false) => {
    let data;
    let dataCatagories = model.categoriesProductData;
    let num;
    let more = false;
    let categoryDiv = false;
    const productSection = document.getElementById('product_section');
    const categoryList = document.getElementById('categoryList');
    const div = document.createElement('div');
    div.classList.add('row');
    // đoạn này xử lí xem show ra bnh sản phẩm

    if (fromFilter) {
        data = filterList;
        productSection.innerHTML = '';
    } else {
        data = model.productData
    }

    if (model.currentLocationScreen == 'allProductHome') {
        num = data.length;
        more = true;
        categoryDiv = true;
    } else {
        num = 4;
    }

    //đoạn nay show ra list Category
    if (categoryDiv) {
        for (let i = 0; i < dataCatagories.length; i++) {
            categoryList.innerHTML += `<li class="category"><a href="#">${dataCatagories[i]}</a></li>`
        }
    };
    //đoạn này show ra sản phẩm
    for (let i = 0; i < num; i++) {
        div.innerHTML += view.htmlProduct(data[i]);
        productSection.appendChild(div);
    };
    //đoạn này check giá trị more == true sẽ thêm nút view more
    if (more) {
        productSection.innerHTML += view.htmlViewMoreBtn();
        view.loadMoreProduct();
    };

    //đoạn này chọn để xem detailProduct.
    const item = document.getElementsByClassName('span-1-of-4');
    for (let i = 0; i < item.length; i++) {
        item[i].addEventListener('click', () => {
            model.tickProduct(data[i]);
            view.showDetailProductHome(data[i]);
        });
    };
    //đạon này lọc ra sp theo category
    const chosenCategory = document.getElementsByClassName('category');
    for (let i = 0; i < chosenCategory.length; i++) {
        chosenCategory[i].addEventListener('click', (e) => {
        // e.preventDefault();
            model.filterCategoryProductData(model.categoriesProductData[i])
        })
    };
};
// function này chỉ cho phép 8 item đc hiển thị, còn lại ẩn, khi ấn vào view more sẽ load ra 8 item nữa, cho đến hết 
view.loadMoreProduct = () => {
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    const productSection = document.getElementById('product_section');
    var items = Array.from(productSection.querySelectorAll(".span-1-of-4"));

    maxItems = 8;
    loadItems = 8;
    hiddenClass = "hiddenStyle";
    hiddenItems = Array.from(document.querySelectorAll(".hiddenStyle"));

    items.forEach(function (item, index) {
        //console.log(item.innerText, index);
        if (index > maxItems - 1) {
            item.classList.add(hiddenClass);
        }
    });
    // đoạn này tham khảo nên đ hiểu lắm
    viewMoreBtn.addEventListener("click", function () {
        [].forEach.call(document.querySelectorAll("." + hiddenClass), function (
            item,
            index
        ) {
            if (index < loadItems) {
                item.classList.remove(hiddenClass);
            }
            if (document.querySelectorAll("." + hiddenClass).length === 0) {
                loadMore.style.display = "none";
            }
        });
    });


}
//HTML===================================================================================================
// đoạn HTML của Product lúc load ra màn hình đây nè
view.htmlProduct = (product) => {
    const html = `
    <div class="col span-1-of-4">
        <div class="item">
            <div class="item_img">
                <a href=""><img src="${product.img[0]}" alt=""></a>
            </div>
            <div class="item_title"><a href="">${product.name}</a></div>
            <div class="item_price"
                <p>${product.price}$</p>
            </div>
            <div class="buy_now">
            <a href="#"><p>ADD TO CART</p></a>
            </div>
        </div>
    </div>`;
    return html
};
view.htmlViewMoreBtn = () => {
    const html = `
    <div id="viewMore">
        <button id="viewMoreBtn">View More </button>
    </div>`;
    return html
};
view.htmlDetailProduct = (product, detailProduct) => {
    const html = `
<h4>${product.name}</h4>
<h3> ${product.price}$</h3>
<div class="item_price">
    <ul>
        <li>
            <h1>Screen:</h1>
            <p>${detailProduct.display} pxl</p>
        </li>
        <li>
            <h1>Operating system:</h1>
            <p>${detailProduct.os}</p>
        </li>
        <li>
            <h1>Rear camera:</h1>
            <p>${detailProduct.rearCam} </p>
        </li>
        <li>
            <h1>Rear camera:</h1>
            <p>${detailProduct.frontCam} </p>
        </li>
        
        <li>
            <h1>Chip:</h1>
            <p> ${detailProduct.chip} </p>
        </li>
        <li>
            <h1>RAM:</h1>
            <p> ${detailProduct.ram} GB </p>
        </li>
        <li>
            <h1>Internal Memory:</h1>
            <p> ${detailProduct.capacity} GB</p>
        </li>
        <li>
            <h1>Battery Capacity:</h1>
            <p> ${detailProduct.battery} mAH </p>
        </li>
        <li>
            <h1>Status:</h1>
            <p> ${view.setAvailableStatusProduct(product.availableQuantity)}</p>
        </li>
    </ul>
</div>
`;
    return html;
};

//END HTML===================================================================================================
// function này show ra detail Product trong trang của Ng dùng
view.showDetailProductHome = () => {
    let data = model.chosenProduct;
    let dataDetail = data.detail;
    const inforProduct = document.getElementById('inforProduct');
    const inforImg = document.getElementById('innerImg');
    const inforDes = document.getElementById('desProduct')
    //đoạn này load ra patch của màn hình
    document.getElementById('path').innerHTML = `<a><a href="" onclick="model.homePageButton()">Home</a> / <a href="" onclick="model.allProductButton()">Smartphone</a> / ${data.name}</a>`;
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
    // đoạn này load ra video,word mô tả sản phẩm
    inforDes.innerHTML = `
    <div class="des_video">
        ${data.video}
        <p>Source: Youtube</p>
    </div>
    <div class="des_word">
    <p> Some Description about Product </br>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Quas, aliquid blanditiis adipisci consectetur quisquam consequuntur reprehenderit corporis illo non dolore omnis deleniti,
    rem ipsa perferendis ipsam incidunt? Reprehenderit, culpa aut.</p>
    </div>
    `;
    //đoạn này in ra infor sản phẩm
    inforProduct.insertAdjacentHTML('afterbegin', view.htmlDetailProduct(data, dataDetail));
};

view.myFunction = () => {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

//function này để xét trạng thái của sản phẩm còn hàng/hết hàng.
view.setAvailableStatusProduct = (data) => {
    if (data > 0) {
        return 'Available'
    } else {
        return 'Out of Stock'
    }
}

view.setErrorMessage = (elementId, content) => {
    document.getElementById(elementId).innerText = content;
};
// function này thuộc Admin
view.setWelcomeMessage = (elementId, content) => {
    document.getElementById(elementId).innerText = content;
};

