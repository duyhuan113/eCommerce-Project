const component = {};

component.homePage = `
<section class="main_page">
        <!--banner-->
        <div id="banner" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
                <li data-target="#banner" data-slide-to="0" class="active"></li>
                <li data-target="#banner" data-slide-to="1"></li>
                <li data-target="#banner" data-slide-to="2"></li>
                <li data-target="#banner" data-slide-to="3"></li>
            </ul>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="img/banner1.png" alt="1">
                </div>
                <div class="carousel-item">
                    <img src="img/banner2.png" alt="2">
                </div>
                <div class="carousel-item">
                    <img src="img/banner3.png" alt="3">
                </div>
                <div class="carousel-item">
                    <img src="img/banner4.png" alt="4">
                </div>
            </div>
            <a class="carousel-control-prev" href="#banner" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#banner" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div>
        <!--end banner-->
        <!--service-->
        <div class="service">
            <div class="row">
                <div class="col-sm-3">
                    <div class="title_service">
                        <img src="img/handholdingmoney.png" alt="">
                        <div>
                            <span>30 Days Return Policy</span>
                            <p>Sure money back</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="title_service">
                        <img src="img/box.png" alt="">
                        <div>
                            <span>Exclusive Products</span>
                            <p>Premium Products</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="title_service">
                        <img src="img/deliver.png" alt="">
                        <div>
                            <span>Express Delivery</span>
                            <p>Fast Delivery</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="title_service">
                        <p class="secure"><img src="img/sercurecheckout.png" alt=""></p>
                        <div class="sercurecheckout">
                            <span>Secure Checkout</span>
                            <p>Safe Checkout</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--end service-->
        <div class="show_products">
            <div class="hot_products">
                <div class="title">
                    <h1>New products</h1>
                    <span>New products launched during the month.</span>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="item newItem">
                            
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="item newItem">
                            
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="item newItem">
                            
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="item newItem">
                            
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="item newItem">
                            
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="item newItem">
                            
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="item newItem">
                            
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="item newItem">
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="top_sell">
                <div class="title">
                    <h1>TOP SELL</h1>
                    <span>Top selling products this month.</span>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="item topItem">
                            
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="item topItem">
                            
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="item topItem">
                            
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="item topItem">
                            
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="item topItem">
                            
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="item topItem">
                            
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="item topItem">
                            
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="item topItem">
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>

        </div>
    </section>
`;

