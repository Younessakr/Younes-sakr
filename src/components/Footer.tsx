import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-gray-400 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-4 text-lg font-medium text-white">Younes Sakr</p>
          <p className="mb-6 flex items-center justify-center">
            Fait avec <Heart className="h-4 w-4 text-red-500 mx-1" /> et passion
          </p>
          <p className="text-sm">
            &copy; {currentYear} Younes Sakr. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};