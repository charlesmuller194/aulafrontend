const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// ─── Adicionar tarefa ─────────────────────────────────────────────────────────

function addTask() {
  const text = taskInput.value.trim();

  if (text === "") {
    taskInput.focus();
    return;
  }

  // Cria o <li>
  const li = document.createElement("li");

  // Checkbox para marcar como concluída (opcional)
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Span com o texto da tarefa
  const span = document.createElement("span");
  span.classList.add("task-text");
  span.textContent = text;

  // Dica visual de remoção
  const hint = document.createElement("span");
  hint.classList.add("remove-hint");
  hint.textContent = "clique para remover";

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(hint);

  taskList.appendChild(li);

  // Remove mensagem "lista vazia", se existir
  const emptyMsg = taskList.querySelector(".empty-msg");
  if (emptyMsg) emptyMsg.remove();

  // Limpa o input
  taskInput.value = "";
  taskInput.focus();
}

// ─── Delegação de eventos na <ul> ────────────────────────────────────────────
// Um único listener na lista cuida de TODOS os <li>, inclusive os criados depois.

taskList.addEventListener("click", function (event) {
  const li = event.target.closest("li");
  if (!li) return;

  // Se clicou no checkbox → marca/desmarca "concluída" sem remover
  if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
    li.classList.toggle("done", event.target.checked);
    return;
  }

  // Qualquer outro clique no <li> → remove do DOM
  li.remove();

  // Exibe mensagem quando a lista ficar vazia
  if (taskList.children.length === 0) {
    const msg = document.createElement("li");
    msg.classList.add("empty-msg");
    msg.textContent = "Nenhuma tarefa ainda. Adicione uma acima!";
    taskList.appendChild(msg);
  }
});

// ─── Adicionar com Enter ──────────────────────────────────────────────────────

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

addBtn.addEventListener("click", addTask);
