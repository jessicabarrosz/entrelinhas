
import React, { useState } from 'react';
import { Category } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeCategory: string | null;
  onCategoryClick: (cat: Category | null) => void;
  onHomeClick: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeCategory, onCategoryClick, onHomeClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const categories = Object.values(Category);

  const today = new Date().toLocaleDateString('pt-BR', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-[#FFFFFF] flex flex-col">
      {/* Top Header */}
      <header className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-4 border-b border-[#FADCE6]">
          <div className="flex gap-4 items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <span className="hidden lg:block text-xs font-bold uppercase tracking-tighter text-gray-500">{today}</span>
          </div>
          <div className="hidden lg:flex gap-6 items-center text-xs font-bold uppercase tracking-widest text-[#C77B89]">
            <a href="#" className="hover:opacity-70 transition-opacity">Entrar</a>
            <a href="#" className="bg-[#C77B89] text-white px-4 py-1.5 rounded-sm hover:bg-[#B66A78] transition-colors">Assine Já</a>
          </div>
        </div>

        <div className="py-8 text-center" onClick={onHomeClick}>
          <h1 className="serif text-5xl md:text-7xl lg:text-8xl font-black cursor-pointer tracking-tighter hover:text-[#C77B89] transition-colors">
            The Rosé Gazette
          </h1>
        </div>

        {/* Navigation Bar */}
        <nav className="double-border flex flex-wrap justify-center items-center py-2 gap-x-6 gap-y-2 mb-8">
          <button 
            onClick={onHomeClick}
            className={`text-xs font-bold uppercase tracking-widest hover:text-[#C77B89] transition-colors ${!activeCategory ? 'text-[#C77B89]' : 'text-gray-700'}`}
          >
            Página Inicial
          </button>
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => onCategoryClick(cat)}
              className={`text-xs font-bold uppercase tracking-widest hover:text-[#C77B89] transition-colors ${activeCategory === cat ? 'text-[#C77B89]' : 'text-gray-700'}`}
            >
              {cat}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 lg:px-8 pb-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#F8E8EE] border-t border-[#FADCE6] py-16">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h2 className="serif text-4xl font-bold mb-6">The Rosé Gazette</h2>
            <p className="text-gray-600 mb-6 max-w-md">
              O jornalismo de excelência com uma curadoria estética impecável. Sua dose diária de informação, elegância e sofisticação.
            </p>
            <div className="flex gap-4">
               {/* Social placeholders */}
               <div className="w-8 h-8 rounded-full bg-[#C77B89] flex items-center justify-center text-white text-xs">IG</div>
               <div className="w-8 h-8 rounded-full bg-[#C77B89] flex items-center justify-center text-white text-xs">TW</div>
               <div className="w-8 h-8 rounded-full bg-[#C77B89] flex items-center justify-center text-white text-xs">FB</div>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C77B89] mb-6">Seções</h4>
            <ul className="space-y-3 text-sm text-gray-700">
              {categories.map(cat => <li key={cat}><button onClick={() => onCategoryClick(cat)} className="hover:text-[#C77B89]">{cat}</button></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C77B89] mb-6">Assinatura</h4>
            <p className="text-sm text-gray-600 mb-4">Receba as notícias mais importantes no seu e-mail.</p>
            <div className="flex flex-col gap-2">
              <input type="email" placeholder="Seu e-mail" className="p-2 border border-[#FADCE6] focus:outline-none focus:ring-1 focus:ring-[#C77B89]" />
              <button className="bg-[#C77B89] text-white py-2 font-bold uppercase text-xs tracking-widest hover:bg-[#B66A78]">Cadastrar</button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 mt-16 pt-8 border-t border-[#FADCE6] text-center text-xs text-gray-500 uppercase tracking-widest">
          © 2024 The Rosé Gazette. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
