interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({ badge, title, subtitle, centered = true, light = true }: SectionTitleProps) => {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-12`}>
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
          light 
            ? 'bg-primary/10 text-primary' 
            : 'bg-white/10 text-white'
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
        light ? 'text-foreground' : 'text-white'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${
          light ? 'text-muted-foreground' : 'text-gray-400'
        } leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
