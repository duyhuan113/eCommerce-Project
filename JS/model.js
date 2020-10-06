const model = {};


model.currentUser = undefined;
model.conversations = [];
model.currentConversation = undefined;

model.register = async(data) => {
    try {
        const response = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
        firebase.auth().currentUser.updateProfile({
            displayName: data.firstName + ' ' + data.lastName
        });
        firebase.auth().currentUser.sendEmailVerification();

    } catch (err) {
        alert(err.message);
    }
};

model.newUser = (data) => {
    const dataToCreate = {
        name: data.firstName + ' ' + data.lastName,
        gender: data.gender,
        dob: data.dob,
        phone: data.phone,
        email: data.email,
        address: data.address,
        password: data.password
    }
    firebase.firestore().collection('users').doc(data.email).set(dataToCreate);

    console.log(dataToCreate);
};


model.login = (data) => {
    try {
        firebase.auth().signInWithEmailAndPassword(data.email, data.password);
    } catch (err) {
        console.log(err);
        alert(err.message)
    }
};

model.loginGoogleAccount = () => {
    baseProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(baseProvider).then(function(result) {
        console.log(result);
        //currentUser = {}
    }).catch(function(error) {
        console.log(error);
    })
}