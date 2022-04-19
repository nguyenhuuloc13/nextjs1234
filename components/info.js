const Info = ({name, link}) => {
    return (
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
                            <ion-icon name="call"></ion-icon> Phone : 02323822190
                        </p>
                        <p>
                            <ion-icon name="mail"></ion-icon> E-mail : <a href="#" style={{color: "black"}}>webmaster@sgddt-quangbinh.gov.vn</a>
                        </p>
                    </div>
                    </div>
                    </div>
                    </div>
    );
  };
  
  export default Info;
  