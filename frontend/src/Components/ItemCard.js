import React from "react";
import "../ComponentStyles/itemCard.css";

function ItemCard(props) {
  const { name, description, image, price, rating } = props;

  return (
    <div className="bg-white dark:bg-gray-800 my-8 card_margin">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {name}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">
            {description}
          </p>
          <div></div>

          <h1 className="lg:text-2xl inline-flex items-center justify-center py-3 mr-5 text-base font-medium text-center text-gray-900 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:focus:ring-gray-800">
            Monthly Price: ₹{price}{" "}
          </h1>
          <a
            href="#"
            className="lg:text-2xl inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Subscribe
          </a>
          <a
            href="#"
            class="ml-3 text-xl inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Contact
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
          <img src={image} alt="mockup" className="rounded-lg" s />
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
