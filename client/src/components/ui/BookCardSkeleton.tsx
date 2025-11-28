import { Skeleton } from "@/components/ui/skeleton";

const BookCardSkeleton = () => {
  return (
    <div className="bg-card/60 backdrop-blur-lg rounded-3xl overflow-hidden border border-border/40 shadow-lg">
      <Skeleton className="h-56 w-full rounded-none" />
      <div className="p-4">
        <Skeleton className="h-5 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-3" />
        <Skeleton className="h-4 w-20 mb-3" />
        <Skeleton className="h-3 w-full mb-1" />
        <Skeleton className="h-3 w-full mb-1" />
        <Skeleton className="h-3 w-2/3" />
      </div>
    </div>
  );
};

export default BookCardSkeleton;

