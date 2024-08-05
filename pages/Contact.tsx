import Link from "next/link";
import MailIcon from "@/public/icons/mail.svg";
import GithubIcon from "@/public/icons/github.svg";
import InstaIcon from "@/public/icons/insta.svg";
import LinkedinIcon from "@/public/icons/linkedin.svg";
import CodesandboxIcon from "@/public/icons/codesandbox.svg";
import MediumIcon from "@/public/icons/medium.svg";

const Contact = () => {
  return (
    <div className="relative py-12 flex flex-col gap-4 min-h-screen w-[80%] md:w-[70%] self-center lg:items-center justify-center lg:w-full lg:px-12 m-auto">
      <h2 className="text-6xl mb-8">Let's talk!</h2>
      <p>Reach me at: </p>
      <Link
        className="underline flex gap-4 items-center"
        href="mailto:rithika.chowta08@gmail.com"
      >
        <MailIcon />
        rithika.chowta08@gmail.com
      </Link>
      <Link
        className="underline flex gap-4 items-center"
        target="_blank"
        href="https://www.linkedin.com/in/rithika-chowta-857368131/"
      >
        <LinkedinIcon />
        linkedin.com/in/rithika-chowta-857368131/
      </Link>
      <Link
        className="underline flex gap-4 items-center"
        target="_blank"
        href="https://github.com/rithikachowta08"
      >
        <GithubIcon></GithubIcon>
        github.com/rithikachowta08
      </Link>
      <Link
        className="underline flex gap-4 items-center"
        target="_blank"
        href="https://medium.com/@rithikachowta"
      >
        <MediumIcon />
        medium.com/@rithikachowta
      </Link>
      <Link
        className="underline flex gap-4 items-center"
        target="_blank"
        href="https://codesandbox.io/u/rithikachowta"
      >
        <CodesandboxIcon />
        codesandbox.io/u/rithikachowta
      </Link>
      <Link
        className="underline flex gap-4 items-center"
        target="_blank"
        href="https://www.instagram.com/rithikachowta/"
      >
        <InstaIcon />
        instagram.com/rithikachowta
      </Link>
      <div className="text-xs absolute bottom-4">
        Made with ❤️ by Rithika Chowta ©{" "}
      </div>
    </div>
  );
};

export default Contact;
