import { CDN_LINK } from "./constant";

const Mind = ({data}) => {
    const listofimages = data.imageGridCards.info;
    console.log(listofimages);
    return <div >
        <h1>whats on you mind?</h1> 
        <div className="flex">
        {listofimages.map((Data) => {
            return <div key={Data.id}>
                <img  onClick = {onclickHandler} className="hover:cursor-pointer" src={CDN_LINK + Data.imageId} alt={Data.title} />
                
            </div>
        })}
        </div>
    </div>
}
function onclickHandler() {
    console.log("clicked");
}
export default Mind;