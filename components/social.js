const Social = ({name, link}) => {
    return (
        <div className="col">
        <h5 className="in">GET SOCIAL</h5>
        <div className="icon">
            <div className="social-buttons">
                
                <a href="http://www.facebook.com" target="blank" className="social-margin">
                    <div className="social-icon facebook">
                        <ion-icon name="logo-facebook"></ion-icon>
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
    );
  };
  
  export default Social;
  