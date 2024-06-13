const header = ({ title, description, keywords }) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${description}">
    <meta name="keywords" content="${keywords}">
    <title>${title}</title>
    <link href="/libs/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
  
    <link rel="shortcut icon" href="/assets/images/site_logo/favourite_icon.svg">

    <!-- Fraimwork - CSS Include -->
   

    <!-- Icon - CSS Include -->
    <link rel="stylesheet" type="text/css" href="/assets/css/fontawesome.css">

    <!-- Animation - CSS Include -->
    <link rel="stylesheet" type="text/css" href="/assets/css/animate.min.css">

    <!-- Carousel - CSS Include -->
    <link rel="stylesheet" type="text/css" href="/assets/css/swiper-bundle.min.css">

    <!-- Video & Image Popup - CSS Include -->
    <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.min.css">

    <!-- Counter - CSS Include -->
    <link rel="stylesheet" type="text/css" href="/assets/css/odometer.min.css">

    <!-- Custom - CSS Include -->
    <link rel="stylesheet" type="text/css" href="/assets/css/style.css">
   
</head>
<body>
<!-- Body Wrap - Start -->
<div class="page_wrapper">

  <!-- Back To Top - Start -->
  <div class="backtotop">
    <a href="#" class="scroll">
      <i class="fa-solid fa-arrow-up"></i>
    </a>
  </div>
  <!-- Back To Top - End -->

  <!-- Preloader - Start -->
  <div id="preloader">
    <div class="loader_line"></div>
  </div>
  <!-- Preloader - End -->

  <!-- Site Header - Start
  ================================================== -->
  <header class="site_header">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8 col-6 d-flex align-items-center">
          <div class="site_logo">
            <a class="site_link" href="/">
              <img loading="lazy" src="/assets/images/site_logo/site_logo.svg" alt="Site Logo – RankUpFast - SEO and Digital Marketing Agency Site Template">
            </a>
          </div>
          <nav class="main_menu navbar navbar-expand-lg">
            <div class="main_menu_inner collapse navbar-collapse" id="main_menu_dropdown">
              <ul class="main_menu_list unordered_list">
                <li>
                  <a class="nav-link" href="/seo360">SEO360</a>
                </li>
                <li class="dropdown">
                  <a class="nav-link" href="#" id="guides_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Guides
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="guides_submenu">
                    <li><a class="nav-link" href="/seo-dictionary">SEO Dictionary</a></li>
                    <li class="dropdown">
                      <a class="nav-link" href="#" id="blog_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Blogs & Articles
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="blog_submenu">
                        <li><a class="nav-link" href="/blog">Blogs Page</a></li>
                        <li><a class="nav-link" href="/blog_details">Blogs Single</a></li>
                      </ul>
                    </li>
                    <li class="dropdown">
                      <a class="nav-link" href="#" id="service_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="service_submenu">
                        <li><a class="nav-link" href="/service">Our Services</a></li>
                        <li><a class="nav-link" href="/service_details">Services Single</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a class="nav-link" href="#" id="cases_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Cases
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="cases_submenu">
                    <li><a class="nav-link" href="/cases">Our Cases</a></li>
                    <li><a class="nav-link" href="case_study_details.html">Cases Single</a></li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a class="nav-link" href="#" id="help_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Help
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="help_submenu">
                    <li><a class="nav-link" href="about.html">About Us</a></li>
                    <li><a class="nav-link" href="contact.html">Help Center</a></li>
                    <li><a class="nav-link" href="career.html">Career</a></li>
                    <li class="dropdown">
                      <a class="nav-link" href="#" id="team_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        SEO Specialist
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="team_submenu">
                        <li><a class="nav-link" href="team.html">Our Team</a></li>
                        <li><a class="nav-link" href="team_details.html">Team Single</a></li>
                      </ul>
                    </li>
                    <li><a class="nav-link" href="faq.html">F.A.Q.</a></li>
                    <li class="dropdown">
                      <a class="nav-link" href="#" id="myaccount_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        My Account
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="myaccount_submenu">
                        <li><a class="nav-link" href="signin.html">Login Account</a></li>
                        <li><a class="nav-link" href="signup.html">Create Account</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a class="nav-link" href="pricing.html">Pricing</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div class="col-lg-4 col-6">
          <ul class="header_btns_group unordered_list justify-content-end">
            <li>
              <button class="mobile_menu_btn" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
                <i class="far fa-bars"></i>
              </button>
            </li>
            <li>
              <a class="register_btn" href="signin.html">
                <span class="btn_icon">
                  <i class="fa-regular fa-user"></i>
                </span>
                <span class="btn_text">Sign In</span>
              </a>
            </li>
            <li>
              <a class="btn btn-primary" href="contact.html">
                <span class="btn_text">Get In Touch</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <!-- Site Header - End
  ================================================== -->
