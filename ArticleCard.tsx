
import React from 'react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  layout?: 'main' | 'secondary' | 'sidebar';
  onClick: (id: string) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, layout = 'secondary', onClick }) => {
  if (layout === 'main') {
    return (
      <div 
        className="group cursor-pointer flex flex-col gap-4 border-b border-[#FADCE6] pb-8 mb-8 lg:pb-0 lg:mb-0 lg:border-b-0"
        onClick={() => onClick(article.id)}
      >
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-96 object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="space-y-3">
          <span className="text-[#C77B89] font-bold text-xs uppercase tracking-widest">{article.category}</span>
          <h2 className="serif text-4xl font-bold leading-tight group-hover:text-[#C77B89] transition-colors">
            {article.title}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {article.summary}
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className="font-bold uppercase tracking-tight">Por {article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>
        </div>
      </div>
    );
  }

  if (layout === 'sidebar') {
    return (
      <div 
        className="group cursor-pointer border-b border-[#FADCE6] pb-4 mb-4 last:border-0"
        onClick={() => onClick(article.id)}
      >
        <span className="text-[#C77B89] font-bold text-[10px] uppercase tracking-widest">{article.category}</span>
        <h3 className="serif text-lg font-bold leading-tight mt-1 group-hover:text-[#C77B89] transition-colors">
          {article.title}
        </h3>
        <p className="text-xs text-gray-500 mt-1">{article.date}</p>
      </div>
    );
  }

  return (
    <div 
      className="group cursor-pointer flex flex-col gap-3 border-b border-[#FADCE6] pb-6"
      onClick={() => onClick(article.id)}
    >
      <div className="overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-48 object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <span className="text-[#C77B89] font-bold text-[10px] uppercase tracking-widest">{article.category}</span>
      <h3 className="serif text-xl font-bold leading-tight group-hover:text-[#C77B89] transition-colors">
        {article.title}
      </h3>
      <p className="text-sm text-gray-600 line-clamp-2">
        {article.summary}
      </p>
      <div className="text-[10px] text-gray-400 uppercase font-semibold">
        {article.author}
      </div>
    </div>
  );
};

export default ArticleCard;
