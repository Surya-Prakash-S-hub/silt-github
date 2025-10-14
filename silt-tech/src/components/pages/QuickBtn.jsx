export const Button = (props) => {
  return (
    <>
      <div className="ctabtn">
        <a href="#ContactUs" data-aos="fade-up" data-aos-duration="750" data-aos-delay="400" data-aos-easing="ease-out" >
          <span>{props.value}</span>
          <div className="iconbtn">
            <span>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </span>
          </div>
        </a>
      </div>
    </>
  );
};