component.headerAndFooter = `
<div id="app">
    <header class="header fixed-top">
    <!-- Topbar-->
        <div class="top_header topbar topbar-dark bg-dark">
            <ul class="title_top_header nav">
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fas fa-mobile-alt"></i><span> 0387798072</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="far fa-envelope"></i><span> BTECSTORE@FPT.EDU.VN</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fas fa-map-marker-alt"></i><span> 107 Nguyen Phong Sac, Dich
                            Vong Hau, Cau Giay, Ha Noi.</span></a>
                </li>
            </ul>
        </div>
        <div class="main_header navbar-sticky">
            <div class="title_main_header navbar navbar-expand-lg navbar-light">
                <div class="main_header_title container">
                    <a onclick ="view.setScreenBtn('homePage')" class="logo_img navbar-brand d-none d-sm-block mr-3 flex-shrink-0" href="index.html"><img
                            src="img/logoshop.png" alt=""></a>
                    <a class="logo_img_rps navbar-brand d-sm-none mr-2" href="index.html"><img src="img/logoshop.png"
                            alt=""></a>
                    <!---search--->
                    <div class="search_box input-group-overlay d-none d-lg-flex mx-4">
                        <input id="inputSearch" class="form-control" type="text" placeholder="Search" aria-label="Search">
                        <a id="searchBtn" class="search_btn"><i class="fas fa-search"></i></a>
                        <div id="searchrecmt" class="search_recmt">
                            <ul id="resultSearch">
                                <!-- JS-->
                            </ul>
                        </div>
                    </div>
                    <!--end search-->
                    <div class="header_funtion navbar-toolbar d-flex flex-shrink-0 align-items-center drop_down">
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse"><span><i class="fas fa-bars"></i></span></button>
                        <div id="profile" class="header_funtion_title navbar-tool-icon-box"><a ><i class="far fa-heart" data-toggle="modal" ></i><span class="navbar-tool-tooltip"></span></a>
                        </div>
                        <div class="header_funtion_title navbar-tool-icon-box " id="dropdownlogin" ><a href="" data-toggle="modal" data-target="#modal_login"><i class="far fa-user"></i>
                            <p class="navbar-tool d-none d-lg-flex"><span class="navbar-tool-tooltip"><small id="userName">Hello, Sign in</small></br>MY ACCOUNT</span></p></a>
                            
                            
                            <!-- show_funtion_login -->
                            <div class="show_funtion_login dropdown-menu" aria-labelledby="dropdownLogin">
                                <a id="dropDownProfile" class="dropdown-item"  ><i class="fas fa-user-circle"></i> MY ACCOUNT</a>
                                <a class="dropdown-item" onclick="view.signOutButton()"><i class="fas fa-sign-out-alt"></i> LOGOUT</a>
                            </div>
                            <!--end show_funtion_login -->
                        </div>
                        <div class="header_funtion_title header_cart navbar-tool-icon-box dropdown">
                                <a onclick="view.setScreenBtn('checkoutPage')" id="dropdownCart"><i class="fab fa-opencart"></i>
                                    <p class="navbar-tool d-none d-lg-flex "><span class="navbar-tool-tooltip"><small>My Cart</small></br><span class="cartTotal">0</span></p>
                                </a>
                            <div class="show_cart_header dropdown-menu" aria-labelledby="dropdownCart">
                                
                                <div id="subCartItem" class="header_product">
                                    <!-- JS CODE -->
                                </div>
                                <div class="header_checkout">
                                    <ul>
                                        <li class="header_total">GRAND TOTAL : <span class="cartTotal">0</span></li>
                                        <li class="header_funtion_checkout"><a ><button onclick="view.setScreenBtn('checkoutPage')" type="" class="btn btn-danger">CHECKOUT</button></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main_nav_show navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2">
            <div class="main_nav container">
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <!-- Search-->
                    <div class="input-group-overlay d-lg-none my-3">
                        <div class="input-group-prepend-overlay"><span class="input-group-text"><i
                                    class="czi-search"></i></span></div>
                        <input class="form-control prepended-form-control" type="text" placeholder="Search...">
                    </div>
                    <!-- Primary menu-->
                    <ul class="main_nav_title navbar-nav">
                        <li onclick ="view.setScreenBtn('homePage')" class=" nav-item"><a class="nav-link" href="#">Home</a></li>
                        <li id="navItemDropdown" onclick ="view.setScreenBtn('productPage')" class="nav-item dropdown"><a class="nav-link dropdown-toggle" 
                                data-toggle="dropdown">Products</a>
                            <ul id="subCategoryDropdown" class="dropdown-menu">
                                <!-- JS CODE -->
                            </ul>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="#">Service</a></li>
                        <li class="nav-item"><a class="nav-link" href="aboutus.html">About Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    </header>
    <!-- Modal login-->
    <div class="modal fade" id="modal_login" tabindex="-1" aria-labelledby="LoginLabel"
        aria-hidden="true">
        <div class=" modal-dialog modal_login_edit">
            <div class=" modal-content">
                <div class="modal_login_show modal-body">
                    <nav>
                        <div class="nav modal_title nav-tabs" id="nav-tab" role="tablist">
                            <a class="nav-item nav-link active popup_login_title"
                                id="nav-login-tab" data-toggle="tab" href="#nav-login"
                                role="tab" aria-controls="nav-login"
                                aria-selected="true">LOGIN</a>
                            <a class="nav-item nav-link popup_login_title" id="nav-register-tab"
                                data-toggle="tab" href="#nav-register" role="tab"
                                aria-controls="nav-register" aria-selected="false">REGISTER</a>
                        </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-login" role="tabpanel"
                            aria-labelledby="nav-login-tab">
                            <div class="modal_left">
                                <img src="img/login.png" alt=""></div>
                            <div class="modal_right">
                                <form id="loginForm" class="login_form">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="Enter email" required>
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" name="password" placeholder="Password" required>
                                    </div>
                                    <div class="forgot_pass">
                                        <a href="">Forgot your password?</a>
                                    </div>
                                    <button onclick="view.login(event)" id ="loginBtn" type="submit" class="btn btn-primary">SIGN IN</button>
                                    <div class="login_api">
                                        <ul>
                                            <li>
                                                <a onclick="model.loginWithFacebook()" ><i class="fab fa-facebook-square"></i></a>
                                            </li>
                                            <li>
                                                <a onclick="model.loginGoogleAccount()" ><i class="fab fa-google"></i></a>
                                            </li>
                                            <li>
                                                <a href=""><i class="fab fa-github"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="register tab-pane fade" id="nav-register" role="tabpanel"
                            aria-labelledby="nav-register-tab">
                            <div class="modal_left_register">
                                <img src="img/login.png" alt="">
                            </div>
                            <form id="registerForm">
                                <div class="modal_right_register">
                                    <div class="input-group mb-3">
                                        <span>Full Name :</span>
                                        <input name="name" type="text" class="form-control" placeholder="Fullname" aria-label="Fullname" aria-describedby="basic-addon1">
                                        <div class="error" id="name-error"></div>
                                    </div>
                                    <div class="input-group mb-3">
                                        <span>Phone :</span>
                                        <input name="phone" type="text" class="form-control" placeholder="Numberphone" aria-label="Numberphone"aria-describedby="basic-addon1">
                                        <div class="error" id="phone-error"></div>
                                    </div>
                                    <div class="input-group mb-3">
                                        <span>Email :</span>
                                        <input name="email" type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">
                                        <div class="error" id="email-error"></div>
                                    </div>
                                    <div class="input-group mb-3">
                                        <span>Address:</span>
                                        <input name="address" type="text" class="form-control" placeholder="Address" aria-label="Address" aria-describedby="basic-addon1">
                                        <div class="error" id="address-error"></div>
                                    </div>
                                    <div class="input-group mb-3">
                                        <span>Date Of Birth:</span>
                                        <input name="dob" type="date" class="form-control" aria-describedby="basic-addon1">
                                        <div class="error" id="dob-error"></div>
                                    </div>
                                    <div class=" input-group mb-3">
                                        <span>Gender:</span>
                                        <select>
                                            <option value=""></option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                        <div class="error" id="gender-error"></div>
                                    </div>
                                    <div class="input-group mb-3">
                                        <span>Password:</span>
                                        <input name="password" type="text" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
                                        <div class="error" id="password-error"></div>
                                    </div>
                                    <div class="input-group mb-3">
                                        <span>Retype Password:</span>
                                        <input name="confirmPw" type="text" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
                                        <div class="error" id="confirmPw-error"></div>
                                    </div>
                                    <button id="registerBtn" class="btn btn-warning" onclick="view.register(event)" type="button" >REGISTER</button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end modal login -->


    <footer class="footer">
    <div class="footer_title">
        <div class="row">
            <div class="col-sm-6 ">
                <h1>BTEC STORE</h1>
                <ul>
                    <li>
                        <a href=""><i class="fas fa-map-marker-alt"></i><span>107 Nguyen Phong Sac, Dich Vong Hau,
                                Cau Giay, Ha Noi.</span></a>
                    </li>
                    <li>
                        <a href=""><i class="fas fa-mobile-alt"></i><span>0387798072</span></a>
                    </li>
                    <li>
                        <a href=""><i class="far fa-envelope"></i><span>BTECSTORE@GMAIL.COM</span></a>
                    </li>
                </ul>

            </div>
            <div class="col-sm-3 ">
                <h1>Customer Support</h1>
                <ul>
                    <li>
                        <a href=""><i class="far fa-question-circle"></i><span> Shopping Guide</span></a>
                    </li>
                    <li>
                        <a href=""><i class="far fa-question-circle"></i><span> Payment Guide</span></a>
                    </li>
                    <li>
                        <a href=""><i class="far fa-question-circle"></i><span> Return Policy</span></a>
                    </li>
                </ul>
            </div>
            <div class="col-sm-3 ">
                <h1>Payment Methods</h1>
                <ul>
                    <li>
                        <a href=""><i class="fas fa-money-bill"></i><span> Cash On Delivery</span></a>
                    </li>
                    <li>
                        <a href=""><i class="fab fa-cc-paypal"></i><span> Payment Via Paypal</span></a>
                    </li>
                    <li>
                        <a href=""><img src="https://goccuaphu.com/wp-content/uploads/2017/10/huong-dan-tao-tai-khoan-paypal-cho-nguoi-moi-tu-a-z.png" alt=""></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="socialNetwork">
            <div class="row d-flex justify-content-center">
                <div class="col d-flex justify-content-center my-5 pt-1">
                    <a class="fb-ic" href="">
                        <i class="fab fa-facebook-f fa-lg white-text mx-3 mx-md-4 fa-2x"> </i>
                    </a>
                    <a class="tw-ic" href="">
                        <i class="fab fa-twitter fa-lg white-text mx-3 mx-md-4 fa-2x"> </i>
                    </a>
                    <a class="gplus-ic" href="">
                        <i class="fab fa-google-plus-g fa-lg white-text mx-3 mx-md-4 fa-2x"> </i>
                    </a>
                    <a class="li-ic" href="">
                        <i class="fab fa-linkedin-in fa-lg white-text mx-3 mx-md-4 fa-2x"> </i>
                    </a>
                    <a class="ins-ic" href="">
                        <i class="fab fa-instagram fa-lg white-text mx-3 mx-md-4 fa-2x"> </i>
                    </a>
                    <a class="pin-ic" href="">
                        <i class="fab fa-pinterest fa-lg white-text mx-3 mx-md-4 fa-2x"> </i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</div>

`;

