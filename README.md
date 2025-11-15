# Simple To‑Do List

A clean, responsive, minimal To‑Do List web app built with plain HTML, CSS, and vanilla JavaScript.

This project is intentionally dependency-free and works when opened directly in a browser or served with a static server such as `live-server`.

## Features

- Add tasks via the "Add" button or by pressing Enter.
- Toggle tasks as completed by clicking them or pressing Enter/Space when focused.
- Remove tasks instantly using the red "Delete" button.
- Modern minimal UI with box shadows, rounded corners, and responsive layout.
- Accessible keyboard interactions and semantic markup.
- No page reloads, no external libraries.

## Files

- `index.html` — Main HTML file containing the layout and elements.
- `style.css` — Styles providing a modern minimal UI (box shadows, rounded corners, responsive).
- `script.js` — Vanilla JS that handles task creation, completion toggling, and deletion.
- `README.md` — This file.

## How to run

Option 1 — Open directly
1. Place all files in the same folder.
2. Open `index.html` in your browser (double-click or "Open File" in the browser).

Option 2 — Run with live-server (recommended for a better dev experience)
1. Install live-server if you don't have it:
```bash
npm install -g live-server
```
2. Run the server in the project directory:
```bash
live-server
```
This will open the app in your default browser and automatically reload on file changes.

Option 3 — Use any static server
You can serve the folder with any static server (http-server, python -m http.server, etc.).

## Usage & Keyboard Shortcuts

- Type a task in the input field and either:
  - Click "Add"
  - Press Enter
- Click a task text to toggle completed. When the task text is focused you can press:
  - Enter or Space — toggles completed
- Click the "Delete" button to immediately remove the task.
- Paste multiple newline-separated tasks into the input to add them all at once.

Completed tasks are visually indicated with a line-through and reduced opacity.

## Accessibility notes

- Task text elements are keyboard-focusable (tabindex) and respond to Enter/Space activation for toggling.
- Buttons have aria-labels to assist screen reader users.
- The task list uses `aria-live="polite"` to notify assistive tech of changes.

## Development notes / Implementation details

- Clean DOM manipulation using `document.createElement`, `addEventListener`, and `appendChild`.
- No `innerHTML` usage to avoid accidental XSS.
- Simple, small codebase intended to be readable and easy to extend.

## Customization ideas

- Persist tasks using localStorage.
- Add edit-in-place for tasks.
- Add task filtering (all / active / completed).
- Add due dates or priorities and sort functionality.

## License

MIT License — feel free to reuse and modify.

## Contributing

Small fixes and improvements are welcome. Open an issue or send a PR if you have changes to share.
