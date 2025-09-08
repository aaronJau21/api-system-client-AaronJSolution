-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(70) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `password` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Clients` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(25) NOT NULL,
    `father_last_name` VARCHAR(25) NOT NULL,
    `mother_last_name` VARCHAR(25) NOT NULL,
    `email` VARCHAR(70) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `password` VARCHAR(255) NULL,
    `state` ENUM('potencial', 'activo', 'inactivo') NOT NULL DEFAULT 'potencial',

    UNIQUE INDEX `Clients_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Type_projects` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `name` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `Type_projects_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Projects` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `description` TEXT NOT NULL,
    `state` ENUM('proceso', 'trunco', 'finalizado') NOT NULL DEFAULT 'proceso',
    `user_id` INTEGER NOT NULL,
    `client_id` INTEGER NOT NULL,
    `type_project_id` INTEGER NOT NULL,

    UNIQUE INDEX `Projects_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Type_projects` ADD CONSTRAINT `Type_projects_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Projects` ADD CONSTRAINT `Projects_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Projects` ADD CONSTRAINT `Projects_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `Clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Projects` ADD CONSTRAINT `Projects_type_project_id_fkey` FOREIGN KEY (`type_project_id`) REFERENCES `Type_projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