component.detailProduct = `
<section class="main_page">
    <!--bath-->
    <nav class="bath" aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="bath_edit breadcrumb-item"><a onclick ="view.setScreenBtn('homePage')" href="">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Products</a></li>
            <li class="breadcrumb-item active" aria-current="page"></li>
        </ol>
    </nav>
    <!--end bath-->
    <div class="show_products">
        <div class="detail_product">
            <div class="container-fliud">
                <div id="wrapperDetail" class="wrapper row">
                    
                </div>
            </div>
        </div>
    </div>
    <!--decripsion of product-->
    <div id="descriptionDetail" class="description_product">
        <h3>DESCRIPTION OF PRODUCT</h3>
        <div class="description_infor">
            
        </div>
    </div>

    <!--end decripsion of product-->
    <!--relate product-->
    <div class="relate_product">
        <h3>RELATE PRODUCT</h3>
        <div id="relateItem" class="row">
            <div class="col-sm-3">
                <div class="item itemRelate">
                     
                </div>
            </div>
            <div class="col-sm-3">
                <div class="item itemRelate">
                    
                </div>
            </div>
            <div class="col-sm-3">
                <div class="item itemRelate">
                    
                </div>
            </div>
            <div class="col-sm-3">
                <div class="item itemRelate">
                    
                </div>
            </div>
        </div>
    </div>
    <!-- end relate product-->
    </div>
    </div>
</section>
`;

