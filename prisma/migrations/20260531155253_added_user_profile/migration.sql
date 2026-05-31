/*
  Warnings:

  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AuditLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PasswordResetToken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VerificationCode` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "DeliveryStatus" AS ENUM ('unshipped', 'shipped', 'delivered');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('unpaid', 'paid', 'fail');

-- CreateEnum
CREATE TYPE "Provider" AS ENUM ('credentials', 'google', 'facebook');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('user', 'admin');

-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_orderId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_userId_fkey";

-- DropTable
DROP TABLE "Account";

-- DropTable
DROP TABLE "AuditLog";

-- DropTable
DROP TABLE "Order";

-- DropTable
DROP TABLE "OrderItem";

-- DropTable
DROP TABLE "PasswordResetToken";

-- DropTable
DROP TABLE "Product";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "VerificationCode";
