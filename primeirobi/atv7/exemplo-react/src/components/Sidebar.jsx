function Sidebar({ postsRelacionados }) {
  return (
    <aside>
      <h3>Posts Relacionados</h3>
      <ul>
        {postsRelacionados.map((post, index) => (
          <li key={index}>
            <a href={post.href}>{post.titulo}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
