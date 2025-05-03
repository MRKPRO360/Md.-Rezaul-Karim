import Footer from '@/components/shared/Footer/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';

export const metadata = {
  title: 'Md. Rezaul Karim',
  description: 'A showcase of my work and projects',
  icons: {
    icon: '/favicon.ico',
  },
};

async function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1526px] mx-auto">
      <Navbar />
      <div className="mt-10 md:mt-14 min-h-[80vh]">{children}</div>
      <Footer />
    </div>
  );
}

export default HomePageLayout;
