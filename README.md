# React Dev Companion

A lightweight and customizable developer companion for React projects.\
Helps you stay productive with features like activity tracking,
reminders, and a fun companion widget.

------------------------------------------------------------------------

## 📦 Installation

Using npm:

``` bash
npm install react-dev-companion
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
import 'react-dev-companion/dist/react-dev-companion.css';

export default function App() {
  return (
    <div>
      <Companion direction="bottom-right" resetOnClick />
      <h6>Hello World 🚀</h6>
    </div>
  );
}
```

------------------------------------------------------------------------

## 🎛 Props

  ----------------------------------------------------------------------------
  Prop                Type           Default              Description
  ------------------- -------------- -------------------- --------------------
  `direction`         string         `"bottom-right"`     Position of the
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

------------------------------------------------------------------------

## 🎨 Styling

The package comes with a default CSS file.\
If you're **not using Tailwind**, you can still use it by importing:

``` tsx
import 'react-dev-companion/dist/react-dev-companion.css';
```

You can also override styles with your own CSS or Tailwind classes.

------------------------------------------------------------------------

## 🛠 Development

Clone and run locally:

``` bash
git clone https://github.com/khxif/react-dev-companion.git
cd react-dev-companion
npm install
npm run dev
```

Build for production:

``` bash
npm run build
```

------------------------------------------------------------------------

## 📄 License

This project is licensed under the **MIT License** -- free to use and
modify.

------------------------------------------------------------------------

## 💡 Contributing

Pull requests are welcome! For major changes, please open an issue first
to discuss your ideas.
