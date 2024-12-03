import { BRAND_COLORS } from '../constants/colors';

export const BackgroundStripes = () => {
  const stripeColors = [
    BRAND_COLORS.MEU_RP,
    BRAND_COLORS.NO_SHAPE,
    BRAND_COLORS.ROTINA,
    BRAND_COLORS.MONSTRO,
    BRAND_COLORS.BRONZE
  ];

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <div className="flex h-full">
        {stripeColors.map((color, index) => (
          <div
            key={index}
            className="flex-1 transition-all duration-500 hover:flex-[1.2]"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
};