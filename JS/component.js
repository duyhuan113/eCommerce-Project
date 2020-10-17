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



component.admin = `
<div class="admin-container">
        <div id="header"></div>
        <button class="btn cursor-pointer" id="logOutBtn" type="submit">log out</button>

        <div class="function">
            <button class="btn cursor-pointer" id="btnProduct" type="button">Manage Products</button>
            <button class="btn cursor-pointer" id="btnOrder" type="button">Manage Orders</button>
            <button class="btn cursor-pointer" id="btnAccount" type="button">Manage Accounts</button>
        </div>
        <div class="main">
        
            <h2>List of product</h2><br>
            <table id="table-product" style="border: 1px solid;">
                <tr>
                    <th>Product ID</th>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Available</th>
                    <th>Information</th>
                </tr>
                <tbody id="tbody">
                
                    <!-- js Code -->
                </tbody>
            </table>
        </div>
    </div>
`;

component.home = `
<div class="home-container">
    <div id="welcome-header"></div>
    <button class="btn cursor-pointer" id="logOutBtn" type="submit">log out</button>
</div>
<header>
        <div id="header">
            <!-- TOP HEADER -->
            <div id="top_header">
                <div class="container">
                    <ul class="header_links_pull_left">
                        <li><a href="#"><i class="fas fa-phone-square"></i>  0387798072</a></li>
                        <li><a href="#"><i class="far fa-envelope"></i> BTECSTORE@FPT.EDU.VN</a></li>
                        <li><a href="#"><i class="fas fa-map-marker-alt"></i> 107 Nguyen Phong Sac - Dich Vong Hau - Cau Giay - Ha Noi.</a></li>
                    </ul>
                    <ul class="header_links_pull_right">
                        <li><a href="#"><i class="fas fa-user"></i> MY ACCOUNT</a></li>
                    </ul>
                </div>
            </div>
            <!-- END TOP HEADER -->
            <!-- MAIN HEADER -->
            <div class="main_header">
                <img src="IMG/logoshop.png" alt="">
                <div class="search_box">
                    <input class="search_txt" type="text" name="" placeholder="Search..." />
                    <a class="search_btn" href="#">
                        <i class="fas fa-search small-icon" id="icon"></i>
                    </a>
                </div>
                <ul class="function_login">
                    <li><a href=""><i class="far fa-bell"></i></a></li>
                    <li><a href=""><i class="fas fa-shopping-cart"></i></a></li>
                    <li><a href="" class="login"><i class="fas fa-user"></i></a></li>
                </ul>
            </div>
            <!-- END MAIN HEADER -->
        </div>
    </header>
    <!-- END HEADER -->
    <div class="list">
        <ul class="main_nav">
            <li><a href="/index.html">Home</a></li>
            <li><a href="/aboutus.html">About us</a></li>
            <li class="drop_down"><a href="">Smartphones</a>
                <ul class="sub_menu">
                    <li><a href="">iPhone</a></li>
                    <li><a href="">Samsung</a></li>
                    <li><a href="">Vsmart</a></li>
                    <li><a href="">Xiaomi</a></li>
                </ul>
            </li>
            <li class="drop_down"><a href="">Smartwatch</a>
                <ul class="sub_menu">
                    <li><a href="">Apple Watch</a></li>
                    <li><a href="">Samsung Watch</a></li>
                    <li><a href="">Mi Band</a></li>
                </ul>
            </li>
            <li><a href="/contact.html">Contact</a></li>
            <hr>
        </ul>
    </div>
    <p class="title">Hot products</p>
    <section id="product_section" class="hot_item">
        

    </section>
    <!-- login -->

    <!-- end login -->
    <footer class="footer">
        <div class="row">
            <div class="col span-2-of-4">
                <h3>BTEC STORE</h3>
                <ul>
                    <li>
                        <a href="https://www.google.com/maps/place/107+Nguy%E1%BB%85n+Phong+S%E1%BA%AFc,+D%E1%BB%8Bch+V%E1%BB%8Dng+H%E1%BA%ADu,+C%E1%BA%A7u+Gi%E1%BA%A5y,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0403351,105.7880043,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab36e43cf6eb:0xc420d35b1d1a47ac!8m2!3d21.0403351!4d105.790193?hl=vi-VN"><i class="fas fa-map-marker-alt"></i> 107 Nguyen Phong Sac, Dich Vong Hau, Cau Giay, Ha Noi</a>
                    </li>
                    <li><a href=""><i class="far fa-envelope"></i> BTECFPT@FPT.EDU.VN</a></li>
                    <li><a href=""><i class="fas fa-phone-square"></i> 01234567893</a></li>
                </ul>
            </div>
            <div class="col span-1-of-4">
                <h3>CUSTOMER SUPPORT</h3>
                <ul>
                    <li>SHOPPING GUIDE </li>
                    <li>PAYMENT GUIDE </li>
                    <li>RETURN POLICY </li>
                </ul>
            </div>
            <div class="col span-1-of-4">
                <h3>CONTACT US WITH</h3>
                <ul>
                    <li><a href="https://www.facebook.com/BTEC-STORE-104462988106601"><i class="fab fa-facebook-square"></i> FACEBOOK </a></li>
                    <li><a href="https://mail.google.com/mail/u/1/#inbox"><i class="far fa-envelope"></i> EMAIL </a></li>
                    <li><img src="https://goccuaphu.com/wp-content/uploads/2017/10/huong-dan-tao-tai-khoan-paypal-cho-nguoi-moi-tu-a-z.png" alt=""></li>

                </ul>
            </div>
        </div>
    </footer>`;