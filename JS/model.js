const model = {};

model.currentRole = localStorage.getItem('currentRole');
model.currentUser = undefined;
model.listAdminAccount = [];


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


model.login = (data) => {
    try {
        firebase.auth().signInWithEmailAndPassword(data.email, data.password);
        // đoạn này sau khi login thành công, chuyển tiếp email vừa dùng để check role

    } catch (err) {
        console.log(err);
        alert(err.message)
    }
};

model.loginGoogleAccount = () => {
    baseProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(baseProvider).then(function(result) {
        console.log(result);

    }).catch(function(error) {
        console.log(error);
    })
}
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
        //đoạn này lưu role lên localstoragr, tẹo lấy xuống
        localStorage.setItem('currentRole', data);
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

}