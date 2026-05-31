import { z }
  from "zod";



export const productSchema =
  z.object({

    name:
      z.string()
        .min(2)
        .max(120),

    price:
      z.coerce.number()
        .positive(),

    quantite:
      z.coerce.number()
        .min(0),

    poid:
      z.coerce.number()
        .positive(),

    category:
      z.string()
        .min(2),
  });



export const checkoutSchema =
  z.object({

    email:
      z.string()
        .email(),

    name:
      z.string()
        .min(2),

    family:
      z.string()
        .min(2),

    address:
      z.string()
        .min(5),

    city:
      z.string()
        .min(2),

    zipCode:
      z.string()
        .min(2),
  });