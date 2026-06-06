import Stripe from "stripe";
import { PrismaOrderRepository } from "@/modules/order/infrastructure/repositories/PrismaOrderRepository.js";
import { CreateCheckoutSessionUseCase } from "./CreateCheckoutSessionUseCase.js";
import { HandleWebhookUseCase } from "./HandleWebhookUseCase.js";
import { StripePaymentGateway } from "@/modules/payment/infrastructure/StripePaymentGateway.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "";
const paymentGateway = new StripePaymentGateway(stripe, webhookSecret);
const orderRepository = new PrismaOrderRepository();

export const createCheckoutSessionUseCase =
  new CreateCheckoutSessionUseCase(paymentGateway);

export const handleWebhookUseCase =
  new HandleWebhookUseCase(paymentGateway, orderRepository);
