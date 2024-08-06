import Image from "next/image";
import Link from "next/link";
import LinkIcon from "@/public/icons/link.svg";

function ProjectCard({ data }) {
  const isDisabled = data.status === "COMING_SOON";
  const className = "fullpage-slide w-[80vw] lg:w-[60vw] h-full";
  const linkChildren = (
    <div className="flex flex-col items-center gap-8 lg:border lg:border-white p-4 rounded-lg lg:gap-12">
      <div className="text-2xl mb-2 text-terminal-green">{data.name}</div>
      <div className="w-[70vw] lg:w-[40vw] relative h-[40vh] lg:h-[50vh]">
        <Image
          src={isDisabled ? "/images/coming_soon.jpg" : data.screenshot}
          alt={data.name}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-sm">{data.description}</div>
        {data.techStack?.length ? (
          <div className="text-terminal-green text-sm">
            Tech Stack: {data.techStack.join(", ")}
          </div>
        ) : null}
        <div className="flex gap-8 items-center">
          {data.githubUrl ? (
            <a
              href={data.githubUrl}
              className="flex items-center gap-2 text-sm hover:underline"
              target="_blank"
            >
              View code
              <LinkIcon />
            </a>
          ) : null}
          {data.extraLink ? (
            <a
              href={data.extraLink.url}
              className="flex items-center gap-2 text-sm hover:underline"
              target="_blank"
            >
              {data.extraLink.text}
              <LinkIcon />
            </a>
          ) : null}
          {data.url ? (
            <a
              href={data.url}
              className="flex items-center gap-2 text-sm hover:underline"
              target="_blank"
            >
              Demo
              <LinkIcon />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
  return isDisabled || !data.url ? (
    <div className={`${className} cursor-not-allowed`}>{linkChildren}</div>
  ) : (
    <Link href={data.url} className={className} target="_blank">
      {linkChildren}
    </Link>
  );
}

export default ProjectCard;
