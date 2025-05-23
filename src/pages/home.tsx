import { IPostProps, Post } from '../components/post';
import { Sidebar } from '../components/sidebar';

const posts: IPostProps[] = [
  {
    id: 1,
    author: {
      avatarURL: 'https://github.com/LucasAnselmoSilva12345.png',
      name: 'Lucas Anselmo',
      role: 'Personal Trainer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de compartilhar meu novo plano de treino. Esse plano vai focar no ganho de massa muscular e definição!',
      },
      {
        type: 'paragraph',
        content:
          'Além disso, estou documentando minha evolução corporal e postando dicas de exercícios!',
      },
      {
        type: 'paragraph',
        content:
          'O plano de treino inclui 5 dias de treino com foco em membros superiores, inferiores e abdômen. São 4 séries de 10 repetições para cada exercício, com aumento progressivo de carga a cada semana.',
      },
      {
        type: 'link',
        content: 'fitfeed.com/lucasanselmo/treino-massa-muscular',
      },
      { type: 'hashtag', content: '#planodetreino' },
      { type: 'hashtag', content: '#evolucaocorporal' },
      { type: 'hashtag', content: '#fitness' },
    ],
    publishedAt: new Date('2025-04-01 22:30:50'),
  },
  {
    id: 2,
    author: {
      avatarURL: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Nutricionista e Coach Fitness',
    },
    content: [
      { type: 'paragraph', content: 'Oi pessoal! 💪' },
      {
        type: 'paragraph',
        content:
          'Estou compartilhando meu plano de emagrecimento saudável. É focado em perda de gordura com exercícios de alta intensidade.',
      },
      {
        type: 'paragraph',
        content:
          'O treino inclui 4 dias de HIIT e 2 dias de alongamento e recuperação ativa. É perfeito para quem tem pouco tempo e quer resultados rápidos!',
      },
      {
        type: 'link',
        content: 'fitfeed.com/diegofernandes/plano-emagrecimento',
      },
      { type: 'hashtag', content: '#emagrecimento' },
      { type: 'hashtag', content: '#HIIT' },
      { type: 'hashtag', content: '#vidasaudavel' },
    ],
    publishedAt: new Date('2025-03-25 17:30:59'),
  },
  {
    id: 3,
    author: {
      avatarURL: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito Silva',
      role: 'Coach de Performance',
    },
    content: [
      { type: 'paragraph', content: 'E aí, pessoal! 🏋️' },
      {
        type: 'paragraph',
        content:
          'Hoje compartilhei meu plano de treino focado em resistência cardiovascular e força!',
      },
      {
        type: 'paragraph',
        content:
          'São 3 dias de corrida e 3 dias de treino funcional com foco em aumento da resistência e força muscular. Ideal para quem quer melhorar o condicionamento físico geral.',
      },
      { type: 'link', content: 'fitfeed.com/maykbrito/treino-resistencia' },
      { type: 'hashtag', content: '#resistencia' },
      { type: 'hashtag', content: '#corrida' },
      { type: 'hashtag', content: '#forca' },
    ],
    publishedAt: new Date('2025-03-21 07:35:41'),
  },
];

export function Home() {
  return (
    <section className="max-w-[70rem] mx-auto grid grid-cols-1 lg:grid-cols-[256px_1fr] gap-8 items-start">
      <Sidebar />

      <div className="space-y-8">
        {posts.map((postData) => {
          return <Post key={postData.id} post={postData} />;
        })}
      </div>
    </section>
  );
}
