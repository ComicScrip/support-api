/*
  Warnings:

  - You are about to drop the `Beverages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Beverages`;

-- CreateTable
CREATE TABLE `beverage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `type` VARCHAR(100) NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
