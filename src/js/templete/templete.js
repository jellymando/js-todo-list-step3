export const teamItem = (data) => {
  return `
    <div id="${data._id}" class="team-card-container">
      <a href="#" class="card">
        <div class="card-title">
          ${data.name}
        </div>
      </a>
    </div>
  `;
};

export const memberItem = (data) => {
  return `
  <li id="${data._id}" class="todoapp-container">
    <h2>
      <span><strong>${data.name}</strong>'s Todo List</span>
    </h2>
    <div class="todoapp">
      <section class="input-container">
        <input id="new-todo-title" class="new-todo" placeholder="할 일을 입력해주세요." autofocus />
      </section>
      <section class="main">
        <ul class="todo-list">
        </ul>
      </section>
      <div class="count-container">
      <span class="todo-count">총 <strong>0</strong> 개</span>
      <ul class="filters">
        <li>
          <a href="#all" class="selected">전체보기</a>
        </li>
        <li>
          <a href="#priority">우선 순위</a>
        </li>
        <li>
          <a href="#active">해야할 일</a>
        </li>
        <li>
          <a href="#completed">완료한 일</a>
        </li>
      </ul>
      <button class="clear-completed">모두 삭제</button>
    </div>
  </li>
  `;
};

export const todoItem = (data) => {
  return `
    <li id="${data._id}" class="todo-list-item ${
    data.isCompleted ? "completed" : ""
  }">
        <div class="view">
        <input class="toggle" type="checkbox" ${
          data.isCompleted ? "checked" : ""
        }/>
        <label class="label">
        ${
          data.priority === "FIRST"
            ? `
          <span class="chip primary">1순위</span>
          `
            : data.priority === "SECOND"
            ? `
          <span class="chip secondary">2순위</span>
          `
            : `
          <select class="chip select">
            <option value="0" selected>순위</option>
            <option value="1">1순위</option>
            <option value="2">2순위</option>
          </select>
          `
        }
          ${data.contents}
        </label>
        <button class="destroy"></button>
        </div>
        <input class="edit" value="${data.contents}" />
    </li>
    `;
};

export const loading = () => {
  return `
        <li>
        <div class="view">
          <label class="label">
            <div class="animated-background">
              <div class="skel-mask-container">
                <div class="skel-mask"></div>
              </div>
            </div>
          </label>
        </div>
      </li>
    `;
};
