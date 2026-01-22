
import { Category, Article } from './types';

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'A Nova Era ',
    summary: 'Como as redes sociais e a IA estão transformando as relações entre nações e o papel dos embaixadores modernos.',
    content: 'O mundo está mudando rapidamente. A diplomacia, antes feita em salas fechadas, agora acontece em tempo real nos feeds de notícias...',
    category: Category.INTERNACIONAL,
    author: 'Helena Martins',
    date: '24 de Maio, 2024',
    imageUrl: 'https://picsum.photos/800/500?random=1',
    isBreaking: true
  },
  {
    id: '2',
    title: 'Mercados Emergentes: O  do Rosa',
    summary: 'A tendência estética que dominou a moda agora impulsiona o crescimento no setor de luxo e bens de consumo.',
    content: 'Economistas apontam que o fenômeno cultural do "Rose Gold" e tons pastéis abriu um novo nicho de mercado...',
    category: Category.ECONOMIA,
    author: 'Ricardo Alves',
    date: '23 de Maio, 2024',
    imageUrl: 'https://picsum.photos/600/400?random=2'
  },
  {
    id: '3',
    title: 'O Retorno da Ópera Contemporânea',
    summary: 'Grandes teatros europeus investem em produções modernas para atrair a Geração Z para as artes clássicas.',
    content: 'A cultura erudita nunca esteve tão vibrante. Novas adaptações de clássicos estão lotando os auditórios...',
    category: Category.CULTURA,
    author: 'Sofia Dantas',
    date: '23 de Maio, 2024',
    imageUrl: 'https://picsum.photos/600/400?random=3'
  },
  {
    id: '4',
    title: 'O Futuro dos Jogos Olímpicos em Cidades Sustentáveis',
    summary: 'Como as próximas sedes planejam utilizar infraestruturas existentes para evitar o desperdício de "elefantes brancos".',
    content: 'O esporte global enfrenta seu maior desafio: a sustentabilidade financeira e ambiental das grandes competições...',
    category: Category.ESPORTE,
    author: 'Mateus Oliveira',
    date: '22 de Maio, 2024',
    imageUrl: 'https://picsum.photos/600/400?random=4'
  },
  {
    id: '5',
    title: 'Inteligência Artificial e a Ética na Criação',
    summary: 'Artistas debatem os limites da co-autoria entre humanos e algoritmos generativos no cenário atual.',
    content: 'A tecnologia avançou para um ponto onde a distinção entre a pincelada humana e o pixel gerado é quase imperceptível...',
    category: Category.TECNOLOGIA,
    author: 'Clara Nunes',
    date: '22 de Maio, 2024',
    imageUrl: 'https://picsum.photos/600/400?random=5'
  },
  {
    id: '6',
    title: 'Reforma Tributária: O Que Esperar no Próximo Semestre',
    summary: 'Analistas explicam o impacto direto no bolso do consumidor com as novas alíquotas propostas pelo governo.',
    content: 'A política econômica entra em uma fase crucial de implementação, prometendo simplificar o sistema vigente...',
    category: Category.POLITICA,
    author: 'Joaquim Silva',
    date: '21 de Maio, 2024',
    imageUrl: 'https://picsum.photos/600/400?random=6'
  }
];
