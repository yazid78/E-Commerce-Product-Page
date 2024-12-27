import express from "express";
import Stripe from "stripe";
import cors from "cors";
import "dotenv/config";
// eslint-disable-next-line no-undef
const key = process.env.KEY_STRIPE;
const stripe = new Stripe(key);
const app = express();
const YOUR_DOMAIN = "http://localhost:5173";

app.use(cors());
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  const { firstName, lastName, email, address, city, postalCode } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Achat en ligne",
              description: `Client : ${firstName} ${lastName}`,
            },
            unit_amount: 125,
          },
          quantity: 1,
        },
      ],
      customer_email: email,
      metadata: {
        address,
        city,
        postalCode,
      },
      success_url: `${YOUR_DOMAIN}/success`,
      cancel_url: `${YOUR_DOMAIN}/checkout`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Erreur lors de la création de la session:", error);
    res.status(500).json({ error: "Erreur lors de la création de la session." });
  }
});

app.listen(4242, () => console.log("Serveur démarré sur le port 4242"));