component.productPage = `
<section class="main_page">
    <!--bath-->
    <nav class="bath" aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="bath_edit breadcrumb-item"><a onclick ="view.setScreenBtn('homePage')" href="">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Products</a></li>
            <li class="breadcrumb-item active" aria-current="page">Brand</li>
        </ol>
    </nav>
    <!--banner-->
    <div id="banner" class="carousel slide" data-ride="carousel">
        <ul class="carousel-indicators">
            <li data-target="#banner" data-slide-to="0" class="active"></li>
            <li data-target="#banner" data-slide-to="1"></li>
            <li data-target="#banner" data-slide-to="2"></li>
            <li data-target="#banner" data-slide-to="3"></li>
        </ul>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="img/banner1.png" alt="1">
            </div>
            <div class="carousel-item">
                <img src="img/banner2.png" alt="2">
            </div>
            <div class="carousel-item">
                <img src="img/banner3.png" alt="3">
            </div>
            <div class="carousel-item">
                <img src="img/banner4.png" alt="4">
            </div>
        </div>
        <a class="carousel-control-prev" href="#banner" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#banner" data-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>
    </div>
    <!--end banner-->

    <div class="show_brand">
        <div class="row">
            <div class="col-sm-3">
                <div class="filter_categories">
                    <h1>CATEGORIES</h1>
                    <form id="categoryName">
                        
                        
                    </form>
                    <h1>PRICE</h1>
                    <form>
                        <input type="radio" id="50-100$" name="price" value="iphone">
                        <label for="50-100$">50-100$</label><br>
                        <input type="radio" id="100-500$" name="price" value="100-500$">
                        <label for="100-500$">100-500$</label><br>
                        <input type="radio" id="500-1000$" name="price" value="500-1000$">
                        <label for="500-1000$">500-1000$</label><br>
                        <input type="radio" id="1000-1500$" name="price" value="1000-1500$">
                        <label for="1000-1500$">1000-1500$</label><br>
                        <input type="radio" id="over" name="price" value="over">
                        <label for="over">Over 1500$</label>
                    </form>
                    <!-- <h1>TOP SELLING</h1>
                    <div class="top_selling_brand">
                        <ul>
                            <li><a href=""></a></li>
                            <li><a href=""></a></li>
                            <li><a href=""></a></li>
                        </ul>
                    </div> -->
                </div>
            </div>
            <div class="col-sm-9">
                <div class="filter_right">
                    <h1>BRAND</h1>
                    <div  class="select_img_brand">
                        <ul id="categoryLogo">
                        </ul>
                    </div>
                </div>
                <div class="show_br">
                    <div id="productList" class="show_product_brand">
                        
                    </div>
                </div>
                <div id="viewMoreBtn" class="pagination_page">
                    <button type="button" class="btn btn-outline-secondary">View More<i class="fas fa-sort-down"></i></button>
                </div>
            </div>
        </div>
    </div>
</section>`;

