import Head from "next/head";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { useEffect } from "react";
import { getCourses } from "../redux/actions/Home";
import Image from 'next/image';
import Link from 'next/link';
const Home = ({ courses, error, isLoading, actionGetCourses }) => {
    useEffect(() => {
        actionGetCourses();
    }, []);
    return (
<div>
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                
            </Head>
        </div>
<div className="tong">
        <div className="dau">
            <nav className="navbar navbar-expand-md navbar-fixed-top"/>
                <a href="#" className="navbar-brand mx-4 col" 
                style={{
                    width: '660px',
                    height: '50px',
                    paddingTop: '0',
                    float: "left"}}>
                <ion-icon className="bathanh" name="menu" 
                style={{
                    color: "white",
                    width: '35px',
                    height: '35px',
                }}></ion-icon>
                </a>
            <p className="text-white col" 
                style={{ 
                    width: '230px',
                    height: '26px', 
                    float: "right",
                    fontSize: '12px'}}>
            Bạn chưa đăng nhập. (<u><a href="dangnhap.html" className="card-link text-white">Đăng nhập</a></u>)</p>
        </div>
        <div className="dau1">
            <div className="navbar navbar-expand-md mt-1">
            <img src="New Project.png" className=" rounded float-start mx-5" width={300} height={150}/>
            <div className="dropdown">
                <button className="dropbtn">VIETNAMESE(VI)<ion-icon name="caret-down-outline"></ion-icon></button>
                <div className="dropdown-content">
                    <a href="indexE.html">English(en)</a>
                    <a href="#">Vietnamese(vn)</a>
                </div>
            </div>
        </div>    
    </div>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="images.jpg" className="d-block w-100" alt="..." style={{height:'500px'}}/>
                <div className="carousel-caption d-none d-md-block">
                    <div className="background">
                        <div className="transbox">Đánh giá năng lực THPT</div>
                        <a href="#" className=" read-more text-white px-3 py-1">Xem thêm ></a>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <img src="tải xuống.jpg" className="d-block w-100" alt="..." style={{height:'500px'}}/>
                <div className="carousel-caption d-none d-md-block">
                    <a href="#" className=" read-more text-white px-3 py-1">Xem thêm ></a>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
    </div>
    <div id="GIUA">
        <h2>Đánh giá năng lực học sinh</h2>
        <p>Đánh giá năng lực học sinh</p>
        <a href="#">Read More >></a>
    </div>
    <div className="grids">
        <h2 className="ph2">Các khoá học hiện tại</h2>
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <div className="place-list">
                        <div className="place-body">
                            <img src="hinh tin hoc.jpg" width="300" height="165" className="place-img"/>
                            <a href="dangnhap.html" className="text">TIN HỌC 11</a> <br/>
                            <a href="dangnhap.html" className="read-more text-white">ReadMore >></a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="place-list">
                        <div className="place-body">
                            <img src="PPDG.jpg" width="270" height="165" className="place-img"/>
                            <a href="dangnhap.html" className="text">PPĐG ONLINE</a> <br/>
                            <a href="dangnhap.html" className="read-more text-white">ReadMore >></a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="place-list">
                        <div className="place-body">
                            <img src="MÔ HÌNH GD TM.jpg" width="270" height="165" className="place-img"/>
                            <a href="dangnhap.html" className="text">MHGD THÔNG MINH</a> <br/>
                            <a href="dangnhap.html" className="read-more text-white">ReadMore >></a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="place-list">
                        <div className="place-body">
                            <img src="hình dh tt.jpg" width="270" height="165" className="place-img"/>
                            <a href="dangnhap.html" className="text">PPDH ONLINE</a> <br/>
                            <a href="dangnhap.html" className="read-more text-white">ReadMore >></a>
                        </div>
                    </div>
                </div>
            </div>
        </div> <br/>
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <div className="place-list">
                        <div className="place-body">
                            <img src="ÂM NHẠC.png" width="270" height="165" className="place-img"/>
                            <a href="dangnhap.html" className="text">ÂM NHẠC</a> <br/>
                            <a href="dangnhap.html" className="read-more text-white">ReadMore >></a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="place-list">
                        <div className="place-body">
                            <img src="TIẾNG PHÁP.png" width="270" height="165" className="place-img"/>
                            <a href="dangnhap.html" className="text">TIẾNG PHÁP</a> <br/>
                            <a href="dangnhap.html" className="read-more text-white">ReadMore >></a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="place-list">
                        <div className="place-body">
                            <img src="TIẾNG ANH.png" width="270" height="165" className="place-img"/>
                            <a href="dangnhap.html" className="text">TIẾNG ANH</a> <br/>
                            <a href="dangnhap.html" className="read-more text-white">ReadMore >></a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="place-list">
                        <div className="place-body">
                            <img src="SINH.png" width="270" height="165" className="place-img"/>
                            <a href="dangnhap.html" className="text">SINH HỌC</a> <br/>
                            <a href="dangnhap.html" className="read-more text-white">ReadMore >></a>
                        </div>
                    </div>
                </div>
            </div>
        </div> <br/>
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <div className="place-list">
                        <div className="place-body">
                            <img src="CÔNG NGHÊ.png" width="270" height="165" className="place-img"/>
                            <a href="dangnhap.html" className="text">CÔNG NGHỆ</a> <br/>
                            <a href="dangnhap.html" className="read-more text-white">ReadMore >></a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="place-list">
                        <div className="place-body">
                            <img src="CÔNG DÂN.png" width="270" height="165" className="place-img"/>
                            <a href="dangnhap.html" className="text">CÔNG DÂN</a> <br/>
                            <a href="dangnhap.html" className="read-more text-white">ReadMore >></a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="place-list">
                        <div className="place-body">
                            <img src="ĐỊA.png" width="270" height="165" className="place-img"/>
                            <a href="dangnhap.html" className="text">ĐỊA LÝ</a> <br/>
                            <a href="dangnhap.html" className="read-more text-white">ReadMore >></a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="place-list">
                        <div className="place-body">
                            <img src="SỬ.png" width="270" height="165" className="place-img"/>
                            <a href="dangnhap.html" className="text">LỊCH SỬ</a> <br/>
                            <a href="dangnhap.html" className="read-more text-white">ReadMore >></a>
                        </div>
                    </div>
                </div>
            </div>
        </div> <br/>
               <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <div className="place-list">
                        <div className="place-body">
                            <img src="VĂN.png" width="270" height="165" className="place-img"/>
                            <a href="dangnhap.html" className="text">NGỮ VĂN</a> <br/>
                            <a href="dangnhap.html" className="read-more text-white">ReadMore >></a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="place-list">
                        <div className="place-body">
                            <img src="HÓAA.png" width="270" height="165" className="place-img"/>
                            <a href="dangnhap.html" className="text">HOÁ HỌC</a> <br/>
                            <a href="dangnhap.html" className="read-more text-white">ReadMore >></a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="place-list">
                        <div className="place-body">
                            <img src="TOÁNN.png" width="270" height="165" className="place-img"/>
                            <a href="dangnhap.html" className="text">TOÁN</a> <br/>
                            <a href="dangnhap.html" className="read-more text-white">ReadMore >></a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="place-list">
                        <div className="place-body">
                            <img src="V LÝ.png" width="270" height="165" className="place-img"/>
                            <a href="dangnhap.html" className="text">VẬT LÝ</a> <br/>
                            <a href="dangnhap.html" className="read-more text-white">ReadMore >></a>
                        </div>
                    </div>
                </div>
            </div>
        </div> <br/>
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <div class="place-list">
                        <div class="place-body">
                            <img src="gif10.gif" width="270" height="165" class="place-img"/>
                            <a href="dangnhap.html" class="text">Tin học lớp 10</a> <br/>
                            <a href="dangnhap.html" class="read-more text-white">ReadMore >></a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="place-list">
                        <div class="place-body">
                            <img src="tinnnn.jpg" width="270" height="165" class="place-img"/>
                            <a href="dangnhap.html" class="text">TIN HỌC 10</a> <br/>
                            <a href="dangnhap.html" class="read-more text-white">ReadMore >></a>
                        </div>
                    </div>
                </div>
            </div>
        </div> <br/>
        <div className="footer bg-white">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h5 className="in">INFO</h5>
                        <a href="https://sgddt.quangbinh.gov.vn/3cms/" className="ina">Sở giáo dục và đào tạo tỉnh Quảng Bình</a>
                    </div>
                    <div className="col">
                        <h5 className="in">CONTACT US</h5>
                        <p>187 Hữu Nghị - TP Đồng Hới - Quảng Bình</p>
                        <p>
                            <ion-icon name="call"></ion-icon> Phone : 0232.3822190
                        </p>
                        <p>
                            <ion-icon name="mail"></ion-icon> E-mail : <a href="#" style={{color: "black"}}>webmaster@sgddt-quangbinh.gov.vn</a>
                        </p>
                    </div>
                    <div className="col">
                        <h5 className="in">GET SOCIAL</h5>
                        <div className="icon">
                            <div className="social-buttons">
                                
                                <a href="http://www.facebook.com" target="blank" className="social-margin">
                                    <div className="social-icon facebook">
                                        <ion-icon name="logo-facebook"></ion-icon>
                                    </div>
                                </a>
                               
                                <a href="https://in.pinterest.com/yourpinterestname/" target="blank" className="social-margin">
                                    <div className="social-icon pinterest">
                                        <ion-icon name="logo-pinterest"></ion-icon>
                                    </div>
                                </a>
                                
                                <a href="http://twitter.com/" target="blank" className="social-margin">
                                    <div className="social-icon twitter">
                                        <ion-icon name="logo-twitter"></ion-icon>
                                    </div>
                                </a>
                                
                                <a href="https://www.google.com/+yourgoogleplusid" target="blank" className="social-margin">
                                    <div className="social-icon google-plus">
                                        <ion-icon name="logo-google"></ion-icon>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="duoi">
            <p>Copyright © 2021 - danhgiananglucthpt.edu.vn</p>
        </div>
        <div class="duoin">
            <a href="#">Data retention summary</a>
        </div>
    </div>



    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"> </script>
    <script nomodule src="https: // unkg .com / ionicons @ 5.5.2 / dist / ionicons / ionicons.js "></script>
</div>
</div>
    );
};

Home.defaultProps = {
    courses: null,
    isLoading: true,
    error: null,
};

Home.propTypes = {
    courses: PropTypes.array,
    error: PropTypes.object,
    isLoading: PropTypes.bool,
    actionGetCourses: PropTypes.func,
};

const mapStateToProps = (state) => ({
    courses: state.homeReducer.courses,
    error: state.homeReducer.error,
    isLoading: state.homeReducer.isLoading,
});

export function mapDispatchToProps(dispatch) {
    return {
        actionGetCourses: (payload) => dispatch(getCourses(payload)),
    };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Home);