-- CreateTable
CREATE TABLE `Utilisateur` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `phone` INTEGER NOT NULL,
    `motDePasse` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Utilisateur_nom_key`(`nom`),
    UNIQUE INDEX `Utilisateur_phone_key`(`phone`),
    UNIQUE INDEX `Utilisateur_motDePasse_key`(`motDePasse`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bande` (
    `id` VARCHAR(191) NOT NULL,
    `batimentId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `effectif` INTEGER NOT NULL,
    `unite` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Bande_type_key`(`type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EntrerBande` (
    `id` VARCHAR(191) NOT NULL,
    `batimentId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `effectif` INTEGER NOT NULL,
    `unite` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Batiment` (
    `id` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `designation` VARCHAR(191) NOT NULL,
    `capacite` INTEGER NOT NULL,
    `unite` VARCHAR(191) NULL,
    `longueur` VARCHAR(191) NOT NULL,
    `largeur` VARCHAR(191) NOT NULL,
    `hauteur` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Batiment_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Client` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `ville` VARCHAR(191) NOT NULL,
    `phone` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Client_nom_key`(`nom`),
    UNIQUE INDEX `Client_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Depense` (
    `id` VARCHAR(191) NOT NULL,
    `referent` VARCHAR(191) NOT NULL,
    `categorie` VARCHAR(191) NOT NULL,
    `quantite` INTEGER NOT NULL,
    `unite` VARCHAR(191) NULL,
    `prixUnitaire` INTEGER NOT NULL,
    `unite1` VARCHAR(191) NULL,
    `montant` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Eau` (
    `id` VARCHAR(191) NOT NULL,
    `ouvrierId` VARCHAR(191) NOT NULL,
    `quantite` INTEGER NOT NULL,
    `unite` VARCHAR(191) NULL,
    `note` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EntrerNutrition` (
    `id` VARCHAR(191) NOT NULL,
    `batimentId` VARCHAR(191) NOT NULL,
    `aliment` VARCHAR(191) NOT NULL,
    `apportNutritif` VARCHAR(191) NOT NULL,
    `quantite` INTEGER NOT NULL,
    `unite` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EntrerMateriel` (
    `id` VARCHAR(191) NOT NULL,
    `batimentId` VARCHAR(191) NOT NULL,
    `designation` VARCHAR(191) NOT NULL,
    `quantite` INTEGER NOT NULL,
    `unite` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Fournisseur` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `ville` VARCHAR(191) NOT NULL,
    `phone` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Fournisseur_nom_key`(`nom`),
    UNIQUE INDEX `Fournisseur_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Materiel` (
    `id` VARCHAR(191) NOT NULL,
    `batimentId` VARCHAR(191) NOT NULL,
    `designation` VARCHAR(191) NOT NULL,
    `quantite` INTEGER NOT NULL,
    `unite` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Materiel_designation_key`(`designation`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TypePerteB` (
    `id` VARCHAR(191) NOT NULL,
    `ref` VARCHAR(191) NOT NULL,
    `typeP` VARCHAR(191) NOT NULL,
    `effectif` INTEGER NOT NULL,
    `unite` VARCHAR(191) NULL,
    `description` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TypePerteP` (
    `id` VARCHAR(191) NOT NULL,
    `ref` VARCHAR(191) NOT NULL,
    `typeP` VARCHAR(191) NOT NULL,
    `effectif` INTEGER NOT NULL,
    `unite` VARCHAR(191) NULL,
    `description` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TypePerteT` (
    `id` VARCHAR(191) NOT NULL,
    `ref` VARCHAR(191) NOT NULL,
    `typeP` VARCHAR(191) NOT NULL,
    `effectif` INTEGER NOT NULL,
    `unite` VARCHAR(191) NULL,
    `description` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TypePerteN` (
    `id` VARCHAR(191) NOT NULL,
    `ref` VARCHAR(191) NOT NULL,
    `typeP` VARCHAR(191) NOT NULL,
    `effectif` INTEGER NOT NULL,
    `unite` VARCHAR(191) NULL,
    `description` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TypePerteM` (
    `id` VARCHAR(191) NOT NULL,
    `ref` VARCHAR(191) NOT NULL,
    `typeP` VARCHAR(191) NOT NULL,
    `effectif` INTEGER NOT NULL,
    `unite` VARCHAR(191) NULL,
    `description` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Nutrition` (
    `id` VARCHAR(191) NOT NULL,
    `batimentId` VARCHAR(191) NOT NULL,
    `aliment` VARCHAR(191) NOT NULL,
    `apportNutritif` VARCHAR(191) NOT NULL,
    `quantite` INTEGER NOT NULL,
    `unite` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Nutrition_aliment_key`(`aliment`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ouvrier` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `fonction` VARCHAR(191) NOT NULL,
    `ville` VARCHAR(191) NOT NULL,
    `phone` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Ouvrier_nom_key`(`nom`),
    UNIQUE INDEX `Ouvrier_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ponte` (
    `id` VARCHAR(191) NOT NULL,
    `batimentId` VARCHAR(191) NOT NULL,
    `oeuf` VARCHAR(191) NOT NULL,
    `quantite` INTEGER NOT NULL,
    `unite` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Ponte_oeuf_key`(`oeuf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ObservationFecondite` (
    `id` VARCHAR(191) NOT NULL,
    `batimentId` VARCHAR(191) NOT NULL,
    `remarque` VARCHAR(191) NOT NULL,
    `quantite` INTEGER NOT NULL,
    `unite` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RamassageOeuf` (
    `id` VARCHAR(191) NOT NULL,
    `ouvrierId` VARCHAR(191) NOT NULL,
    `bandeId` VARCHAR(191) NOT NULL,
    `batimentId` VARCHAR(191) NOT NULL,
    `gros` INTEGER NOT NULL,
    `moyen` INTEGER NOT NULL,
    `unite` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SortieNutrition` (
    `id` VARCHAR(191) NOT NULL,
    `ouvrierId` VARCHAR(191) NOT NULL,
    `batimentId` VARCHAR(191) NOT NULL,
    `aliment` VARCHAR(191) NOT NULL,
    `quantite` INTEGER NOT NULL,
    `unite` VARCHAR(191) NULL,
    `note` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SortieMateriel` (
    `id` VARCHAR(191) NOT NULL,
    `ouvrierId` VARCHAR(191) NOT NULL,
    `batimentId` VARCHAR(191) NOT NULL,
    `designation` VARCHAR(191) NOT NULL,
    `quantite` INTEGER NOT NULL,
    `unite` VARCHAR(191) NULL,
    `note` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vaccination` (
    `id` VARCHAR(191) NOT NULL,
    `bandeId` VARCHAR(191) NOT NULL,
    `vaccin` VARCHAR(191) NOT NULL,
    `periode` VARCHAR(191) NOT NULL,
    `periode1` VARCHAR(191) NOT NULL,
    `indication` VARCHAR(191) NOT NULL,
    `posologie` VARCHAR(191) NOT NULL,
    `statut` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VenteBande` (
    `id` VARCHAR(191) NOT NULL,
    `clientId` VARCHAR(191) NOT NULL,
    `bandeId` VARCHAR(191) NOT NULL,
    `quantite` INTEGER NOT NULL,
    `unite` VARCHAR(191) NULL,
    `prixUnitaire` INTEGER NOT NULL,
    `unite1` VARCHAR(191) NULL,
    `montant` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VentePonte` (
    `id` VARCHAR(191) NOT NULL,
    `clientId` VARCHAR(191) NOT NULL,
    `categorie` VARCHAR(191) NOT NULL,
    `quantite` INTEGER NOT NULL,
    `unite` VARCHAR(191) NULL,
    `prixUnitaire` INTEGER NOT NULL,
    `unite1` VARCHAR(191) NULL,
    `montant` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VeterinaireObservation` (
    `id` VARCHAR(191) NOT NULL,
    `bandeId` VARCHAR(191) NOT NULL,
    `batimentId` VARCHAR(191) NOT NULL,
    `observation1` VARCHAR(191) NOT NULL,
    `observation2` VARCHAR(191) NOT NULL,
    `observation3` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Veterinaire` (
    `id` VARCHAR(191) NOT NULL,
    `bandeId` VARCHAR(191) NOT NULL,
    `veterinaire` VARCHAR(191) NOT NULL,
    `traitement` VARCHAR(191) NOT NULL,
    `posologie` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Veterinaire_veterinaire_key`(`veterinaire`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UniteCapacite` (
    `id` VARCHAR(191) NOT NULL,
    `forme` VARCHAR(191) NULL,
    `unite` VARCHAR(191) NULL,
    `monait` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Bande` ADD CONSTRAINT `Bande_batimentId_fkey` FOREIGN KEY (`batimentId`) REFERENCES `Batiment`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EntrerBande` ADD CONSTRAINT `EntrerBande_batimentId_fkey` FOREIGN KEY (`batimentId`) REFERENCES `Batiment`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eau` ADD CONSTRAINT `Eau_ouvrierId_fkey` FOREIGN KEY (`ouvrierId`) REFERENCES `Ouvrier`(`nom`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EntrerNutrition` ADD CONSTRAINT `EntrerNutrition_batimentId_fkey` FOREIGN KEY (`batimentId`) REFERENCES `Batiment`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EntrerMateriel` ADD CONSTRAINT `EntrerMateriel_batimentId_fkey` FOREIGN KEY (`batimentId`) REFERENCES `Batiment`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Materiel` ADD CONSTRAINT `Materiel_batimentId_fkey` FOREIGN KEY (`batimentId`) REFERENCES `Batiment`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TypePerteB` ADD CONSTRAINT `TypePerteB_typeP_fkey` FOREIGN KEY (`typeP`) REFERENCES `Bande`(`type`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TypePerteP` ADD CONSTRAINT `TypePerteP_typeP_fkey` FOREIGN KEY (`typeP`) REFERENCES `Ponte`(`oeuf`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TypePerteT` ADD CONSTRAINT `TypePerteT_typeP_fkey` FOREIGN KEY (`typeP`) REFERENCES `Batiment`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TypePerteN` ADD CONSTRAINT `TypePerteN_typeP_fkey` FOREIGN KEY (`typeP`) REFERENCES `Nutrition`(`aliment`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TypePerteM` ADD CONSTRAINT `TypePerteM_typeP_fkey` FOREIGN KEY (`typeP`) REFERENCES `Materiel`(`designation`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Nutrition` ADD CONSTRAINT `Nutrition_batimentId_fkey` FOREIGN KEY (`batimentId`) REFERENCES `Batiment`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ponte` ADD CONSTRAINT `Ponte_batimentId_fkey` FOREIGN KEY (`batimentId`) REFERENCES `Batiment`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ObservationFecondite` ADD CONSTRAINT `ObservationFecondite_batimentId_fkey` FOREIGN KEY (`batimentId`) REFERENCES `Batiment`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RamassageOeuf` ADD CONSTRAINT `RamassageOeuf_ouvrierId_fkey` FOREIGN KEY (`ouvrierId`) REFERENCES `Ouvrier`(`nom`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RamassageOeuf` ADD CONSTRAINT `RamassageOeuf_bandeId_fkey` FOREIGN KEY (`bandeId`) REFERENCES `Bande`(`type`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RamassageOeuf` ADD CONSTRAINT `RamassageOeuf_batimentId_fkey` FOREIGN KEY (`batimentId`) REFERENCES `Batiment`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SortieNutrition` ADD CONSTRAINT `SortieNutrition_ouvrierId_fkey` FOREIGN KEY (`ouvrierId`) REFERENCES `Ouvrier`(`nom`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SortieNutrition` ADD CONSTRAINT `SortieNutrition_batimentId_fkey` FOREIGN KEY (`batimentId`) REFERENCES `Batiment`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SortieMateriel` ADD CONSTRAINT `SortieMateriel_ouvrierId_fkey` FOREIGN KEY (`ouvrierId`) REFERENCES `Ouvrier`(`nom`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SortieMateriel` ADD CONSTRAINT `SortieMateriel_batimentId_fkey` FOREIGN KEY (`batimentId`) REFERENCES `Batiment`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vaccination` ADD CONSTRAINT `Vaccination_bandeId_fkey` FOREIGN KEY (`bandeId`) REFERENCES `Bande`(`type`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VenteBande` ADD CONSTRAINT `VenteBande_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Client`(`nom`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VenteBande` ADD CONSTRAINT `VenteBande_bandeId_fkey` FOREIGN KEY (`bandeId`) REFERENCES `Bande`(`type`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VentePonte` ADD CONSTRAINT `VentePonte_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Client`(`nom`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VeterinaireObservation` ADD CONSTRAINT `VeterinaireObservation_bandeId_fkey` FOREIGN KEY (`bandeId`) REFERENCES `Bande`(`type`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VeterinaireObservation` ADD CONSTRAINT `VeterinaireObservation_batimentId_fkey` FOREIGN KEY (`batimentId`) REFERENCES `Batiment`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Veterinaire` ADD CONSTRAINT `Veterinaire_bandeId_fkey` FOREIGN KEY (`bandeId`) REFERENCES `Bande`(`type`) ON DELETE RESTRICT ON UPDATE CASCADE;
