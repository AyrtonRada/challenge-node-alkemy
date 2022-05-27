-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: disney
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auths`
--

DROP TABLE IF EXISTS `auths`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auths` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombreUsuario` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombreUsuario_UNIQUE` (`nombreUsuario`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auths`
--

LOCK TABLES `auths` WRITE;
/*!40000 ALTER TABLE `auths` DISABLE KEYS */;
INSERT INTO `auths` VALUES (1,'grandius','grandius@gmail.com','$2a$10$eB1ybMlWXYsYA85rEh4obOOmJACltyq7AMVPVgIGlf7ywZw8qaXci','2022-05-27 06:12:15','2022-05-27 06:12:15');
/*!40000 ALTER TABLE `auths` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `generos`
--

DROP TABLE IF EXISTS `generos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `generos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `pelicula_serie_asociada` int NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`),
  KEY `pelicula_serie_asociada` (`pelicula_serie_asociada`),
  CONSTRAINT `generos_ibfk_1` FOREIGN KEY (`pelicula_serie_asociada`) REFERENCES `pelicula_series` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `generos`
--

LOCK TABLES `generos` WRITE;
/*!40000 ALTER TABLE `generos` DISABLE KEYS */;
INSERT INTO `generos` VALUES (1,'terror',NULL,1,NULL,NULL),(2,'gg',NULL,1,NULL,NULL);
/*!40000 ALTER TABLE `generos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pelicula_series`
--

DROP TABLE IF EXISTS `pelicula_series`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pelicula_series` (
  `id` int NOT NULL AUTO_INCREMENT,
  `imagen` varchar(255) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `fechaDeCreacion` date NOT NULL,
  `calificacion` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `imagen` (`imagen`),
  UNIQUE KEY `titulo` (`titulo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pelicula_series`
--

LOCK TABLES `pelicula_series` WRITE;
/*!40000 ALTER TABLE `pelicula_series` DISABLE KEYS */;
INSERT INTO `pelicula_series` VALUES (1,'1653535428601_img_.jpg','Bang Dream','2021-04-19',5,'2022-05-26 03:23:48','2022-05-26 03:23:48'),(2,'1653535474983_img_.jpg','Pradera','2021-03-14',4,'2022-05-26 03:24:34','2022-05-26 03:24:34'),(3,'1653535547255_img_.jpg','Escritorio','2020-02-25',5,'2022-05-26 03:25:47','2022-05-26 03:25:47');
/*!40000 ALTER TABLE `pelicula_series` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personaje_details`
--

DROP TABLE IF EXISTS `personaje_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personaje_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `personajeAsociada` int NOT NULL,
  `pelicula_serie_asociada` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `personaje_details_ibfk_2_idx` (`personajeAsociada`),
  KEY `personaje_details_ibfk_1` (`pelicula_serie_asociada`),
  CONSTRAINT `personaje_details_ibfk_1` FOREIGN KEY (`pelicula_serie_asociada`) REFERENCES `pelicula_series` (`id`),
  CONSTRAINT `personaje_details_ibfk_2` FOREIGN KEY (`personajeAsociada`) REFERENCES `personajes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personaje_details`
--

LOCK TABLES `personaje_details` WRITE;
/*!40000 ALTER TABLE `personaje_details` DISABLE KEYS */;
INSERT INTO `personaje_details` VALUES (3,2,2,'2022-05-26 04:55:29','2022-05-26 05:12:55'),(4,3,1,'2022-05-26 21:45:38','2022-05-26 21:45:38'),(5,3,2,'2022-05-26 21:45:47','2022-05-26 21:45:47'),(6,1,3,'2022-05-26 21:45:55','2022-05-26 21:45:55');
/*!40000 ALTER TABLE `personaje_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personajes`
--

DROP TABLE IF EXISTS `personajes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personajes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `imagen` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `edad` int NOT NULL,
  `peso` int DEFAULT NULL,
  `historia` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `imagen` (`imagen`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personajes`
--

LOCK TABLES `personajes` WRITE;
/*!40000 ALTER TABLE `personajes` DISABLE KEYS */;
INSERT INTO `personajes` VALUES (1,'1653534673014_img_.png','Aya Maruyama',15,30,'Aya es la voz principal de la banda Pastel & Pallets','2022-05-26 03:11:13','2022-05-26 03:11:13'),(2,'1653534760259_img_.jpg','Nanami Hiromachi',16,33,'Nanami es la bajista principal de la banda Morfonica','2022-05-26 03:12:40','2022-05-26 03:12:40'),(3,'1653534841287_img_.jpg','Yukina Minato',16,32,'Yukina es la voz principal de la banda Roselia','2022-05-26 03:14:01','2022-05-26 03:14:01');
/*!40000 ALTER TABLE `personajes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20220520055810-create-genero.js'),('20220520060750-create-personaje.js'),('20220520060852-create-personaje-detail.js'),('20220521194334-create-auth.js'),('20220521194334-create-user.js'),('20220524133020-create-pelicula-serie.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-27  3:32:50
