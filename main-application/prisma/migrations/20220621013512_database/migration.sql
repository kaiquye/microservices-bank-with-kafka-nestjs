-- CreateTable
CREATE TABLE `USER` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fist_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `phone` BIGINT NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `USER_phone_key`(`phone`),
    UNIQUE INDEX `USER_password_key`(`password`),
    UNIQUE INDEX `USER_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
