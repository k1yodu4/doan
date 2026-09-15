// components/HeroBanner.tsx
import BannerWrapper from '@/components/BannerWrapper';
import BaoShopLogo from '@/components/icons/BaoShopLogo';

const PARTNER_LOGO = '/logos/epu.png';
const SCHOOL_IMAGE_URL =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXh5Mf0j6bH503T1HuVKFIzaBP0vSXdxNMyrYg0W8xtQ&s=10';

export default function HeroBanner() {
  return (
    <BannerWrapper>
      <section className="relative bg-gradient-to-r from-[#0a3d91] via-[#0d4fbf] to-[#00a8e8]">
        <div className="flex items-center gap-8 px-6 py-12 md:px-12 md:py-16">
          {/* Cột trái: logo + text + CTA */}
          <div className="flex-1 text-white">
            {/* Logo row */}
            <div className="mb-6 flex items-center gap-4">
              <BaoShopLogo className="h-auto w-32 text-white" />
              <div className="h-12 w-px bg-white/40" />
              <img
                src={PARTNER_LOGO}
                alt="Đại học Điện lực"
                className="h-12 w-auto"
              />
            </div>

            <p className="mb-3 text-xs uppercase tracking-wider opacity-80">
              Đối tác của Đại học Điện lực
            </p>

            <h1 className="mb-4 text-3xl font-extrabold leading-tight md:text-5xl">
              Chào mừng tân sinh viên{' '}
              <span className="text-cyan-400">K2026</span>
            </h1>

            <p className="mb-6 max-w-lg text-base opacity-90">
              Bảo Shop đồng hành cùng sinh viên Đại học Điện lực.
            </p>

            <button className="rounded-md bg-white px-6 py-3 font-semibold text-[#0a3d91] transition hover:bg-gray-100">
              Khám phá ngay
            </button>
          </div>

          {/* Cột phải: ảnh ngôi trường */}
          <div className="hidden flex-1 md:block">
            <img
              src={SCHOOL_IMAGE_URL}
              alt="Đại học Điện lực"
              className="w-full rounded-lg object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>
    </BannerWrapper>
  );
}