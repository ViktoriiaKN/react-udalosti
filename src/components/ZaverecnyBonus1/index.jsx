/*
Zadání: Předstírejme, že na stránce je složitý formulář, do kterého uživatel možná pracně vyplnil
  nějaká data. Po kliku na odkaz se radši uživatele zeptejte pomocí `confirm`, jestli chce opravdu
  odejít na jinou stránku a tím ztratit rozpracovanou práci. Pokud otázku nepotvrdí, nechce odejít,
  zamezte přesměrování pomocí `event.preventDefault()`.
*/

import React from 'react';

export const ZaverecnyBonus1 = () => {
  let isFormComplete = false; // Proměnná sledující změny ve formuláři

  const handleLinkClick = (event) => {
    if (isFormComplete) { // Kontrola, zda byl formulář změněn
      const confirmation = confirm("Opravdu chcete opustit tuto stránku? Vaše změny nebudou uloženy.");
      if (!confirmation) {
        event.preventDefault(); // Zamezení přesměrování
      }
    }
  };

  const handleFormChange = () => {
    isFormComplete = true; // Nastavení proměnné na true při jakékoli změně ve formuláři
  };

  return (
    <>
      Odkaz: <a href="https://www.czechitas.cz/" onClick={handleLinkClick}>www.czechitas.cz</a>
      <hr />
      Formulář:
      <form>
        <textarea
          rows={5}
          cols={60}
          defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aperiam vitae necessitatibus et perspiciatis consectetur, soluta quia vero porro hic, esse tempora sint eaque adipisci asperiores alias repudiandae tempore? Omnis?"
          onChange={handleFormChange}
        />
        <br />
        <button>uložit</button>
      </form>
    </>
  );
};
