'use client';

import { useEffect, useState } from 'react';
import MainHeader from './MainHeader';
import SubNav from './SubNav';

export default function Header() {
  const [showSubNav, setShowSubNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = Math.max(0, window.scrollY);

      // Nếu kéo xuống cách đỉnh trên 20px -> Ẩn ngay lập tức
      if (currentY > 20) {
        setShowSubNav(false);
      } 
      // Nếu kéo sát về đỉnh (dưới 10px) -> Mới hiện lại
      else if (currentY < 10) {
        setShowSubNav(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <MainHeader />
      <SubNav visible={showSubNav} />
    </header>
  );
}