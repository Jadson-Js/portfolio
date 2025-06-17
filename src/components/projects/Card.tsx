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
      className={`min-w-70 h-80 bg-yellow-500 rounded-3xl flex-1 cursor-pointer transition-all relative group ${className}`}
      style={{
        backgroundImage: `url(${project.imageUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
    </div>
  );
}
