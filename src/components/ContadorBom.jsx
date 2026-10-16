import { useState } from "react";
export default function ContadorBom() { 

  const [contador, setContador] =
    useState(0);

  return (
    <button onClick={() =>
      setContador(contador + 1)}>
      Cliques: {contador}
    </button>
  );
}