import Button from "./elements/Button";

export const BannerTwo = () => {
  return (
    <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center-justify-between">
      <div className="banner-image w-full md:w-1/2 p-3 flex justify-end">
        <img
          src={require("../assets/images/PngItem_1135425.png")}
          alt="banner"
          className="max-h-95"
        />
      </div>
      <div className="banner-deescription w-full md:w-1/2 p-3">
        <h2 className="mb-6 text-5xl font-bold text-white">
          Winner Winner Chicken Dinner🍗
        </h2>
        <p className="font-semibold text-lg text-red-600 py-2">
          <ol>
            <li>Delivery</li>
            <li>Takeaway</li>
            <li>Dine-in</li>
          </ol>
        </p>
        <div className="btn-container">
          <a href="/menu">
            <Button>Order Now</Button>
          </a>
        </div>
      </div>
    </div>
  );
};
