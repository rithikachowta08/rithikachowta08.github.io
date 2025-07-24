import Image from "next/image";
import Link from "next/link";

function ProjectCard({ data }) {
  return (
    <Link href={data.url} className="flex flex-col gap-4 bg-zinc-800 rounded-md p-4 items-center" target="_blank">
      <div className="w-full lg:w-[80%] relative h-[10vh]">
        {data.whiteBg ? (
          <div className="flex items-center relative h-full p-2 rounded-md bg-slate-100">
            <Image src={data.thumbnail} alt={data.name} width={1150} height={233} />
          </div>
        ) : (
          <Image src={data.thumbnail} alt={data.name} layout="fill" objectFit="contain" />
        )}
      </div>
      <div className="flex flex-col justify-between gap-2">
        <div className="text-sm break-all lg:text-lg">{data.name}</div>
        <div className="hidden lg:block text-sm">{data.description}</div>
        {data.techStack?.length ? <div className="text-terminal-green text-sm ">{data.techStack.join(" | ")}</div> : null}
      </div>
    </Link>
  );
}

export default ProjectCard;
