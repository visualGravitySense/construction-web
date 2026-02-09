import { useState } from 'react';

interface Icon3DProps {
  src: string;
  alt: string;
  className?: string;
  hoverEffect?: boolean;
}

/**
 * Компонент для отображения 3D иконок
 * Поддерживает hover эффекты и анимации
 */
const Icon3D = ({ src, alt, className = '', hoverEffect = true }: Icon3DProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative transition-all duration-300 ${
        hoverEffect && isHovered ? 'scale-110 rotate-3' : 'scale-100'
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain drop-shadow-2xl"
        style={{
          filter: isHovered && hoverEffect ? 'brightness(1.1)' : 'brightness(1)',
          transition: 'all 0.3s ease'
        }}
      />
      {/* Эффект свечения при hover */}
      {isHovered && hoverEffect && (
        <div className="absolute inset-0 bg-white/20 rounded-full blur-xl -z-10" />
      )}
    </div>
  );
};

export default Icon3D;
