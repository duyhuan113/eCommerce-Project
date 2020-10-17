const model = {};

model.currentRole = localStorage.getItem('currentRole');
model.currentUser = undefined;

model.productData = [];


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
            model.currentRole = data;
        } else {
            // doc.data() will be undefined in this case
            console.log("Turn to Home Page");
            data = 'user';
            model.currentRole = data;
        }
        //đoạn này lưu role lên localstorage, tẹo lấy xuống
        localStorage.setItem('currentRole', data);
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

//function này lấy Product data về từ firebase
model.getProductData = async() => {
    //đoạn này bóc tách dữ liệu từ db trả về
    const response = await firebase.firestore().collection("products").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            const data = {
                id: doc.id,
                ...doc.data()
            }
            model.productData.push(data);
        });
        if(model.currentRole =='admin' ){
            view.showListProductAdmin();    
        }else if(model.currentRole =='user' ){
            view.showListProductHome();
        }
    });
};

//function này dùng để delete product

model.deleteProduct = (data) => {
    firebase.firestore().collection("products").doc(data.id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
};


model.addProduct = (data) => {


};