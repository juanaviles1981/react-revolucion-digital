export const Ejemplo1 = () => {
  const toggle = () => {
    const message = document.getElementById("secreto");
    if (message.style.display === "none") {
      message.style.display = "block";
    } else {
      message.style.display = "none";
    }
  };
  return (
    <>
      <button onClick={toggle}>mostrar / ocultar mensaje</button>
      <p id="secreto" style={{ display: "none" }}>
        Este es un mensaje secreto
      </p>
    </>
  );
};