`;

// Ensure footer is defined as a string
const footer = () => `
     <!-- Site Footer - Start
      ================================================== -->
      <footer class="site_footer">
        <div class="container">
          <div class="site_footer_content">
            <div class="row">
              <div class="col-lg-3">
                <div class="site_logo">
                  <a class="site_link" href="home.html">
                    <img loading="lazy" src="/assets/images/site_logo/site_logo.svg" alt="Site Logo – RankUpFast - SEO and Digital Marketing Agency Site Template">
                  </a>
                </div>
                <p class="pe-lg-4 mb-4">
                  Our emphasis is on SEO services as a Scandinavian digital marketing agency.
                </p>
                <ul class="social_icon unordered_list">
                  <li><a aria-label="Facebook" href="#!"><i class="fa-brands fa-facebook-f"></i></a></li>
                  <li><a aria-label="Twitter" href="#!"><i class="fa-brands fa-twitter"></i></a></li>
                  <li><a aria-label="Linkedin" href="#!"><i class="fa-brands fa-linkedin-in"></i></a></li>
                  <li><a aria-label="Instagram" href="#!"><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-md-4 col-sm-4">
                    <div class="footer_useful_links">
                      <h3 class="footer_info_title">Services</h3>
                      <ul class="icon_list unordered_list_block">
                        <li><a href="service_details.html">Social Marketing</a></li>
                        <li><a href="service_details.html">SEO Optimization</a></li>
                        <li><a href="service_details.html">One-Page SEO</a></li>
                        <li><a href="service_details.html">Content Marketing</a></li>
                        <li><a href="service_details.html">Email Marketing</a></li>
                        <li><a href="service_details.html">Keyword Research</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <div class="footer_useful_links">
                      <h3 class="footer_info_title">Useful Links</h3>
                      <ul class="icon_list unordered_list_block">
                        <li><a href="seo360.html">SEO360</a></li>
                        <li><a href="pricing.html">Pricing Plans</a></li>
                        <li><a href="cases.html">Success Cases</a></li>
                        <li><a href="contact.html">Help Center</a></li>
                        <li><a href="career.html">Career <span class="badge text-primary bg-primary-subtle">We're Hiring</span></a></li>
                        <li><a href="blog.html">Our Blogs</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <div class="footer_contact_links">
                      <h3 class="footer_info_title">Contact Us</h3>
                      <ul class="icon_list unordered_list_block">
                        <li>
                          1989 Timber Ridge Road Sacramento CA, California
                        </li>
                        <li>
                          <a href="tel:+8801680636189">
                            <u>+8801 680 6361 89</u>
                          </a>
                        </li>
                        <li>
                          <a href="mailto:contact@site.com">
                            <u>contact@site.com</u>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="ps-lg-2">
                  <h3 class="footer_info_title">Newsletter</h3>
                  <p>
                    Get the perfect SEO replace and subscribe to our newsletter
                  </p>
                  <form class="form-group mb-0" action="#">
                    <input class="form-control mb-2 shadow-none" type="email" name="newsletterEmail" placeholder="Email Address">
                    <button type="submit" class="btn btn-dark w-100 d-block">
                      <span class="btn_text">Subscribe</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="copyright_text text-center">
            <p class="mb-0">
              © 2024 Copyrights by <b>RankUpFast</b>. All Rights Reserved. Produced by <a target="_blank" href="https://themeforest.net/user/web-thunder/portfolio"><strong class="text-dark">WebThunder</strong></a>
            </p>
          </div>
        </div>
      </footer>
      <!-- Site Footer - End
      ================================================== -->

    </div>
    <!-- Body Wrap - End -->
  <script src="/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
   <script src="/assets/js/jquery.min.js"></script>
    <script src="/assets/js/popper.min.js"></script>
    // <script src="/assets/js/bootstrap.min.js"></script>
    <script src="/assets/js/bootstrap-dropdown-ml-hack.min.js"></script>

    <!-- Carousel - Jquery Include -->
    <script src="/assets/js/swiper-bundle.min.js"></script>

    <!-- Video & Image Popup - Jquery Include -->
    <script src="/assets/js/magnific-popup.min.js"></script>
    
    <!-- Counter - Jquery Include -->
    <script src="/assets/js/appear.min.js"></script>
    <script src="/assets/js/odometer.min.js"></script>

    <!-- Custom - Jquery Include -->
    <script src="/assets/js/main.js"></script>
</body>
</html>
`;

module.exports = { header, footer };
