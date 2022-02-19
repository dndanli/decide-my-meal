import { AiOutlineCloseCircle } from "react-icons/ai";
import StyledList from "../list/List.style";
import { BarLoader } from "react-spinners";

type ResultProp = {
  className: string;
  foodChosen: string;
  restaurants: any;
  loadingStatus: boolean;
};

const Result = ({
  className,
  foodChosen,
  restaurants,
  loadingStatus,
}: ResultProp) => {
  const HandleOnClose = () => {
    let resultSection = document.querySelector(
      ".result-display"
    ) as HTMLElement;
    resultSection.style.visibility = "hidden";
  };
  return (
    <div className={className}>
      {<h2 className="choice">You'll be having ✨{foodChosen}!✨</h2>}
      <div className="close-btn" onClick={HandleOnClose}>
        <AiOutlineCloseCircle />
      </div>
      <div className="restaurant-list">
        {loadingStatus ? (
          <div
            className="loader"
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "15rem",
              alignItems: "center",
            }}
          >
            <BarLoader
              color="#6e72fc"
              css="background-color:white"
              height={7}
              width={190}
            />
          </div>
        ) : (
          restaurants.map((el: any) => {
            return (
              <div key={el.id}>
                <StyledList
                  className="res-list"
                  title={el.poi.name}
                  phoneNumber={el.poi.phone}
                  address={el.address.freeformAddress}
                  website={el.poi.url}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Result;
