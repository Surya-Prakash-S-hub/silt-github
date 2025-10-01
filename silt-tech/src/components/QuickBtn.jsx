export const Button = (props) => {
  return (
    <>
      <div className="ctabtn">
        <button>
          <span>{props.value}</span>
          <div className="iconbtn">
            <span>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </span>
          </div>
        </button>
      </div>
    </>
  );
};
