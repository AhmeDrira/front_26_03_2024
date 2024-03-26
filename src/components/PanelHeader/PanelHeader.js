import React from "react";

function PanelHeader({ size, children }) {
  // Définition des classes CSS conditionnelles pour la taille du panneau d'en-tête
  const headerClass = `panel-header ${size ? `panel-header-${size}` : ""}`;

  return <div className={headerClass}>{children}</div>;
}

export default PanelHeader;
