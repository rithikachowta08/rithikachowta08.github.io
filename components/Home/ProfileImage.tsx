import Image from "next/image";
import "./Home.scss";
import { useState } from "react";

function ProfileImage() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="relative w-full 2xl:w-[60%] aspect-[1.2/1] lg:aspect-square">
      <picture>
        <source srcSet="/images/profile_1x.jpg" media="(max-width: 1024px)" />
        <Image
          className={`profile z-[1] lg:clip-path-trapezium${imageLoaded ? " visible" : ""}`}
          onLoad={handleImageLoad}
          priority
          src="/images/profile_2x.jpg"
          width={2251}
          height={2251}
          alt="Rithika - Profile Image"
        ></Image>
      </picture>
    </div>
  );
}

export default ProfileImage;
