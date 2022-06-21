-- CreateTable
CREATE TABLE `OWNER` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fist_name` VARCHAR(191) NOT NULL,
    `phone` BIGINT NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `OWNER_phone_key`(`phone`),
    UNIQUE INDEX `OWNER_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ACCOUNT` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bar_code` VARCHAR(191) NOT NULL,
    `model` VARCHAR(191) NOT NULL,
    `balance` BIGINT NOT NULL DEFAULT 0,
    `ownerId` INTEGER NOT NULL,

    UNIQUE INDEX `ACCOUNT_bar_code_key`(`bar_code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HIST_TRANSFERS` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `value` BIGINT NOT NULL,
    `date_transfer_request` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_transfer_accepted` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `bar_code_to_transfer` VARCHAR(191) NOT NULL,
    `bar_code_owner` VARCHAR(191) NOT NULL,
    `accepted` BOOLEAN NOT NULL DEFAULT false,
    `ownerId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ACCOUNT` ADD CONSTRAINT `ACCOUNT_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `OWNER`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HIST_TRANSFERS` ADD CONSTRAINT `HIST_TRANSFERS_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `OWNER`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
