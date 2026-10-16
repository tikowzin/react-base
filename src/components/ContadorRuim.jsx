export default function ContadorRuim() 
{
  let contador = 0;

  return (
    <button onClick={() => contador++}>
      Cliques: {contador}
    </button>
  );
}