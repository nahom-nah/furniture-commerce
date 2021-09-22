import { EyeIcon } from "@heroicons/react/solid";
import Image from "next/image";
import ReactStars from "react-rating-stars-component";
export default function ItemOverview(props) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="flex flex-col   px-8 py-4 mt-8 shadow-sm   justify-center space-y-1">
      <Image src={props.image} alt="intro" width={170} height={170} />
      <div className="text-xl font-bold text-gray-700">Living Room Couch</div>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        edit={false}
        activeColor="#ffd700"
        value={4}
      />
      <div className="flex justify-between items-center">
        <div className="text-gray-800 font-bold text-xl">120,000 Birr</div>
        <div className="px-2 py-2 bg-gray-50 rounded-full">
          <EyeIcon className="h-5 text-custom " />
        </div>
      </div>
    </div>
  );
}
