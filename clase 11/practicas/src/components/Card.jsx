
export const Card = ({ nombre, edad, email, direccion }) => {
  return (
    <>
      <h3>{nombre}</h3>
      <ul>
        <li>{edad}</li>
        <li>{email}</li>
        <li>{direccion}</li>
      </ul>
    </>
  );
};
