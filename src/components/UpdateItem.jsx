import React, { useContext } from "react";
import { userInfo } from "../context/Verification";
import Swal from "sweetalert2";
import { useLoaderData, useParams } from "react-router-dom";

const UpdateItem = () => {
  const { user } = useContext(userInfo);
  const { id } = useParams();
  console.log(id);
  const loadedData = useLoaderData(); // Load data from loader
  console.log(loadedData);
  const handleUpdateArtAndCraftForm = (e) => {
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

    fetch(
      `https://assignment-10-server-sid-git-8bff74-waliur-rafiq-samis-projects.vercel.app/artAndCraft/update/${id}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(artAndCraft),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        e.target.reset();
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Update Successfully",
            icon: "success",
            draggable: true,
          });
          e.target.reset();
        }
      });
  };

  return (
    <div>
      <div className="container mx-auto py-10 p-5">
        <h1 className="text-center font-semibold md:mt-10 mb-5 md:text-5xl text-3xl">
          Update Art & Craft
        </h1>
        <p className="md:text-center max-w-2xl mx-auto mb-10 text-justify">
          Revamp Your Art & Craft Creations! Update your masterpiece with the
          latest details and give it the spotlight it deserves. Whether it's a
          beautifully designed greeting card, a stunning origami piece, or an
          intricately painted glass artwork, keeping your listings fresh ensures
          they remain eye-catching and relevant. Craft Zone values every
          artist's creativity, so take this opportunity to refine your work and
          share your passion with art enthusiasts worldwide. Let your craft tell
          its story with a perfect update!
        </p>
        <form
          onSubmit={handleUpdateArtAndCraftForm}
          className="max-w-4xl mx-auto"
        >
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            {[
              {
                label: "Tittle",
                name: "Tittle",
                type: "text",
                id: "Tittle",
                placeholder: "Tittle...",
                defaultValue: loadedData?.tittle || "",
              },
              {
                label: "Photo URL",
                name: "photo",
                type: "url",
                id: "photo",
                placeholder: "Photo URL...",
                defaultValue: loadedData?.photo || "",
              },
              {
                label: "Location",
                name: "Location",
                type: "text",
                id: "Location",
                placeholder: "Location...",
                defaultValue: loadedData?.location || "",
              },
              {
                label: "Price",
                name: "price",
                type: "number",
                id: "price",
                placeholder: "$592",
                defaultValue: loadedData?.price || "",
              },
            ].map(({ label, id, type, placeholder, defaultValue }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {label}
                </label>
                <input
                  name={id}
                  type={type}
                  id={id}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={placeholder}
                  required
                  defaultValue={defaultValue}
                />
              </div>
            ))}
            <div className="flex flex-col gap-3">
              <label htmlFor="category">Category</label>
              <select name="category" className="select select-bordered w-full">
                {[
                  "Card Making",
                  "Scrapbooking",
                  "Paper Quilling & Origami",
                  "Glass Painting",
                  "Lampworking",
                  "Glass Dying & Staining",
                ].map((option) => (
                  <option
                    key={option}
                    value={option}
                    selected={loadedData?.category === option}
                  >
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <textarea
              name="description"
              placeholder="Description..."
              className="active:outline-0 active:border-0 textarea textarea-bordered textarea-lg w-full"
              defaultValue={loadedData?.description || ""}
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
export default UpdateItem;