component.checkoutPage = `
<!-- Modal_suggested_login-->
    <div class="modal fade" id="modal_suggessted_login" tabindex="-1" role="dialog" aria-labelledby="suggesstedLoginLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content suggessted_edit">
                <div class="suggessted modal-body">
                    <div class="main_suggessted">
                        <img src="img/planet_4x.png" alt="">
                        <p>You can log in to be able to make purchases with our store membership deals or skip this step!</p>
                    </div>
                    <div class="function_suggessted">
                        <button type="button" class="btn btn-success btn_fct btn_login" data-toggle="modal" data-target="#modal_login" data-dismiss="modal">LOGIN</button>
                        <button onclick="view.removeSuggestLogin()" type="button" class="btn btn-warning btn_fct btn_skip" data-dismiss="modal">SKIP</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
<section class="main_page">
    <!--bath-->
    <nav class="bath" aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="bath_edit breadcrumb-item"><a onclick ="view.setScreenBtn('homePage')" href="">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Cart</li>
        </ol>
    </nav>
    <div class="checkout">
        <div class="row">
            <div class="col span-3-of-6">
                <div class="billing_details">
                    <form id="defaultAddress" class="chooseAddress" value="default">
                        
                    </form>
                    <div class="shiping_details">
                        <div class="section_title">
                            <h3 class="title">SHIPING ADDRESS</h3>
                        </div>
                        <div class="input_checkbox">
                            <a class="shipTo" onclick="otherAddress()">Ship to a diffrent address?</a>
                            <form class="caption" id="otherAddress" value="other">
                                <div class="form_group">
                                    <input class="input" type="text" name="name" placeholder="Name">
                                    <div id="name-error"></div>
                                </div>
                                <div class="form_group">
                                    <input class="input" type="email" name="email" placeholder="Email">
                                    <div id="email-error"></div>
                                </div>
                                <div class="form_group">
                                    <input class="input" type="text" name="address" placeholder="Address">
                                    <div id="address-error"></div>
                                </div>
                                <div class="form_group">
                                    <input class="input" type="tel" name="phone" placeholder="Telephone">
                                    <div id="phone-error"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="bill_notes">
                        <input id="noteBill" class="input" placeholder="Notes"></input required>
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
                            <tbody id="tbodyCartItem">
                                <!-- JS CODE -->
                            </tbody>
                        </table>
                    </div>
                    <div class="shipping_order">
                        <p>Shipping: <span>$ 0</span></p>
                    </div>
                    <div class="total_order">
                        <p>Grand Total: <span class="cartTotal">$ 0</span></p>
                    </div>
                    <div class="total_order">
                        <p>Discount Total ( %): <span id="discountTotal">$ 0</span></p>
                    </div>
                    <div class="payment">
                        <ul>
                            <li><button data-toggle="modal" data-target="#modal_suggessted_login" id="cashPayment" class="btn btn-warning" onclick="view.paymentBtn('cash')" type="button">PAYMENT IN CASH</button></li>
                            <li><button data-toggle="modal" data-target="#modal_suggessted_login" id="paypalPayment" class="btn btn-primary" onclick="view.paymentBtn('paypal')" type="button">PAYMENT VIA PAYPAL</button></li>
                        </ul>
                    </div>
                    <div class="order_checkout">
                        <div id="paypalBtn" class="" style="display:none;width: 86.5%;margin-left: 5%;height: 4rem;font-weight: 600;font-size: 20px;border: 1px solid red;"></div>
                        <button id="cashBtn" onclick="view.createBill('cash')" style="display:none" class="btn btn-danger type="button" onclick="view.getAddressForm()">CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`;

