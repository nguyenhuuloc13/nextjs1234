import Link from "next/link";

const Course = ({name, link}) => {
  return (
      
    <div className="col-sm-3">
      <div className="place-list">
        <div className="place-body">
          <img src={`${process.env.PROXY_TARGET_URL}/${link}`} width="300" height="165" className="place-img"/>
          <a href="dangnhap.html" className="text">{name} </a>
          <br />
          <a onClick={() => ReadMore()} href="dangnhap.html" className="read-more text-white"> Xem Thêm </a>
        </div>
      </div>
    </div>
  );
};

export default Course;
