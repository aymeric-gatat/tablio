# 🧩 Tablio – React Table Component

**Tablio** est un composant React léger et réutilisable permettant d'afficher des tableaux dynamiques avec tri, pagination, recherche et options de style intégrées.

---

## 📦 Installation

```bash
npm install @rikoou/tablio
```

> Assurez-vous d'avoir `react` et `react-dom` installés dans votre projet (déclarés en peer dependencies).

---

## 🚀 Utilisation

```jsx
import React from "react";
import { TableComponent } from "@rikoou/tablio";

const data = [
  {
    firstname: "Jane",
    lastname: "Doe",
    age: 30,
    adress: {
      street: "123 Main St",
      city: "Paris",
      zipCode: "75001",
      state: "Île-de-France",
    },
  },
  // ...
];

function App() {
  return <TableComponent array={data} />;
}

export default App;
```

---

## ⚙️ Props disponibles

| Prop          | Type      | Par défaut | Description                                                                 |
| ------------- | --------- | ---------- | --------------------------------------------------------------------------- |
| `array`       | `array`   | `[]`       | Données à afficher dans le tableau. Doit contenir des objets avec `adress`. |
| `arrayHeader` | `boolean` | `true`     | Affiche les en-têtes du tableau.                                            |
| `arrayStyle`  | `boolean` | `true`     | Applique les styles CSS intégrés automatiquement.                           |
| `className`   | `string`  | `""`       | Classe CSS personnalisée sur le conteneur du tableau.                       |

---

## 🎨 Style

Par défaut, Tablio applique un style CSS intégré via `<style>`.
Si vous préférez gérer vos propres styles, passez `arrayStyle={false}` et utilisez vos propres classes.

---

## 📚 Fonctionnalités

- ✅ Pagination
- ✅ Recherche textuelle
- ✅ Tri ascendant / descendant par colonne (y compris les champs d'adresse)
- ✅ Styles par défaut embarqués
- ✅ Facile à intégrer et à personnaliser

---

## 📦 Build & publication (pour contributeurs)

```bash
# Installer les dépendances
npm install

# Construire la bibliothèque
npm run build

# Tester localement (dans un autre projet)
npm link
```

---

## 🧑‍💻 Auteur

**Aymeric Gatat**
📦 NPM: [@rikoou/tablio](https://www.npmjs.com/package/@rikoou/tablio)

---

## 🪪 Licence

ISC

````

---

### ✅ Et ensuite :
- Place ce fichier en `README.md` à la racine de ton projet `tablio/`
- Rebuild ton `.tgz` avec :
  ```bash
  npm run build
  npm pack
````

- Ou publie-le sur npm si tout est prêt :

  ```bash
  npm publish --access public
  ```
