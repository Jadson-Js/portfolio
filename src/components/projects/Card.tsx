import { IProject } from "@/types/IProject";

export function Card({
  project,
  className,
}: {
  project: IProject;
  className?: string;
}) {
  return (
    <div
      className={`w-full h-80 bg-yellow-500 rounded-xl flex-1 cursor-pointer transition-all relative group ${className}`}
      style={{
        backgroundImage: `url(${project.thumbnail})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
    </div>
  );
}
