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
    </div>\
    
`;



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

component.homePage = `
    
    <p class="title">Hot products</p>
    <section id="product_section" class="hot_item">
    
    <!-- js code  đoạn này cũng thế-->

    </section>
    <!-- login -->

    <!-- end login -->
`;

component.headerHome = `
    <div class="home-container">
    <div id="welcome-header"></div>
    <button class="btn cursor-pointer" id="logOutBtn" onclick="model.signOutButton()" type="submit">log out</button>
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
            <li class= "homePage" onclick="model.homePageButton()">  <a href=""><img  src="IMG/logoshop.png" alt=""></a></li>
                
                <div class="search_box">
                    <input class="search_txt" type="text" name="" placeholder="Search..." />
                    <a class="search_btn" href="#">
                        <i class="fas fa-search small-icon" id="icon"></i>
                    </a>
                </div>
                <ul class="function_login">
                    <li><a href=""><i class="far fa-bell"></i></a></li>
                    <li><a href="" onclick="model.cartBtn()"><i class="fas fa-shopping-cart"></i><span id="cartNumbers"></span></a></li>
                    <li><a href="" class="login"><i class="fas fa-user"></i></a></li>
                </ul>
            </div>
            <!-- END MAIN HEADER -->
        </div>
    
        <div class="list">
            <ul class="main_nav">
                <li class= "homePage" onclick="model.homePageButton()"><a href="">Home</a></li>
                
                <li class="drop_down" onclick="model.allProductButton()"><a href="">Smartphones</a>
                    <ul id="subMenu" class="sub_menu">

                        <!-- js code, đoạn này vào view.js tìm -->

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
                <li><a href="/aboutus.html">About us</a></li>
                <hr>
            </ul>
        </div>
    </header>
    <!-- END HEADER -->
`;

component.footerHome = `
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
    </footer>
    `;

component.detailProduct = `
    <p id="path" class="path"></p>
    <section class="detail_product">
        <div class="row">
            <div class="col span-2-of-4">
                <div class="image_product">
                    <div id="slider">
                        <input type="radio" name="slider" id="slide1" checked>
                        <input type="radio" name="slider" id="slide2">
                        <input type="radio" name="slider" id="slide3">
                        <input type="radio" name="slider" id="slide4">
                        <div id="slides">
                            <div id="overflow">
                                <div id="innerImg" class="inner">
                                    <!--JS CODE-->
                                </div>
                            </div>
                        </div>
                        <div id="controls">
                            <label for="slide1"></label>
                            <label for="slide2"></label>
                            <label for="slide3"></label>
                            <label for="slide4"></label>
                        </div>
                        <div id="bullets">
                            <label for="slide1"></label>
                            <label for="slide2"></label>
                            <label for="slide3"></label>
                            <label for="slide4"></label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col span-2-of-4">
                <div id="inforProduct" class="infor_product">
                    <!--JS CODE-->
                    <div class="checkout">
                        <li><a href="#">ADD TO CART</a></li>
                    </div>
                </div>
            </div>
        </div>
        <div id="desProduct" class="descriptionProduct">
            <div class="des_video_container">
            <!--JS CODE-->
            </div>
            <div class="des_word">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aliquid blanditiis adipisci consectetur quisquam consequuntur reprehenderit corporis illo non dolore omnis deleniti, rem ipsa perferendis ipsam incidunt? Reprehenderit, culpa aut.</p>
            </div>
        </div>
        <!--relate product-->
        <div id="product_section" class="relate_product">
            <h3>RELATE PRODUCT</h3>
            
        </div>
        <!-- end relate product-->
    </section>
    <!-- login -->
    <!-- end login -->
    `;


component.allProduct = `
    <section id="product_section" class="hot_item">
        <div id="cateList">
            <ul id="categoryList">
            <!-- js code  đoạn này cũng thế-->
            </ul>
        </div>
    <!-- js code  đoạn này cũng thế-->

    </section>
    `;

component.cart = `
    
<section>
<div class="bath">
    <h1>CHECKOUT</h1>
    <p>HOME / CHECKOUT</p>
</div>
<div class="checkout">
    <div class="row">
        <div class="col span-3-of-6">
            <div class="billing_details">
                <div class="section_title">
                    <h3 class="title">BILLING ADDRESS</h3>
                </div>
                <div id="defaultAddress" class="default_address">
                    <div class="form_group">
                        <input class="input" type="text" name="name" placeholder="Name" required>
                    </div>
                    <div class="form_group">
                        <input class="input" type="email" name="email" placeholder="Email" required>
                    </div>
                    <div class="form_group">
                        <input class="input" type="text" name="address" placeholder="Address" required>
                    </div>
                    <div class="form_group">
                        <input class="input" type="text" name="city" placeholder="City" required>
                    </div>
                    <div class="form_group">
                        <input class="input" type="tel" name="phone" placeholder="Telephone" required>
                    </div>
                </div>
                <div class="other_address">
                    <div class="input_checkbox">
                        <input type="checkbox" id="myCheckAddress" onclick="view.checkboxAddress()"><br>
                        <a onclick="view.checkboxAddress()">Ship to a diffrent address?</a>
                    </div>
                    <form class="caption" id="otherAddress">
                        <div class="form_group">
                            <input class="input" type="text" name="name" placeholder="Name" required>
                        </div>
                        <div class="form_group">
                            <input class="input" type="text" name="address" placeholder="Address" required>
                        </div>
                        <div class="form_group">
                            <input class="input" type="text" name="city" placeholder="City" required>
                        </div>
                        <div class="form_group">
                            <input class="input" type="tel" name="phone" placeholder="Telephone" required>
                        </div>
                    </form>
                </div>
                <div class="bill_notes">
                    <input class="input" placeholder="Notes"></input required>
                </div>
            </div>
        </div>
        <div class="col span-3-of-6">
            <div class="order_detail">
                <div class="section_title">
                    <h3 class="title">ORDER DETAIL</h3>
                </div>
                <table class="order_detail_table">
                    <tbody>
                        <tr>
                            <td class="product_title_order">Product</td>
                            <td class="quantity_title_order">Quantity</td>
                            <td class="total_title_order">Total</td>
                        </tr>
                    </tbody>
                </table>
                <div class="scroll_table">
                    <table>
                        <tbody id="tbody">

                        </tbody>
                    </table>
                </div>
                <div class="shipping_order">
                    <p>Shipping: <span>3$</span></p>
                </div>
                <div id="totalOrder" class="total_order">
                    <p>Total: <span>1990$</span></p>
                </div>
                <div name="myForm" id="choosePayment" class="order_choose" >
                    <h4>Payment</h4>
                    <ul>
                        <li><input class="payment" name="payment" type="radio" value="cash" checked="true">CASH</li>
                        <li><input class="payment" name="payment" type="radio" value="paypal">PAYPAL</li>
                    </ul>
                </div>
                <div id="orderCheckout" class="order_checkout" type ="submit" onclick="">
                    <button id="cashBtn" class="paymentBtn"><a href="">CHECKOUT</a></button>
                    <div id="paypalBtn" class="paymentBtn" style = "display:none"  ></div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>`;