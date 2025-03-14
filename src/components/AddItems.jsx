import React, { useContext } from "react";
import { userInfo } from "../context/Verification";
import Swal from "sweetalert2";

const AddItems = () => {
  const { user } = useContext(userInfo);
  console.log(user);

  const handleAddArtAndCraftForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const currentTime = new Date().toLocaleString();

    const adderName = user?.displayName;
    const adderEmail = user?.email;
    const adderPhoto = user?.photoURL;
    const artAndCraft = {
      adderName,
      adderPhoto,
      adderEmail,
      tittle: formData.get("Tittle"),
      photo: formData.get("photo"),
      location: formData.get("Location"),
      price: formData.get("price"),
      category: formData.get("category"),
      description: formData.get("description"),
      submittedAt: currentTime,
    };
    console.log("click");
    fetch("hhttps://test-rose-ten-12.vercel.app/addItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(artAndCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Added Successfully",
          icon: "success",
          draggable: true,
        });
        e.target.reset();
      });
  };

  return (
    <div>
      <div className="container mx-auto py-10 p-5">
        <h1 className="text-center font-semibold md:mt-10 mb-5 md:text-5xl text-3xl">
          Add Art & Craft
        </h1>
        <p className="md:text-center max-w-2xl mx-auto mb-10 text-justify">
          Welcome to the Paper Crafts & Glass Art section of Craft Zone! Here,
          creativity meets craftsmanship, offering a stunning collection of
          handmade paper crafts and elegant glass art. Explore intricate card
          making, scrapbooking, origami, and quilling, along with mesmerizing
          glass painting, lampworking, and stained glass designs. Whether you're
          an art enthusiast or looking for a unique piece, our collection brings
          beauty and artistry to life.
        </p>
        <form onSubmit={handleAddArtAndCraftForm} className="max-w-4xl mx-auto">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            {[
              {
                label: "Tittle",
                name: "Tittle",
                type: "text",
                id: "Tittle",
                placeholder: "tittle..",
              },
              {
                label: "Photo URL",
                name: "photo",
                type: "url",
                id: "photo",
                placeholder: "photo URL",
              },
              {
                label: "Location",
                name: "Location",
                type: "text",
                id: "Location",
                placeholder: "location..",
              },
              {
                label: "Price",
                name: "price",
                type: "number",
                id: "price",
                placeholder: "$592",
              },
            ].map(({ label, id, type, placeholder }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {label}
                </label>
                <input
                  name={id} // Fixed incorrect name reference
                  type={type}
                  id={id}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={placeholder}
                  required
                />
              </div>
            ))}
            <div className="flex flex-col gap-3">
              <label htmlFor="category">Category</label>
              <select name="category" className="select select-bordered w-full">
                <option value="Card Making">Card Making</option>
                <option value="Scrapbooking">Scrapbooking</option>
                <option value="Paper Quilling & origami">
                  Paper Quilling & Origami
                </option>
                <option value="Glass Painting">Glass Painting</option>
                <option value="Lampworking">Lampworking</option>
                <option value="Glass Dying & Staining">
                  Glass Dying & Staining
                </option>
              </select>
            </div>
            <textarea
              name="description"
              placeholder="Description .. ."
              className="active:outline-0 active:border-0 textarea textarea-bordered textarea-lg w-full"
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
