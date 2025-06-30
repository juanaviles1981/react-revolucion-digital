export const Nombre = ({ valor, onChange }) => {
  return (
    <div>
      <h2>Nombre</h2>
      <input
        type="text"
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Escribe tu nombre"
      />
    </div>
  );
};
