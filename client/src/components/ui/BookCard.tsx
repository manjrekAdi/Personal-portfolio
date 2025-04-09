import { motion } from "framer-motion";
import { Book } from "@/lib/data";
import { Star, StarHalf } from "lucide-react";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Generate stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`star-${i}`} className="text-yellow-500 fill-yellow-500" size={16} />
      );
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="text-yellow-500 fill-yellow-500" size={16} />);
    }

    return stars;
  };

  return (
    <motion.div
      className="bg-card rounded-lg overflow-hidden border border-border card-hover"
      variants={itemVariants}
    >
      <div className="h-56 overflow-hidden bg-muted flex items-center justify-center">
        <svg
          className="w-1/3 h-1/3 text-muted-foreground opacity-30"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Z" />
          <path d="M2 6h20" />
        </svg>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{book.title}</h3>
        <p className="text-muted-foreground text-sm mb-2">by {book.author}</p>
        <div className="flex items-center mb-3">
          {renderStars(book.rating)}
          <span className="ml-2 text-sm text-muted-foreground">{book.rating.toFixed(1)}</span>
        </div>
        <p className="text-xs text-muted-foreground line-clamp-3">{book.description}</p>
      </div>
    </motion.div>
  );
};

export default BookCard;
