const model = {};
// biến này để lấy vị trí trang hiện tại trên local về
model.currentLocationScreen = localStorage.getItem('currentLocationScreen');
// biến này để lưu ng dùng hiện tại là ai?
model.currentUser = undefined;

//biến này lưu thông tin ng dùng hiện tại
model.userData = undefined
    // biến này để lưu sản phẩm vừa đc chọn để xem chi tiết là sp nào
if (model.currentLocationScreen == 'detailProductHome') {
    model.chosenProduct = localStorage.getItem('detailProduct');
    model.chosenProduct = JSON.parse(model.chosenProduct);
} else {
    model.chosenProduct = undefined;
}
// array này lưu tất cả dữ liệu của toàn bộ sp
model.productData = undefined;

// array này lưu tất cả category của toàn bộ sp
model.categoriesProductData = undefined;
// array này chức Data vừa lọc đc
model.filterProductData = [];


//LOGIN--------------------------------------------------------------------------------------------------------------------------------
// function này tạo tài khoản cho ng dùng mới
model.register = async(data) => {
    try {
        const response = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
        firebase.auth().currentUser.updateProfile({
            displayName: data.firstName + ' ' + data.lastName,
        });
        firebase.auth().currentUser.sendEmailVerification();
        //đoạn này nếu register thành công thì mới thêm user trong db.
        model.newUser(data);
    } catch (err) {
        alert(err.message);
    }
};
// function này thêm mới user trong db, 
model.newUser = (data) => {
    const dataToCreate = {
        name: data.firstName + ' ' + data.lastName,
        gender: data.gender,
        dob: data.dob,
        phone: data.phone,
        email: data.email,
        address: data.address,
        password: data.password,
        role: 'user'
    }
    firebase.firestore().collection('users').doc(data.email).set(dataToCreate);
};

// function này check login bằng email và pw
model.login = (data) => {
    try {
        firebase.auth().signInWithEmailAndPassword(data.email, data.password);
        // đoạn này sau khi login thành công, chuyển tiếp email vừa dùng để check role

    } catch (err) {
        console.log(err);
        alert(err.message)
    }
};

// function này check login bằng tk liên kết với google
model.loginGoogleAccount = () => {
    baseProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(baseProvider).then(function(result) {
        console.log(result);

    }).catch(function(error) {
        console.log(error);
    })
}

//function này check Role tài khoản
model.checkRole = async(email) => {
        const docRef = firebase.firestore().collection("admins").doc(email);
        let data = undefined;
        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Turn to Admin Page:", doc.data());
                data = doc.data().role;
                model.currentLocationScreen = data;
            } else {
                // doc.data() will be undefined in this case
                console.log("Turn to Home Page");
                data = 'homePage';
                model.currentLocationScreen = data;
            }
            //đoạn này lưu role lên localstorage, tẹo lấy xuống
            localStorage.setItem('currentLocationScreen', data);

        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }
    //END LOGIN--------------------------------------------------------------------------------------------------------------------------------


//function này lấy Product data về từ firebase
model.getProductData = async() => {


    //đoạn này bóc tách dữ liệu từ db trả về

    const response = await firebase.firestore().collection("products").get()

    model.productData = getDataFromDocs(response.docs);


    //     //đoạn này kiểm tra role để load dữ liệu
    if (model.currentLocationScreen == 'admin') {
        view.showListProductAdmin();
    } else {
        //view.showListProductHome();
        model.getCategoriesProduct();
    };
    //đoạn này lấy categories cho  vào 1 biến, các catogorries có thể giống nhau nên phải cho và o1 biến để lọc ra unique
};


//HOMEPAGE--------------------------------------------------------------------------------------------------------------------------------
//function này lấy các category.
model.getCategoriesProduct = () => {
    let categories = [];
    for (item of model.productData) {
        categories.push(item.category)
    }
    model.categoriesProductData = [...new Set(categories)];

    view.showListProductHome();
}
model.filterCategoryProductData = (key) => {
        model.filterProductData = [];
        console.log(key);
        for (data of model.productData) {
            if (data.category == key) {
                model.filterProductData.push(data)
                console.log(model.filterProductData);
            }
        }
        view.showListProductHome(model.filterProductData, true);

    }
    // function này lưu product vừa đc chọn để lưu lên local, sau đó gọi lại để load ra màn hình detail.
model.tickProduct = (chosenProduct) => {
    //đoạn này update location screen.
    localStorage.setItem('currentLocationScreen', 'detailProductHome');
    data = JSON.stringify(chosenProduct);
    localStorage.setItem('detailProduct', data);
};
model.getCurrentUserData = async() => {
    const response = await firebase.firestore().collection("users").doc(model.currentUser.email).get()

    model.userData = response.data();

    view.showCart();
    // view.createBill();

}
model.cartProduct = () => {

}


//END HOMEPAGE--------------------------------------------------------------------------------------------------------------------------------


//ADMIN --------------------------------------------------------------------------------------------------------------------------------
//function này dùng để delete product của Admin
model.deleteProduct = (data) => {
    firebase.firestore().collection("products").doc(data.id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
};

model.addProduct = (data) => {};

// End Admin--------------------------------------------------------------------------------------------------------------------------------

model.signOutButton = () => {
    firebase.auth().signOut();
    model.currentUser = {};
    localStorage.removeItem('currentLocationScreen');
    model.productData = [];
};

model.homePageButton = () => {
    localStorage.setItem('currentLocationScreen', 'homePage');
};

model.allProductButton = () => {
    localStorage.setItem('currentLocationScreen', 'allProductHome');
};
model.cartBtn = () => {
    localStorage.setItem('currentLocationScreen', 'cart');
};

// function này lưu sản phẩm đc chọn vào giỏ hàng
model.addCartBtn = (data) => {
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[data.id] == undefined) {
            data.inCart = 1;
            cartItems = {
                ...cartItems,
                [data.id]: data,
            }
        } else {
            cartItems = {
                ...cartItems,
                [data.id]: data,
            }
            cartItems[data.id].inCart += 1;
        }
    } else {
        data.inCart = 1;
        cartItems = {
            [data.id]: data,
        }
    }
    localStorage.setItem('productInCart', JSON.stringify(cartItems));
};



//đoạn này lấy Data từ doc
getDataFromDocs = (docs) => {
    return docs.map(item => getDataFromDoc(item))
}
getDataFromDoc = (doc) => {
    const data = doc.data()
    data.id = doc.id
    return data
}