import Image from "next/image";
import "./Home.scss";

function ProfileImage() {
  return (
    <div className="relative w-full 2xl:w-[60%] aspect-[1.2/1] lg:aspect-square">
      <picture>
        <source srcSet="/images/profile_1x.jpg" media="(max-width: 1024px)" />
        <Image
          className="profile z-[1] lg:clip-path-trapezium"
          priority
          src="/images/profile_2x.jpg"
          layout="fill"
          alt="Rithika - Profile Image"
        ></Image>
      </picture>
    </div>
  );
}

export default ProfileImage;
