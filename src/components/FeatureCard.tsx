import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div
      className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:border-primary/30"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 bg-green-gradient rounded-xl flex items-center justify-center mb-5 shadow-glow-green group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
