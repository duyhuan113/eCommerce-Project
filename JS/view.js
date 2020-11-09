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
            document.getElementById('app').innerHTML = component.headerHome;
            document.getElementById('app').innerHTML += component.cart;
            //document.getElementById('app').innerHTML += component.footerHome;
            model.getCurrentUserData();
            const totalCart = parseInt(localStorage.getItem('totalCart'));


            paypal.Buttons({
                createOrder: function(data, actions) {
                    // This function sets up the details of the transaction, including the amount and line item details.
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: totalCart
                            }
                        }]
                    });
                },
                onApprove: function(data, actions) {
                    // This function captures the funds from the transaction.
                    return actions.order.capture().then(function(details) {
                        // This function shows a transaction success message to your buyer.
                        alert('Transaction completed by ' + details.payer.name.given_name);
                        view.createBill('paypal')
                    });
                }
            }).render('#paypalBtn');

            const cashBtn = document.getElementById('cashBtn');
            cashBtn.addEventListener('click', (e) => {
                e.preventDefault()
                view.createBill('cash');
            });

    }
};


//==========================================HOME =================================================================================================================================
// đoạn này show sản phẩm hot ở trang chủ 
view.showListProductHome = (filterList, fromFilter = false) => {
    let data;
    let dataCatagories = model.categoriesProductData;
    let num;
    let more = false;
    let categoryDiv = false;
    const productSection = document.getElementById('product_section');
    const categoryList = document.getElementById('categoryList');
    const item = document.getElementsByClassName('detailItem');
    const addCartBtn = document.getElementsByClassName('addCartBtn');
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

    for (let i = 0; i < item.length; i++) {
        addCartBtn[i].addEventListener('click', () => {
            model.addCartBtn(data[i]);
            view.setNumberInCart(1);
            view.setTotalCart(data[i])
        });

        item[i].addEventListener('click', () => {
            model.tickProduct(data[i]);
            view.showDetailProductHome(data[i]);
        });

    };
    //đạon này lọc ra sp theo category
    const chosenCategory = document.getElementsByClassName('category');
    for (let i = 0; i < chosenCategory.length; i++) {
        chosenCategory[i].addEventListener('click', (e) => {
            model.filterCategoryProductData(model.categoriesProductData[i])
        })
    };
    // gọi function này để hiển thị ra số sp đag có trong cart
    view.loadNumberInCart();
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

    items.forEach(function(item, index) {
        //console.log(item.innerText, index);
        if (index > maxItems - 1) {
            item.classList.add(hiddenClass);
        }
    });
    // đoạn này tham khảo nên đ hiểu lắm
    viewMoreBtn.addEventListener("click", function() {
        [].forEach.call(document.querySelectorAll("." + hiddenClass), function(
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


};

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

//function này để xét trạng thái của sản phẩm còn hàng/hết hàng trong Detail Product.
view.setAvailableStatusProduct = (data) => {
    if (data > 0) {
        return 'Available'
    } else {
        return 'Out of Stock'
    }
};

// đoạn này để lưu lại số sp có trong giỏ hàng
view.setNumberInCart = () => {
    let productNumberInCarts = localStorage.getItem('CartNumbers'); //lấy ra product đang có trong cart
    productNumberInCarts = parseInt(productNumberInCarts);
    //kiểm tra xem trong cart có product nào chưa

    if (productNumberInCarts) {
        localStorage.setItem('CartNumbers', productNumberInCarts + 1); // có rồi thì +1
        document.getElementById('cartNumbers').textContent = productNumberInCarts + 1; //hiển thị cart numberr lên màn hình
    } else {
        localStorage.setItem('CartNumbers', 1);
        document.getElementById('cartNumbers').textContent = 1; //chua có thì = 1
    };

};

// đoạn này show ra số sp đag có trong giỏ hàng
view.loadNumberInCart = () => {
    let productNumberInCarts = localStorage.getItem('CartNumbers');
    productNumberInCarts = parseInt(productNumberInCarts);
    if (productNumberInCarts) {
        document.getElementById('cartNumbers').textContent = productNumberInCarts;
    }
};
view.setTotalCart = (chosenProduct) => {
    let cartTotal = Number(localStorage.getItem('totalCart'));
    if (cartTotal != null) {
        cartTotal = parseInt(cartTotal);
        localStorage.setItem('totalCart', cartTotal + Number(chosenProduct.price));
    } else {
        localStorage.setItem('totalCart', Number(chosenProduct.price));
    }
}


view.showCart = () => {
    view.checkboxPaymentMethods();


    const userData = model.userData;

    let productInCart = JSON.parse(localStorage.getItem('productInCart'));
    productInCart = (Object.values(productInCart));
    let cartTotal = Number(localStorage.getItem('totalCart'));

    const defaultAddress = document.getElementById('defaultAddress');
    const tblListProduct = document.getElementById('tbody');
    const totalOrder = document.getElementById('totalOrder');
    const deleteBtn = document.getElementsByClassName('delete_item');
    const quantityItem = document.getElementsByClassName('quantityItem');
    //show ra địa chỉ default
    defaultAddress.innerHTML = view.htmlDefaultAddress(userData);
    // show ra list sản phẩm trong giỏ hàng
    for (let product of productInCart) {
        tbody.innerHTML += view.htmlItemCart(product);
    };

    // lắng nghe sự kiện thay đổi value Quantity vặ sự kiện Delete Item trong giỏ hàng
    for (let i = 0; i < quantityItem.length; i++) {

        quantityItem[i].addEventListener('input', (e) => {
            let num = Number(quantityItem[i].value);
            if (!isNaN(num)) {
                view.updateProductInCart(i, num)
                view.updateNumberInCart(productInCart[i], 'update')
                view.updateCartTotal('update');
                e.preventDefault();
                tbody.innerHTML = '';
                view.showCart()
            }
        });
        deleteBtn[i].addEventListener('click', (e) => {
            view.removeProductInCart(i);
            view.updateCartTotal(productInCart[i], 'delete');
            view.updateNumberInCart(productInCart[i], 'delete');
            e.preventDefault();
            view.showCart()
        })
    }
    totalOrder.innerHTML = `<p>Total: <span> ${cartTotal}$ </span></p>`;
};


// function này update số sp trong giỏ hàng
view.updateNumberInCart = (chosenProduct, type) => {

    let productNumberInCarts = localStorage.getItem('CartNumbers'); //lấy ra số product đag có trong cart
    productNumberInCarts = parseInt(productNumberInCarts);
    let productInCart = localStorage.getItem('productInCart');
    productInCart = JSON.parse(productInCart);
    productInCart = (Object.values(productInCart));
    let afterDelete = productNumberInCarts - chosenProduct.inCart;

    console.log(productInCart);


    if (type == 'delete') {
        if (productNumberInCarts == 0) {
            localStorage.setItem('CartNumbers', 0);
        } else {
            localStorage.setItem('CartNumbers', afterDelete);
        }
    } else if (type == 'update') {

        let total = 0;
        for (let i = 0; i < productInCart.length; i++) {
            total = total + productInCart[i].inCart;

        }
        console.log(total);
        localStorage.setItem('CartNumbers', total);
    }
}
view.updateCartTotal = (type, chosenProduct) => {
    let cartTotal = localStorage.getItem('totalCart');
    let productInCart = localStorage.getItem('productInCart');
    productInCart = JSON.parse(productInCart);
    productInCart = (Object.values(productInCart));
    let total = 0;
    if (type == 'delete')
        if (cartTotal == 0) {
            localStorage.setItem('totalCart', cartTotal);
        } else {
            localStorage.setItem('totalCart', cartTotal - (chosenProduct.price * chosenProduct.inCart));
        }
    else if (type == "update") {
        for (let i = 0; i < productInCart.length; i++) {
            total = total + productInCart[i].price * productInCart[i].inCart;
        }
        console.log(total);
        localStorage.setItem('totalCart', total);
    }
};
view.removeProductInCart = (indexRemove) => {
    const tblListProduct = document.getElementById('tbody');
    let productInCart = localStorage.getItem('productInCart');

    productInCart = JSON.parse(productInCart);
    productInCart = (Object.values(productInCart));
    productInCart.splice(indexRemove, 1);
    tblListProduct.innerHTML = '';
    console.log(productInCart);
    localStorage.setItem('productInCart', JSON.stringify(productInCart));
};
view.updateProductInCart = (indexChosenProduct, inCart) => {
        let productInCart = localStorage.getItem('productInCart');
        productInCart = JSON.parse(productInCart);
        productInCart = (Object.values(productInCart));
        productInCart[indexChosenProduct].inCart = inCart;
        localStorage.setItem('productInCart', JSON.stringify(productInCart));

    }
    // function này để chọn địa chỉ gửi hàng
    // view.setChosenAddress = () => {
    //     let selectedDiv = "";
    //     const x = document.getElementById('default')
    //     const optionAddress = document.getElementsByClassName('addressOption')
    //     for (var i = 0; i < optionAddress.length; i++) {
    //         optionAddress[i].addEventListener("click", function() {
    //             x.style.pointerEvents = 'none';
    //             let selectedEl = document.querySelector(".selected");
    //             if (selectedEl) {
    //                 selectedEl.classList.remove("selected");

//             }
//             this.classList.add("selected");
//         });
//     }
// };
//========================================== END HOME =================================================================================================================================

//==========================================HTML===================================================================================================
// đoạn HTML của Product lúc load ra màn hình đây nè
view.htmlProduct = (product) => {
    const html = `
    <div class="col span-1-of-4">
    <div class ="item">
        <div class="detailItem">
            <div class="item_img">
                <a href=""><img src="${product.img[0]}" alt=""></a>
            </div>
            <div class="item_title"><a href="">${product.name}</a></div>
            <div class="item_price"
                <p>${product.price}$</p>
            </div>
        </div>
        <div class="buy_now">
            <a  class="addCartBtn" ><p>ADD TO CART</p></a>
        </div>  
        </div>
    </div>
    `;
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
view.htmlItemCart = (product) => {
    let html = `<tr class="tbody_item">
            <td class="scroll_table_img"><img src="${product.img[0]}" alt=""></td>
            <td class="scroll_table_name">${product.name}</td>
            <td class="scroll_table_quantity " ><input class="quantityItem" type="" value="${product.inCart}"></td>
            <td class="scroll_table_price"><span>${product.price * product.inCart}$</span></td>
            <td><a class ="delete_item" href=""><i class=" fas fa-trash-alt"></i></a></td>
        </tr>
        `;
    return html
};
view.htmlDefaultAddress = (userData) => {
    let html = `
        <div class="form_group">
                                <input class="input" type="text" name="name"  value="${userData.name}" required>
                            </div>
                            <div class="form_group">
                                <input class="input" type="email" name="email" value="${userData.email}" required>
                            </div>
                            <div class="form_group">
                                <input class="input" type="text" name="address" value="${userData.address}" required>
                            </div>
                            <div class="form_group">
                                <input class="input" type="text" name="city" value="${userData.city}" required>
                            </div>
                            <div class="form_group">
                                <input class="input" type="tel" name="tel" value="${userData.phone}" required>
                            </div>
    `;
    return html
}

//==========================================END HTML===================================================================================================

//==========================================ADMIN =================================================================================================================================

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
//==========================================END ADMIN =================================================================================================================================

view.setErrorMessage = (elementId, content) => {
    document.getElementById(elementId).innerText = content;
};
// function này thuộc Admin
view.setWelcomeMessage = (elementId, content) => {
    document.getElementById(elementId).innerText = content;
};


view.myFunction = () => {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
};
//  function này kiểm tra xem người dùng chọn địa chỉ nào, mặc định theo thông tin của account.
view.checkboxAddress = () => {
    let checkBox = document.getElementById("myCheckAddress");
    let otherAddress = document.getElementById("otherAddress");
    if (checkBox.checked != true) {
        otherAddress.style.display = "none";
        document.getElementById('defaultAddress').style.opacity = '1';
    } else {
        otherAddress.style.display = "block";
        document.getElementById('defaultAddress').style.opacity = '0.3';
    };
};

//function này kiểm tra xem ng dùng chọn phương thức thanh toán nào.
view.checkboxPaymentMethods = () => {
    const choice = document.getElementsByClassName('payment');
    const cashBtn = document.getElementById('cashBtn');
    const paypalBtn = document.getElementById('paypalBtn');
    let prev = null;
    for (var i = 0; i < choice.length; i++) {
        choice[i].addEventListener('change', function() {
            if (this !== prev) {
                prev = this;
            }
            console.log(prev.value)
            if (prev.value == 'paypal') {
                cashBtn.style.display = 'none';
                paypalBtn.style.display = 'block';

            } else {
                paypalBtn.style.display = 'none';
                cashBtn.style.display = 'block';
            }
        });
    };
};

view.btnPayment = () => {
    const cashBtn = document.getElementById('cashBtn');
    const paypalBtn = document.getElementById('paypalBtn');

    cashBtn.addEventListener('click', (e) => {
        console.log('huan1');
        e.preventDefault();

    });
    paypalBtn.addEventListener('click', (e) => {
        console.log('huan2');
        e.preventDefault();

    });
};

view.getAddressForm = () => {
    const checkboxAddress = document.getElementById("myCheckAddress");
    let address = undefined;
    if (checkboxAddress.checked) {
        const otherAddress = document.getElementById('otherAddress');
        address = {
            name: otherAddress.name.value,
            phone: otherAddress.phone.value,
            address: otherAddress.address.value,
            city: otherAddress.city.value
        }
    } else {
        const userData = model.userData
        address = {
            name: userData.name,
            phone: userData.phone,
            address: userData.address,
            city: userData.city
        };
    }
    return address;
};
view.createBill = (methodPayment) => {
    let address = view.getAddressForm();
    let productInCart = JSON.parse(localStorage.getItem('productInCart'));
    productInCart = (Object.values(productInCart));

    let bill = {

    }

};