import { useState } from "react";
const Checkout = ({ countPanier }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Valider les champs
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.address ||
      !formData.city ||
      !formData.postalCode
    ) {
      alert("Tous les champs sont obligatoires !");
      return;
    }

    try {
      // Appeler le backend pour créer une session Stripe
      const response = await fetch("http://localhost:4242/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.url) {
        // Rediriger vers Stripe Checkout
        window.location.href = data.url;
      } else {
        alert("Erreur lors de la création de la session de paiement.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div className="flex flex-col items-center p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Payment Page</h1>
      <form onSubmit={handleSubmit} className="grid gap-4 w-full max-w-md bg-gray-100 p-6 rounded shadow">
        <label>
          Prénom
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </label>
        <label>
          Nom
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </label>
        <label>
          Adresse
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </label>
        <label>
          Ville
          <input type="text" name="city" value={formData.city} onChange={handleChange} className="border p-2 w-full" />
        </label>
        <label>
          Code postal
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Payer {125 * countPanier + ".00"}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
