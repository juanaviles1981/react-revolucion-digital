export const Email = ({ valor, onChange }) => {
  return (
    <div>
      <h2>Email</h2>
      <input
        type="email"
        id="email"
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ingrese su email"
      />
    </div>
  );
};
