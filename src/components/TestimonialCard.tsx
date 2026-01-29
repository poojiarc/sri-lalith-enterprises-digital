import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  content: string;
  author: string;
  company: string;
  image?: string;
}

const TestimonialCard = ({ content, author, company, image }: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-8 card-hover relative">
      <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
      <p className="text-card-foreground leading-relaxed mb-6 italic">
        "{content}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-green-gradient rounded-full flex items-center justify-center text-white font-bold text-lg">
          {author.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{author}</h4>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
