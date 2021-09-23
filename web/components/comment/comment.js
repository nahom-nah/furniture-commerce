import { XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import CommentItem from "./commentItem";
export default function Comment(props) {
  return (
    <div
      className={
        props.open
          ? "w-96  fixed top-20 right-14 px-5 py-2 bg-gradient-to-b from-gray-100 to-gray-50 via-gray-50 shadow-xl rounded-lg"
          : "w-96 hidden fixed top-20 right-14 px-5 py-2 bg-gradient-to-b from-gray-100 to-gray-50 via-gray-50 shadow-xl rounded-lg"
      }
      style={{
        height: "80%",
      }}
    >
      <div className="flex space-x-2 justify-between">
        <div>
          <Image
            src="/propic.jpg"
            alt="propic"
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>{" "}
        <textarea
          rows={3}
          className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 
                bg-white rounded-md text-sm  focus:outline-none focus:ring  w-full  
                ease-linear transition-all duration-150 shadow-md"
        ></textarea>
        <button
          onClick={props.handleCommentOpen}
          className="rounded-full bg-white self-start px-1 py-1 hover:bg-red-300"
        >
          <XIcon className="h-5" />
        </button>
      </div>
      <div className="flex justify-end pt-2 px-6">
        <button className="bg-custom text-white px-8 py-1 rounded-full font-semibold">
          post
        </button>
      </div>
      <div className="py-2 overflow-auto h-96 mt-2">
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>
    </div>
  );
}
