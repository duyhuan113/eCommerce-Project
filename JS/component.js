const component = {};
component.registerPage = `
<div class="register-container">
        <form id="register-form">
            <div class="register-header">MindX Chat</div>
            <div class="name-wrapper">
                <div class="input-wrapper">
                    <input type="text" placeholder="First Name" name="firstName">
                    <div class="error" id="first-name-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Last Name" name="lastName">
                    <div class="error" id="last-name-error"></div>
                </div>
            </div>
            <div class="input-wrapper">
                <input type="gender" placeholder="Gender" name="gender">
                <div class="error" id="gender-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="dob" placeholder="Date of Birth" name="dob">
                <div class="error" id="dob-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="phone" placeholder="Phone" name="phone">
                <div class="error" id="phone-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="email" placeholder="Email" name="email">
                <div class="error" id="email-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="address" placeholder="Address" name="address">
                <div class="error" id="address-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" placeholder="Password" name="password">
                <div class="error" id="password-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" placeholder="Confirm Password" name="confirmPassword">
                <div class="error" id="confirm-password-error"></div>
            </div>
            <div class="form-action">
                <div>Already have an account? <span id="redirect-login" class="cursor-pointer">Login</span></div>
                <button class="btn cursor-pointer" type="submit">Register</button>
            </div>
        </form>
    </div>
`;

component.loginPage = `
<div class="login-container">
    <form id="login-form">
        <div class="login-header">MindX Chat</div>

        <div class="input-wrapper">
            <input type="text" placeholder="Email..." name="email">
            <div class="error" id="email-error"></div>
        </div>
        <div class="input-wrapper">
            <input type="password" placeholder="Password..." name="password">
            <div class="error" id="password-error"></div>
        </div>
        <div class="form-action">
            <div>Don't have Account?<span id="redirect-register" class="cursor-pointer"> Create Account </span></div>
            <button class="btn cursor-pointer" type="submit">Login</button>
        </div>
        <div class="login-link">
            <button id="googleAccountBtn" class="btn cursor-pointer" type="submit">Google Sign In</button>
        </div>
        
    </form>
</div>`;

component.adminPage = `
<div class="register-container">
    <div id="welcome-header"></div>
    <button class="btn cursor-pointer" id="logOutBtn" type="submit">log out</button>

</div>`;