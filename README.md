# React Dev Companion

A lightweight and customizable developer companion for React projects.\
Helps you stay productive with features like activity tracking,
reminders, and a fun companion widget.

------------------------------------------------------------------------

## 📦 Installation

Using npm:

``` bash
npm install react-dev-companion --save-dev
```

Using yarn:

``` bash
yarn add react-dev-companion
```

------------------------------------------------------------------------

## ⚡ Usage

Import the component and styles into your project:

``` tsx
import { Companion } from 'react-dev-companion';

export default function App() {
  return (
    <div>
      <Companion direction="bottom-right" resetOnClick />
    </div>
  );
}
```

------------------------------------------------------------------------

## 🎛 Props

  ----------------------------------------------------------------------------
  Prop                Type           Default              Description
  ------------------- -------------- -------------------- --------------------
  `position`         string         `"bottom-right"`     Position of the
                                                          companion
                                                          (`"bottom-right"`,
                                                          `"bottom-left"`,
                                                          `"top-right"`,
                                                          `"top-left"`)

  `resetOnClick`      boolean        `false`              Whether clicking
                                                          resets the
                                                          companion's state

  `className`         string         `""`                 Add custom CSS
                                                          classes for styling
  ----------------------------------------------------------------------------

## 📄 License

This project is licensed under the **MIT License** -- free to use and
modify.

------------------------------------------------------------------------

## 💡 Contributing

Pull requests are welcome! For major changes, please open an issue first
to discuss your ideas.
