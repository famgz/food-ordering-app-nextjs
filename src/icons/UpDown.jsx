import IconComponent from '@/icons/IconComponent';

export default function UpDown({ size, stroke, className }) {
  const d = 'M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9';

  return (
    <IconComponent d={d} size={size} stroke={stroke} className={className} />
  );
}
