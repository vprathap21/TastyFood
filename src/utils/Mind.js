import { Link } from "react-router-dom";
import { CDN_LINK } from "./constant";

const Mind = ({ data }) => {
  console.log(data);
  const listofimages = data.card.card.imageGridCards.info;
 // console.log(listofimages);
 const list = data.card.card.gridElements.infoWithStyle.info;
 
  return (
    <div>
      <h1>whats on you mind?</h1>
      <div className="flex">
        {list.map((item) => {
          return (
            <div key={item.id}>
              
              <Link to={"/collection/" + collectionId(item.entityId)}>
                <img
                  className="hover:cursor-pointer"
                  src={CDN_LINK + item.imageId}
                 
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function collectionId(s) {{
  const inputString = s;
  const numbersOnly = inputString.match(/\d+/g);
  return numbersOnly.pop();
}}

export default Mind;
