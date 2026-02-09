/**
 * ПРИМЕР: Использование 3D иконок в компоненте Stats
 * 
 * Инструкция:
 * 1. Скачайте 3D иконки с https://3dicons.com/ или https://www.komarov.design/3d-ikonki/
 * 2. Поместите их в папку public/3d-icons/
 * 3. Замените обычные иконки на 3D версии
 */

import Icon3D from '../Icon3D/Icon3D';
import { getPublicUrl } from "@/lib/utils"

// Пример конфигурации со статичными 3D иконками
const stats3D = [
  { 
    value: "12+", 
    label: "Aastat kogemust",
    icon3D: getPublicUrl("3d-icons/trending-up-3d.png"),
    iconColor: "bg-blue-500"
  },
  { 
    value: "100+", 
    label: "Edukalt projekti",
    icon3D: getPublicUrl("3d-icons/check-circle-3d.png"),
    iconColor: "bg-green-500"
  },
  { 
    value: "100%", 
    label: "Klientide rahulolu",
    icon3D: getPublicUrl("3d-icons/users-3d.png"),
    iconColor: "bg-purple-500"
  },
  { 
    value: "2x", 
    label: "Aasta Betoonehitis",
    icon3D: getPublicUrl("3d-icons/award-3d.png"),
    iconColor: "bg-yellow-500"
  }
];

/**
 * Пример использования 3D иконок вместо обычных
 * 
 * Вместо:
 * <IconComponent className="w-8 h-8 text-white" />
 * 
 * Используйте:
 * <Icon3D src={stat.icon3D} alt={stat.label} className="w-8 h-8" />
 */
export const StatsCard3DExample = ({ stat }: { stat: typeof stats3D[0] }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/20">
      {/* 3D иконка вместо обычной */}
      <div className="mb-6">
        <Icon3D 
          src={stat.icon3D} 
          alt={stat.label}
          className="w-16 h-16 mx-auto"
          hoverEffect={true}
        />
      </div>
      
      <div className="text-5xl font-bold text-white mb-3">
        {stat.value}
      </div>
      
      <div className="text-white/90 font-medium text-lg">
        {stat.label}
      </div>
    </div>
  );
};

/**
 * Альтернатива: Использование 3D иконок с фоном
 */
export const StatsCard3DWithBackground = ({ stat }: { stat: typeof stats3D[0] }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/20">
      {/* Квадратный фон с 3D иконкой внутри */}
      <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.iconColor} rounded-xl mb-6 shadow-lg p-2`}>
        <Icon3D 
          src={stat.icon3D} 
          alt={stat.label}
          className="w-full h-full"
          hoverEffect={true}
        />
      </div>
      
      <div className="text-5xl font-bold text-white mb-3">
        {stat.value}
      </div>
      
      <div className="text-white/90 font-medium text-lg">
        {stat.label}
      </div>
    </div>
  );
};

export default StatsCard3DExample;
