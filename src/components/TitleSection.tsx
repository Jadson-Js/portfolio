export interface TitleSectionProps {
  title: string;
}

export function TitleSection({ title }: TitleSectionProps) {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-4">
      <div className="w-fit ">
        <h2 className="text-4xl text-primary mb-2 capitalize">{title}</h2>
        <div className="flex flex-row justify-center items-center">
          <div className="bg-primary w-[8px] h-[8px] rounded-full" />
          <div className="bg-primary h-[2px] flex-1" />
          <div className="bg-primary w-[8px] h-[8px] rounded-full" />
        </div>
      </div>
    </div>
  );
}
