import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import TabGroup from "@/components/ui/TabGroup";
import BookCard from "@/components/ui/BookCard";
import { technicalBooks, neuroscienceBooks, philosophyBooks, productivityBooks } from "@/lib/data";

type BookCategory = "technical" | "neuroscience" | "philosophy" | "productivity";

const BooksSection = () => {
  const [activeTab, setActiveTab] = useState<BookCategory>("technical");
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const tabs = [
    { id: "technical", label: "Technical" },
    { id: "neuroscience", label: "Neuroscience" },
    { id: "philosophy", label: "Philosophy of Mind" },
    { id: "productivity", label: "Productivity" },
  ];

  const getBooksForCategory = (category: BookCategory) => {
    switch (category) {
      case "technical":
        return technicalBooks;
      case "neuroscience":
        return neuroscienceBooks;
      case "philosophy":
        return philosophyBooks;
      case "productivity":
        return productivityBooks;
      default:
        return technicalBooks;
    }
  };

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab as BookCategory);
  };

  const books = getBooksForCategory(activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="books" ref={sectionRef} className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Books & Reading</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          Books I've read and recommend for software engineers, AI researchers, and technology enthusiasts.
        </p>

        {/* Book Categories */}
        <TabGroup tabs={tabs} activeTab={activeTab} onChange={handleTabChange} />

        {/* Books Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BooksSection;
