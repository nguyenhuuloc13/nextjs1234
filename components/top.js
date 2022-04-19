const Top = ({name, link}) => {
    return (
        <div className="tong">
        <div className="dau">
            <nav className="navbar navbar-expand-md navbar-fixed-top"/>
                <a href="#" className="navbar-brand mx-4 col" 
                style={{
                    width: '660px',
                    height: '50px',
                    paddingTop: '0',
                    float: "left"}}>

                <a href=""><ion-icon className="bathanh" name="menu" 
                style={{
                    color: "white",
                    width: '35px',
                    height: '35px',
                }}></ion-icon>
                </a>
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
    </div>
    );
  };
  
  export default Top;
  