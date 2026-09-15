// components/BannerWrapper.tsx
type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function BannerWrapper({ children, className = '' }: Props) {
  return (
    <div className="mx-auto w-full max-w-[1400px] px-16 py-4">
      <div className={`overflow-hidden rounded-2xl ${className}`}>
        {children}
      </div>
    </div>
  );
}