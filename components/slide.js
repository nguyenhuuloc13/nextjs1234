const Slide = ({name, link}) => {
    return (
        <div className="tong">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="images.jpg" className="d-block w-100" alt="..." style={{height:'500px'}}/>
                <div className="carousel-caption d-none d-md-block">
                    <div className="background">
                        <div className="transbox">Đánh giá năng lực THPT</div>
                        <a href="#" className=" read-more text-white px-3 py-1">Xem thêm </a>
                    </div>
                </div>
</div>
            <div className="carousel-item">
                <img src="tải xuống.jpg" className="d-block w-100" alt="..." style={{height:'500px'}}/>
                <div className="carousel-caption d-none d-md-block">
                    <a href="#" className=" read-more text-white px-3 py-1">Xem thêm </a>
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
        <a href="#">Read More </a>
    </div>
    </div>
    );
  };
  
  export default Slide;
  