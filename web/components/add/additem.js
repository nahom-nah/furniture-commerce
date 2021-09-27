import { XIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_ITEM } from "./../../graphql/mutation/Item/createItem";
export default function AddItem(props) {
  const [addItem, { data, loading, error }] = useMutation(CREATE_ITEM);
  const [form, setForm] = useState({
    name: null,
    description: null,
    price: 0,
    quantity: 0,
    image: [],
    status: "New",
  });

  const handleChange = (e) => {
    if (e.target.name !== "image") {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    } else {
      console.log(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(form);
  };
  return (
    <div
      className={
        props.hide
          ? "hidden"
          : "fixed z-50 top-28 w-full  right-60 shadow-lg rounded-md bg-white overflow-hidden "
      }
      style={{
        width: "800px",
        height: "450px",
      }}
    >
      <div className="">
        <div className="flex justify-between ">
          <div className="w-full flex">
            <div
              className="w-full h-auto bg-gray-400  lg:block lg:w-3/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage: "url(1.png)",
                backgroundSize: "100px 100px",
              }}
            ></div>

            <div className="w-full lg:w-9/12  bg-gray-50 p-5 rounded-lg lg:rounded-l-none">
              <div className="flex justify-between items-center">
                <h3 className="pt-4 text-2xl text-center font-bold text-gray-700">
                  Add Item
                </h3>
                <button
                  onClick={props.handleHide}
                  className="px-2 py-2 rounded-full hover:bg-red-100"
                >
                  <XIcon className="h-5" />
                </button>
              </div>

              <form className=" rounded-md px-8 pt-6 pb-8 mb-4 bg-white ">
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="name"
                    >
                      name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="First Name"
                      name="name"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="description"
                    >
                      descriptioin
                    </label>
                    <textarea
                      className="w-60 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      placeholder="description..."
                      onChange={handleChange}
                      name="description"
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="price"
                    >
                      price
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="price"
                      type="number"
                      name="price"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="quantity"
                    >
                      Quantity
                    </label>
                    <input
                      className="w-64 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="quantity"
                      type="number"
                      onChange={handleChange}
                      name="quantity"
                    />
                  </div>
                </div>

                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="image"
                    >
                      Images
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border   rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="image"
                      type="file"
                      onChange={handleChange}
                      name="image"
                      multiple
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="status"
                    >
                      Status
                    </label>
                    <select
                      onChange={handleChange}
                      name="status"
                      className="w-64 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    >
                      <option>New</option>
                      <option>Recent</option>
                      <option>Old</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Add Item
                  </button>
                </div>
                <hr className="mb-6 border-t" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
