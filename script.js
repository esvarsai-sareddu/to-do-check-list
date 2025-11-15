// script.js - simple, clean DOM manipulations for the To-Do app
(function () {
  // DOM elements
  const input = document.getElementById('task-input');
  const addBtn = document.getElementById('add-btn');
  const list = document.getElementById('task-list');

  // Helpers
  function createTaskElement(text) {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.setAttribute('role', 'listitem');

    // Task text (click to toggle completed)
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = text;
    span.tabIndex = 0; // make it keyboard-focusable

    // Toggle completed when clicking the text or pressing Enter/Space while focused
    function toggleCompleted() {
      li.classList.toggle('completed');
    }
    span.addEventListener('click', toggleCompleted);
    span.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCompleted();
      }
    });

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.className = 'delete-btn';
    delBtn.type = 'button';
    delBtn.setAttribute('aria-label', `Delete task: ${text}`);
    delBtn.textContent = 'Delete';

    delBtn.addEventListener('click', function (e) {
      e.stopPropagation(); // don't trigger parent click
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(delBtn);

    return li;
  }

  function addTaskFromInput() {
    const raw = input.value;
    const text = raw.trim();
    if (!text) {
      // small visual feedback for empty input
      input.animate(
        [{ transform: 'translateX(0)' }, { transform: 'translateX(-6px)' }, { transform: 'translateX(6px)' }, { transform: 'translateX(0)' }],
        { duration: 200, iterations: 1 }
      );
      input.focus();
      return;
    }

    const taskEl = createTaskElement(text);
    list.appendChild(taskEl);

    input.value = '';
    input.focus();
  }

  // Event listeners
  addBtn.addEventListener('click', addTaskFromInput);

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      addTaskFromInput();
    }
  });

  // Optional: allow pasting a list of newline-separated tasks
  input.addEventListener('paste', function (e) {
    // If the pasted content contains newlines, split and add each task
    const paste = (e.clipboardData || window.clipboardData).getData('text');
    if (paste && /\r|\n/.test(paste)) {
      e.preventDefault();
      const lines = paste.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
      lines.forEach(line => {
        const taskEl = createTaskElement(line);
        list.appendChild(taskEl);
      });
      input.value = '';
    }
  });

  // Keep UI responsive: delegate double-click clear? (not implemented)
  // The app is ready: no page reloads occur, and all actions are instant.
})();