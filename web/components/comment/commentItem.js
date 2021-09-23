import Image from "next/image";
export default function CommentItem() {
  return (
    <div>
      <div className=" px-2 py-2   flex space-x-2">
        <div>
          <Image
            src="/propic.jpg"
            alt="propic"
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>
        <div className="text-sm bg-white rounded-md px-2 py-2 w-96">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna diam
          vitae fermentum enim sit . Egestas ut cursus eros et hac. Duis erat
          elementu.
        </div>
      </div>{" "}
      <div className="flex justify-end px-5">
        <div className="text-sm text-gray-600">07:23 PM</div>
      </div>
    </div>
  );
}
