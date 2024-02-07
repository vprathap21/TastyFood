import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  
} from "@material-tailwind/react";
import { StarIcon,MapPinIcon } from "@heroicons/react/20/solid";
import { CDN_URL, MENU_IMAGE } from "../Utils/constants";
import { Link } from "react-router-dom";

export function FoodCard({ resData }) {
  const { cloudinaryImageId, name, avgRating, sla, cuisines, locality, id } =
    resData?.info;

  return (
    <Card className="w-full max-w-[18rem] shadow-lg">
      <Link to={`/restraunt/${id}`}>
        <CardHeader floated={false} color="blue-gray">
          <img
            src={MENU_IMAGE + cloudinaryImageId}
            alt="ui/ux review check"
            className="bg-red-100 h-48 object-cover w-full"
          />
           {/* <div className='overlay w-full rounded-md '>
          <p className='text-xl font-bold flex gap-2 p-2 px-3  flex-wrap'>
            {resData?.info?.aggregatedDiscountInfoV3?.header
              ? resData.info.aggregatedDiscountInfoV3.header
              : ''}{' '}
            {resData?.info?.aggregatedDiscountInfoV3?.subHeader
              ? resData.info.aggregatedDiscountInfoV3.subHeader
              : ''}
          </p>
        </div> */}
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex flex-col items-left justify-between">
            <Typography
              variant="h6"
              color="blue-gray"
              className="font-bold "
              style={{
                maxWidth: "23ch",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {name}
            </Typography>
            <div className="flex justify-between">
              <Typography
                color="blue-gray"
                className="flex items-center gap-1.5 font-normal"
              >
                {avgRating >= "4" ? (
            <div className="flex rounded-lg justify-center font-bold items-center   text-gray-50">
              <StarIcon className="h-6 w-6 text-white bg-green-600 p-1 rounded-full" />
              <div className="font-bold text-black text-lg px-1">
                {avgRating}
              </div>
            </div>
          ) : (
            <div className="flex rounded-lg  font-bold items-center   text-gray-50">
              <div>
                <StarIcon className="h-6 w-6 text-white bg-red-600 p-1 rounded-full" />
              </div>
              <div className="font-bold text-black text-lg px-1">
                {avgRating}
              </div>
            </div>
          )}
              </Typography>
              <Typography>{sla.slaString}</Typography>
            </div>
          </div>
          <Typography
            color="gray"
            className="bg-red-1000 text-sm"
            style={{
              maxWidth: "25ch",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {cuisines.join(", ")}
          </Typography>
          <div className="flex items-center ">
          <MapPinIcon className="h-6 w-4 text-red-400 mr-1  " />
          <Typography
            color="gray"
            className="bg-red-1000 text-sm"
            style={{
              maxWidth: "25ch",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
           
            {locality}
          </Typography>
          </div>
         
        </CardBody>
      </Link>
    </Card>
  );
}
// export const withpromoted = (Rescard) => {
//   return (props) => {
//     return (
//       <div className='relative'>
//         <p className='absolute z-10 -top-2 -left-2 rounded-md p-2 px-4 bg-zinc-900 text-white text-xs'>
//           Top Rated
//         </p>
//         <Rescard {...props} />
//       </div>
//     );
//   };
// };