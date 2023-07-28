import aboutImage from "../assets/images/about-image.jpg";

export const About = () => {
  return (
    <div id="about-us" className="bg-black">
      <div className="p-24 grid grid-cols-2">
        <div className="">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg">
            At Foot Kart, we blend diverse culinary traditions with innovative
            techniques, creating a menu that's a celebration of flavors,
            textures, and aromas. Our charming ambiance complements your dining
            experience, whether it's a romantic dinner or a special celebration.
            Our attentive staff ensures impeccable service, while we also host
            memorable events and private gatherings. As a community-oriented
            restaurant, we actively engage in local initiatives and support
            sustainable practices. Join us for a unique culinary journey and
            savor the magic of flavors at Foot Kart.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img src={aboutImage} alt="" className="about " />
        </div>
      </div>
    </div>
  );
};
