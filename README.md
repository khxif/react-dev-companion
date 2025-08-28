# React Dev Companion

**React Dev Companion** is a fun and interactive companion for React developers. It integrates with your **Pomodoro timer** and visually shows your coding activity through an **animated pet that wakes up, walks, and gets tired as your session progresses.on widget**.

---

## 📦 Installation

Using **npm**:

```bash
npm install react-dev-companion --save-dev
```

Using **yarn**:

```bash
yarn add react-dev-companion --dev
```

---

## ⚡ Usage

Import the component and styles into your project:

```tsx
import { Companion } from 'react-dev-companion';

export default function App() {
  return (
    <div>
      <Companion direction="bottom-right" resetOnClick />
    </div>
  );
}
```

---

## 🎛 Props

| Prop         | Type    | Default          | Description                                                                 |
|--------------|---------|------------------|-----------------------------------------------------------------------------|
| `position`   | string  | `"bottom-right"` | Position of the companion. Options: `"bottom-right"`, `"bottom-left"`, `"top-right"`, `"top-left"`. |
| `resetOnClick` | boolean | `false`         | Whether clicking resets the companion's state.                              |

---

## 📄 License

This project is licensed under the **MIT License** — free to use and modify.

---

## 💡 Contributing

Pull requests are welcome!  
For major changes, please open an issue first to discuss your ideas.