component.profilePage =`
    <section class="main_page ">
        <!--bath-->
        <nav class="bath" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="bath_edit breadcrumb-item"><a onclick ="view.setScreenBtn('homePage')" href="">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">My Account</li>
            </ol>
        </nav>
        <div class="infor_account ">
            <div class="row">
                <div class="funtion_account col-3">
                    <div class="nav_funtion nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a class="color_nav_link nav-link active" id="v-pills-account-tab" data-toggle="pill" href="#v-pills-account" role="tab" aria-controls="v-pills-account" aria-selected="true">MY ACCOUNT</a>
                        <a class="color_nav_link nav-link" id="v-pills-address-tab" data-toggle="pill" href="#v-pills-address" role="tab" aria-controls="v-pills-address" aria-selected="false">MY ADDRESS</a>
                        <a class="color_nav_link nav-link" id="v-pills-order-tab" data-toggle="pill" href="#v-pills-order" role="tab" aria-controls="v-pills-order" aria-selected="false">MY ORDERS</a>
                    </div>
                </div>
                <div class="show_funtion_account col-9">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-account" role="tabpanel" aria-labelledby="v-pills-account-tab">
                            <div class="show_infor_account mt-3 ">
                                <div class="input-group mb-3 ">
                                    <div class="input-group-prepend ">
                                        <span class="input-group-text ">Username:</span>
                                    </div>
                                    <input type="text " class="form-control " placeholder="Username " id="usr " name="username ">
                                </div>
                                <div class="input-group mb-3 ">
                                    <div class="input-group-prepend ">
                                        <span class="input-group-text ">Phonenumber:</span>
                                    </div>
                                    <input type="text " class="form-control " placeholder="Phonenumber " id="phone " name="Phonenumber ">
                                </div>
                                <div class="input-group mb-3 ">
                                    <div class="input-group-prepend ">
                                        <span class="input-group-text ">Email:</span>
                                    </div>
                                    <input type="text " class="form-control " placeholder="Email " id="email " name="Email ">
                                </div>
                                <div class="input-group mb-3 ">
                                    <div class="input-group-prepend ">
                                        <span class="input-group-text ">Date Of Birth:</span>
                                    </div>
                                    <input type="date " class="form-control " placeholder="Date Of Birth " id="usr " name="birth ">
                                </div>
                                <div class="input-group mb-3 ">
                                    <div class="input-group-prepend ">
                                        <span class="input-group-text ">Gender:</span>
                                    </div>
                                    <select class="form-control " id="gender ">
                                        <option value="gender ">Male</option>
                                        <option value="gender ">Female</option>
                                    </select>
                                </div>

                                <button type="submit " class="btn btn-primary ">SUBMIT</button>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-address" role="tabpanel" aria-labelledby="v-pills-address-tab">
                            <ul class="address_account ">
                                <li class="add_new_address" data-toggle="modal" data-target="#add_newAddress"><i class="far fa-plus-square "></i><span>ADD NEW ADDRESS</span>
                                    <div class="modal fade" id="add_newAddress" tabindex="-1" role="dialog" aria-labelledby="addNew_address" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="addNew_address">ADD NEW ADDRESS</h5>
                                                </div>
                                                <div class="modal-body">
                                                    ...
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-primary">CONFIRM</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </li>
                                <li class="default_address list_address ">
                                    <div class="infor_address ">
                                        <h1>TRAN THANH TUNG <span><i class="far fa-check-circle "></i>DEFAULT ADDRESS</span></h1>
                                        <table>
                                            <tbody>
                                                <tr class="title_infor ">
                                                    <th>Address:</th>
                                                    <td>107 Nguyen Phong Sac, Dich Vong Hau, Cau Giay, Ha Noi.</td>
                                                </tr>
                                                <tr class="title_infor ">
                                                    <th>Phonenumber:</th>
                                                    <td>0123456789</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="function_address">
                                        <button type="button" class="btn btn-warning">UPDATE</button>
                                        <button type="button" class="btn btn-danger">DELETE</button>
                                    </div>
                                </li>
                                <li class="list_address ">
                                    <div class="infor_address ">
                                        <h1>TRAN THANH TUNG</h1>
                                        <table>
                                            <tbody>
                                                <tr class="title_infor ">
                                                    <th>Address:</th>
                                                    <td>107 Nguyen Phong Sac, Dich Vong Hau, Cau Giay, Ha Noi.</td>
                                                </tr>
                                                <tr class="title_infor ">
                                                    <th>Phonenumber:</th>
                                                    <td>0123456789</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="function_address">
                                        <button type="button" class="btn btn-warning">UPDATE</button>
                                        <button type="button" class="btn btn-danger">DELETE</button>
                                    </div>
                                </li>
                                <li class="list_address ">
                                    <div class="infor_address ">
                                        <h1>TRAN THANH TUNG</h1>
                                        <table>
                                            <tbody>
                                                <tr class="title_infor ">
                                                    <th>Address:</th>
                                                    <td>107 Nguyen Phong Sac, Dich Vong Hau, Cau Giay, Ha Noi.</td>
                                                </tr>
                                                <tr class="title_infor ">
                                                    <th>Phonenumber:</th>
                                                    <td>0123456789</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="function_address">
                                        <button type="button" class="btn btn-warning">UPDATE</button>
                                        <button type="button" class="btn btn-danger">DELETE</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="v-pills-order" role="tabpanel" aria-labelledby="v-pills-order-tab">
                            <table class="infor_orders table ">
                                <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Date Of Purchase</th>
                                        <th class="list_product_orders ">Products</th>
                                        <th>Grand Total</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody class="list_orders ">
                                    <tr>
                                        <td><a href="" data-toggle="modal" data-target="#show_detail_order">#111111</a>
                                            <!-- Modal -->
                                            <div class="modal fade " id="show_detail_order" tabindex="-1 " aria-labelledby="detail_order" aria-hidden="true ">
                                                <div class=" modal-dialog modal_edit ">
                                                    <div class=" modal-content modal_color ">
                                                        <div class="modal-header modal_header_color ">
                                                            <h5 class="modal-title " id="detail_order">STATUS ORDER:<span>Delivered</span></h5>

                                                        </div>
                                                        <div class=" modal-body ">
                                                            <div class="popup_detail_order container ">
                                                                <h2>DETAIL ORDER: <span>#11111111</span></h2>
                                                                <p>Order date: <span>07/11/2020</span></p>
                                                                <div class="infor_detail_order container-fluid ">
                                                                    <div class="row ">
                                                                        <div class="detail_infor_order col ">
                                                                            <ul>
                                                                                <li>
                                                                                    <p>RECEIVER'S ADDRESS</p>
                                                                                </li>
                                                                                <li class="infor_cus ">
                                                                                    <h1>TRAN THANH TUNG</h1>
                                                                                    <h2>Address:
                                                                                        <Span>107 Nguyen Phong Sac, Dich Vong Hau, Cau Giay, Ha Noi.</Span>
                                                                                    </h2>
                                                                                    <h2>Phonenumber:<span>0123456789</span></h2>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="detail_infor_order col ">
                                                                            <ul>
                                                                                <li>
                                                                                    <p>FORM OF DELIVERY</p>
                                                                                </li>
                                                                                <li class="infor_cus ">
                                                                                    <p>FREESHIP</p>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="detail_infor_order col ">
                                                                            <ul>
                                                                                <li>
                                                                                    <p>PAYMENT METHOD</p>
                                                                                </li>
                                                                                <li class="infor_cus ">
                                                                                    <p>CASH PAYMENT ON RECEIPT OF GOODS</p>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <table class="modal_tbl table ">
                                                                    <thead>
                                                                        <tr>
                                                                            <th class="modal_prd ">PRODUCTS</th>
                                                                            <th class="modal_prd_inf ">PRICE</th>
                                                                            <th class="modal_prd_inf ">QUANTITY</th>
                                                                            <th class="modal_prd_inf ">SALE</th>
                                                                            <th class="modal_prd_inf ">TOTAL</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>SAMSUNG GALAXY NOTE 20 ULTRA</td>
                                                                            <td>$4000</td>
                                                                            <td>3</td>
                                                                            <td>$0</td>
                                                                            <td>$12000</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>SAMSUNG GALAXY NOTE 20 ULTRA</td>
                                                                            <td>$4000</td>
                                                                            <td>3</td>
                                                                            <td>$0</td>
                                                                            <td>$12000</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>SAMSUNG GALAXY NOTE 20 ULTRA</td>
                                                                            <td>$4000</td>
                                                                            <td>3</td>
                                                                            <td>$0</td>
                                                                            <td>$12000</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>SAMSUNG GALAXY NOTE 20 ULTRA</td>
                                                                            <td>$4000</td>
                                                                            <td>3</td>
                                                                            <td>$0</td>
                                                                            <td>$12000</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>SAMSUNG GALAXY NOTE 20 ULTRA</td>
                                                                            <td>$4000</td>
                                                                            <td>3</td>
                                                                            <td>$0</td>
                                                                            <td>$12000</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div class="modal_footer modal-footer ">
                                                            <button type="button " class="btn btn-dark" data-dismiss="modal">CONFIRM</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>20/11/2020</td>
                                        <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam delectus dolorem asperiores maiores commodi, ducimus recusandae hic impedit, facere eius vero unde dolorum esse ex? Veritatis, fuga. Vel, neque nam?</td>
                                        <td>$5000</td>
                                        <td>Delivered</td>
                                    </tr>
                                    <tr>
                                        <td><a href=" ">#111111</a></td>
                                        <td>20/11/2020</td>
                                        <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam delectus dolorem asperiores maiores commodi, ducimus recusandae hic impedit, facere eius vero unde dolorum esse ex? Veritatis, fuga. Vel, neque nam?</td>
                                        <td>$5000</td>
                                        <td>Delivered</td>
                                    </tr>
                                    <tr>
                                        <td><a href=" ">#111111</a></td>
                                        <td>20/11/2020</td>
                                        <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam delectus dolorem asperiores maiores commodi, ducimus recusandae hic impedit, facere eius vero unde dolorum esse ex? Veritatis, fuga. Vel, neque nam?</td>
                                        <td>$5000</td>
                                        <td>Delivered</td>
                                    </tr>
                                    <tr>
                                        <td><a href=" ">#111111</a></td>
                                        <td>20/11/2020</td>
                                        <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam delectus dolorem asperiores maiores commodi, ducimus recusandae hic impedit, facere eius vero unde dolorum esse ex? Veritatis, fuga. Vel, neque nam?</td>
                                        <td>$5000</td>
                                        <td>Delivered</td>
                                    </tr>
                                    <tr>
                                        <td><a href=" ">#111111</a></td>
                                        <td>20/11/2020</td>
                                        <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam delectus dolorem asperiores maiores commodi, ducimus recusandae hic impedit, facere eius vero unde dolorum esse ex? Veritatis, fuga. Vel, neque nam?</td>
                                        <td>$5000</td>
                                        <td>Delivered</td>
                                    </tr>
                                    <tr>
                                        <td><a href=" ">#111111</a></td>
                                        <td>20/11/2020</td>
                                        <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam delectus dolorem asperiores maiores commodi, ducimus recusandae hic impedit, facere eius vero unde dolorum esse ex? Veritatis, fuga. Vel, neque nam?</td>
                                        <td>$5000</td>
                                        <td>Delivered</td>
                                    </tr>
                                    <tr>
                                        <td><a href=" ">#111111</a></td>
                                        <td>20/11/2020</td>
                                        <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam delectus dolorem asperiores maiores commodi, ducimus recusandae hic impedit, facere eius vero unde dolorum esse ex? Veritatis, fuga. Vel, neque nam?</td>
                                        <td>$5000</td>
                                        <td>Delivered</td>
                                    </tr>
                                    <tr>
                                        <td><a href=" ">#111111</a></td>
                                        <td>20/11/2020</td>
                                        <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam delectus dolorem asperiores maiores commodi, ducimus recusandae hic impedit, facere eius vero unde dolorum esse ex? Veritatis, fuga. Vel, neque nam?</td>
                                        <td>$5000</td>
                                        <td>Delivered</td>
                                    </tr>
                                    <tr>
                                        <td><a href=" ">#111111</a></td>
                                        <td>20/11/2020</td>
                                        <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam delectus dolorem asperiores maiores commodi, ducimus recusandae hic impedit, facere eius vero unde dolorum esse ex? Veritatis, fuga. Vel, neque nam?</td>
                                        <td>$5000</td>
                                        <td>Delivered</td>
                                    </tr>
                                    <tr>
                                        <td><a href=" ">#111111</a></td>
                                        <td>20/11/2020</td>
                                        <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam delectus dolorem asperiores maiores commodi, ducimus recusandae hic impedit, facere eius vero unde dolorum esse ex? Veritatis, fuga. Vel, neque nam?</td>
                                        <td>$5000</td>
                                        <td>Delivered</td>
                                    </tr>
                                    <tr>
                                        <td><a href=" ">#111111</a></td>
                                        <td>20/11/2020</td>
                                        <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam delectus dolorem asperiores maiores commodi, ducimus recusandae hic impedit, facere eius vero unde dolorum esse ex? Veritatis, fuga. Vel, neque nam?</td>
                                        <td>$5000</td>
                                        <td>Delivered</td>
                                    </tr>
                                    <tr>
                                        <td><a href=" ">#111111</a></td>
                                        <td>20/11/2020</td>
                                        <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam delectus dolorem asperiores maiores commodi, ducimus recusandae hic impedit, facere eius vero unde dolorum esse ex? Veritatis, fuga. Vel, neque nam?</td>
                                        <td>$5000</td>
                                        <td>Delivered</td>
                                    </tr>
                                    <tr>
                                        <td><a href=" ">#111111</a></td>
                                        <td>20/11/2020</td>
                                        <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam delectus dolorem asperiores maiores commodi, ducimus recusandae hic impedit, facere eius vero unde dolorum esse ex? Veritatis, fuga. Vel, neque nam?</td>
                                        <td>$5000</td>
                                        <td>Delivered</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

`

