import { useState } from "react";
import "./CheckoutForm.css";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      surname,
      phone,
      email,
    };

    onConfirm(userData);
  };
  return (
    <div className="FormContainer mb-5">
      <form onSubmit={handleConfirm}>
        <div class="mb-3">
          <label className="form-label paragraph">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div class="mb-3">
          <label className="form-label paragraph">Apellido</label>
          <input
            type="text"
            className="form-control"
            value={surname}
            onChange={({ target }) => setSurname(target.value)}
          />
        </div>
        <div class="mb-3">
          <label className="form-label paragraph">Teléfono</label>
          <input
            type="text"
            className="form-control"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label paragraph">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Crear orden
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
