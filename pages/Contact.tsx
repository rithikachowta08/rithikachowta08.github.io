import Link from "next/link";
import MailIcon from "@/public/icons/mail.svg";
import GithubIcon from "@/public/icons/github.svg";
import InstaIcon from "@/public/icons/insta.svg";
import LinkedinIcon from "@/public/icons/linkedin.svg";
import CodesandboxIcon from "@/public/icons/codesandbox.svg";
import MediumIcon from "@/public/icons/medium.svg";
import LinkWithIcon from "@/components/Contact/LinkWithIcon";

const Contact = () => {
  return (
    <div className="relative py-12 flex flex-col gap-4 min-h-screen w-[80%] md:w-[70%] self-center lg:items-center justify-center lg:w-full lg:px-12 m-auto">
      <h2 className="text-6xl mb-8">Let's talk!</h2>
      <p>Reach me at: </p>
      <LinkWithIcon
        label="rithika.chowta08@gmail.com"
        url="mailto:rithika.chowta08@gmail.com"
        icon={<MailIcon />}
      />
      <LinkWithIcon
        label="linkedin.com/in/rithika-chowta-857368131/"
        url="https://www.linkedin.com/in/rithika-chowta-857368131/"
        icon={<LinkedinIcon />}
      />
      <LinkWithIcon
        url="https://github.com/rithikachowta08"
        label="github.com/rithikachowta08"
        icon={<GithubIcon />}
      />
      <LinkWithIcon
        label="medium.com/@rithikachowta"
        url="https://medium.com/@rithikachowta"
        icon={<MediumIcon />}
      />
      <LinkWithIcon
        label="codesandbox.io/u/rithikachowta"
        url="https://codesandbox.io/u/rithikachowta"
        icon={<CodesandboxIcon />}
      />
      <LinkWithIcon
        label="instagram.com/rithikachowta"
        url="https://www.instagram.com/rithikachowta/"
        icon={<InstaIcon />}
      />
      <div className="text-xs absolute bottom-4">
        Made with ❤️ by Rithika Chowta ©{" "}
      </div>
    </div>
  );
};

export default Contact;
