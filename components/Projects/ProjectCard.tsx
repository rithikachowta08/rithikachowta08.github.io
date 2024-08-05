import Image from "next/image";
import Link from "next/link";

function ProjectCard({ data }) {
  const isDisabled = data.status === "COMING_SOON";
  const className = "fullpage-slide w-[80vw] lg:w-[60vw] h-full";
  const linkChildren = (
    <div className="flex flex-col items-center gap-8 border border-white p-4 rounded-lg lg:gap-12">
      <div className="text-2xl mb-2 text-terminal-green">{data.name}</div>
      <div className="w-[60vw] lg:w-[40vw] relative h-[40vh] lg:h-[50vh]">
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
      </div>
    </div>
  );
  return isDisabled ? (
    <div className={`${className} cursor-not-allowed`}>{linkChildren}</div>
  ) : (
    <Link href={data.url} className={className} target="_blank">
      {linkChildren}
    </Link>
  );
}

export default ProjectCard;
