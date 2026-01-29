import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  useCases?: string[];
  href?: string;
}

const ProductCard = ({ title, description, image, useCases, href = '/products' }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden card-hover">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed line-clamp-2">
          {description}
        </p>

        {useCases && useCases.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {useCases.slice(0, 3).map((useCase, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-accent/10 text-accent-foreground text-xs font-medium rounded-full"
              >
                {useCase}
              </span>
            ))}
          </div>
        )}

        <Link
          to={href}
          className="inline-flex items-center gap-2 text-primary font-semibold group/link"
        >
          Learn More
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
