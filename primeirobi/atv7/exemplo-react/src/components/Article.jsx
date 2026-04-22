function Article({ titulo, autor, data, conteudo, imagem }) {
  return (
    <main>
      <article>
        <h2>{titulo}</h2>
        <time dateTime={data.iso}>{data.exibicao}</time>

        {conteudo.map((paragrafo, index) => (
          <p key={index}>{paragrafo}</p>
        ))}

        <figure>
          <img src={imagem.src} alt={imagem.alt} />
          <figcaption>{imagem.legenda}</figcaption>
        </figure>
      </article>
    </main>
  );
}

export default Article;
