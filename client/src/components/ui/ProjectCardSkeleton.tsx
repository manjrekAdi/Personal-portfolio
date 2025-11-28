import { Skeleton } from "@/components/ui/skeleton";

const ProjectCardSkeleton = () => {
  return (
    <div className="bg-card/60 backdrop-blur-lg rounded-3xl border border-border/40 overflow-hidden h-full flex flex-col shadow-lg p-6">
      <Skeleton className="h-7 w-3/4 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-6" />
      <div className="flex flex-wrap gap-2 mt-auto">
        <Skeleton className="h-6 w-16 rounded-md" />
        <Skeleton className="h-6 w-20 rounded-md" />
        <Skeleton className="h-6 w-14 rounded-md" />
        <Skeleton className="h-6 w-18 rounded-md" />
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;

