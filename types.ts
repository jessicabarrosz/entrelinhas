
export enum Category {
  POLITICA = 'Política',
  ECONOMIA = 'Economia',
  CULTURA = 'Cultura',
  ESPORTE = 'Esporte',
  TECNOLOGIA = 'Tecnologia',
  INTERNACIONAL = 'Internacional',
  OPINIAO = 'Opinião'
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: Category;
  author: string;
  date: string;
  imageUrl: string;
  isBreaking?: boolean;
}
