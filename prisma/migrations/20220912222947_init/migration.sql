-- CreateTable
CREATE TABLE `Song` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `author` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `genre` VARCHAR(255) NOT NULL,
    `year` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
