import "./App.css";
import { useState } from "react";
import Button from "./components/Button";

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function adicionarTarefa(e) {
    e.preventDefault();
    const texto = inputValue.trim();
    if (!texto) return;
    setTarefas([...tarefas, { id: Date.now(), text: texto }]);
    setInputValue("");
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  }

  return (
    <div className="container">
      <h1 className="titulo">📝 To-Do List</h1>

      <form className="form" onSubmit={adicionarTarefa}>
        <input
          className="input"
          type="text"
          placeholder="Digite uma nova tarefa..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="submit">Adicionar</Button>
      </form>

      {tarefas.length === 0 ? (
        <p className="lista-vazia">Nenhuma tarefa adicionada ainda.</p>
      ) : (
        <ul className="lista">
          {tarefas.map((tarefa) => (
            <li key={tarefa.id} className="item">
              <span className="item-texto">{tarefa.text}</span>
              <button
                className="btn-remover"
                onClick={() => removerTarefa(tarefa.id)}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}