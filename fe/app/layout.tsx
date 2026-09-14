import './globals.css';
import Header from '@/components/layout/Header';

export const metadata = {
  title: 'Best Buy Clone',
  description: 'Demo Next.js + Tailwind',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}