component.billPage =`
<div class="bill">
    <div class="show_bill">
        <div class="bill_header">
            <img src="img/logoshop.png" alt="">
        </div>
        <div class="main_bill row">
            <div class="main_bill_infor col-8">
                <div class="bill_title">
                    <div class="main_bill-icon">
                        <i class="far fa-check-circle"></i>
                    </div>
                    <div class="main_bill-title">
                        <h4>THANK YOU FOR YOUR ORDERS</h4>
                        <span id="confirmEmail">A confirmation email has been sent</span>
                        <span>Please check your email!</span>
                    </div>
                </div>
                <div class="infor_order_bill">
                    <div class="row">
                        <div id="inforOrder" class="col infor-customer">
                            
                        </div>
                        <div id="inforAddress" class="col infor-customer">
                            
                        </div>
                    </div>
                    <div class="row">
                        <div class="col infor-customer">
                            <h5>PAYMENT MEDTHOD</h5>
                            <span id="paymentMethod">Payment by </span>
                        </div>
                        <div class="col infor-customer">
                            <h5>SHIPPING METHOD</h5>
                            <span>Cash On Delivery</span>
                        </div>
                    </div>
                </div>
                <div class="bill_function">
                    <button onclick="view.setScreenBtn('homePage')" type="button" class="btn btn-success">Continue shopping</button>
                    <button type="button" class="btn btn-warning" onclick="window.print()"><i class="fas fa-print"></i>PRINT</button>
                </div>
            </div>
            <div class="infor_bill col-4">
                <div class="infor_bill_header" id="billId"><span>ORDER: #</span></div>
                <div class="infor_bill_show">
                    <ul id="listItem">
                        
                    </ul>
                </div>
                <div class="infor_bill_grandTotal">
                    <div class="total_all_pr">
                        <p  class="title_grand">Total :<span id="total">$ 0</span></p>
                    </div>
                    <div class="shipping_bill">
                        <p class="title_grand">Shipping :<span>FREESHIP</span></p>
                    </div>
                    <div class="grandTotal_bill">
                        <p class="title_grand">Grand total :<span id="grandTotal">$ 0</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>  
`;