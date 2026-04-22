import Header from './components/Header';
import Article from './components/Article';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './App.css';

function App() {
  const tituloBlog = 'Meu Blog de Viagens';

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Sobre', href: '#' },
    { label: 'Contato', href: '#' },
  ];

  const post = {
    titulo: 'Descobrindo as Praias do Nordeste',
    autor: 'Carlos',
    data: {
      iso: '2025-08-15',
      exibicao: '15 de agosto de 2025',
    },
    conteudo: [
      'O Nordeste brasileiro é um verdadeiro paraíso para os amantes de praias. Com águas mornas, areias douradas e uma cultura vibrante, essa região encanta visitantes de todo o mundo. Desde as dunas de Jericoacoara até as piscinas naturais de Porto de Galinhas, cada destino guarda uma beleza única.',
      'Durante minha viagem, tive a oportunidade de explorar pequenas vilas de pescadores, provar frutos do mar fresquíssimos e assistir ao pôr do sol mais bonito que já vi na vida. A hospitalidade do povo nordestino torna cada experiência ainda mais especial e memorável.',
    ],
    imagem: {
      src: 'https://destinos.zupper.com.br/wp-content/uploads/2024/09/Jericoacoara-4_4_11zon.jpg',
      alt: 'Vista panorâmica de uma praia do Nordeste',
      legenda: 'Vista panorâmica das praias cristalinas de Jericoacoara, no Ceará.',
    },
  };

  const postsRelacionados = [
    { titulo: 'As Melhores Cachoeiras do Brasil', href: '#' },
    { titulo: 'Roteiro pela Serra Gaúcha', href: '#' },
    { titulo: 'Pantanal: Um Safari Brasileiro', href: '#' },
    { titulo: 'Fernando de Noronha: Vale a Pena?', href: '#' },
  ];

  return (
    <>
      <Header titulo={tituloBlog} links={navLinks} />
      <Article
        titulo={post.titulo}
        autor={post.autor}
        data={post.data}
        conteudo={post.conteudo}
        imagem={post.imagem}
      />
      <Sidebar postsRelacionados={postsRelacionados} />
      <Footer texto="© 2025 Meu Blog de Viagens - Todos os direitos reservados." />
    </>
  );
}

export default App;
