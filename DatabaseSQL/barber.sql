CREATE DATABASE  IF NOT EXISTS `tester5` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tester5`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: tester5
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `afspraak`
--

DROP TABLE IF EXISTS `afspraak`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `afspraak` (
  `afspraak_id` int NOT NULL AUTO_INCREMENT,
  `persoon_id` int NOT NULL,
  `behandeling_id` int NOT NULL,
  `datum` date NOT NULL,
  `tijdsloten` time(4) NOT NULL,
  `vestiging_id` int NOT NULL,
  `betaling` bit(1) NOT NULL,
  `rekening` int NOT NULL,
  `kapper_id` int NOT NULL,
  PRIMARY KEY (`afspraak_id`),
  KEY `persoon_id_idx` (`persoon_id`),
  KEY `behandeling_id_idx` (`behandeling_id`),
  KEY `vestiging_id_idx` (`vestiging_id`),
  KEY `kapper_id_idx` (`kapper_id`),
  CONSTRAINT `behandeling_id` FOREIGN KEY (`behandeling_id`) REFERENCES `behandeling` (`behandeling_id`),
  CONSTRAINT `kapper_id` FOREIGN KEY (`kapper_id`) REFERENCES `kapper` (`kapper_id`),
  CONSTRAINT `persoon_id` FOREIGN KEY (`persoon_id`) REFERENCES `persoon` (`persoon_id`),
  CONSTRAINT `vestiging_id` FOREIGN KEY (`vestiging_id`) REFERENCES `vestiging` (`vestiging_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `afspraak`
--

LOCK TABLES `afspraak` WRITE;
/*!40000 ALTER TABLE `afspraak` DISABLE KEYS */;
/*!40000 ALTER TABLE `afspraak` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `behandeling`
--

DROP TABLE IF EXISTS `behandeling`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `behandeling` (
  `behandeling_id` int NOT NULL AUTO_INCREMENT,
  `type_behandeling` varchar(50) NOT NULL,
  `behandelduur_in_aantal_tijdsloten` int NOT NULL,
  `prijs` float NOT NULL,
  PRIMARY KEY (`behandeling_id`),
  UNIQUE KEY `type_behandeling_UNIQUE` (`type_behandeling`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `behandeling`
--

LOCK TABLES `behandeling` WRITE;
/*!40000 ALTER TABLE `behandeling` DISABLE KEYS */;
/*!40000 ALTER TABLE `behandeling` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact` (
  `contact_id` int NOT NULL AUTO_INCREMENT,
  `straatnaam` varchar(70) NOT NULL,
  `huisnummer` int NOT NULL,
  `huisnummer_toevoeging` varchar(1) DEFAULT NULL,
  `woonplaats` varchar(70) NOT NULL,
  `postcode_cijfers` int NOT NULL,
  `postcode_letters` char(2) NOT NULL,
  `emailadres` varchar(100) NOT NULL,
  `telefoonnummer` int NOT NULL,
  PRIMARY KEY (`contact_id`),
  UNIQUE KEY `emailadres` (`emailadres`),
  UNIQUE KEY `telefoonnummer` (`telefoonnummer`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kapper`
--

DROP TABLE IF EXISTS `kapper`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kapper` (
  `kapper_id` int NOT NULL,
  `rooster_id` int NOT NULL,
  `skills_id` int NOT NULL,
  `persoon_id` int NOT NULL,
  UNIQUE KEY `kapper_id_UNIQUE` (`kapper_id`),
  UNIQUE KEY `rooster_id_UNIQUE` (`rooster_id`),
  UNIQUE KEY `skills_id_UNIQUE` (`skills_id`),
  UNIQUE KEY `persoon_id_UNIQUE` (`persoon_id`),
  CONSTRAINT `persoon_id3` FOREIGN KEY (`persoon_id`) REFERENCES `persoon` (`persoon_id`),
  CONSTRAINT `rooster_id3` FOREIGN KEY (`rooster_id`) REFERENCES `rooster` (`rooster_id`),
  CONSTRAINT `skills_id2` FOREIGN KEY (`skills_id`) REFERENCES `skills` (`skills_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kapper`
--

LOCK TABLES `kapper` WRITE;
/*!40000 ALTER TABLE `kapper` DISABLE KEYS */;
/*!40000 ALTER TABLE `kapper` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persoon`
--

DROP TABLE IF EXISTS `persoon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `persoon` (
  `persoon_id` int NOT NULL AUTO_INCREMENT,
  `voornaam` varchar(20) NOT NULL,
  `achternaam` varchar(30) NOT NULL,
  `geboortedatum` date NOT NULL,
  `type` varchar(6) NOT NULL,
  `contact_id` int NOT NULL,
  PRIMARY KEY (`persoon_id`),
  UNIQUE KEY `contact_id_UNIQUE` (`contact_id`),
  KEY `contact_id_idx` (`contact_id`),
  CONSTRAINT `contact_id` FOREIGN KEY (`contact_id`) REFERENCES `contact` (`contact_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persoon`
--

LOCK TABLES `persoon` WRITE;
/*!40000 ALTER TABLE `persoon` DISABLE KEYS */;
/*!40000 ALTER TABLE `persoon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rooster`
--

DROP TABLE IF EXISTS `rooster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rooster` (
  `rooster_id` int NOT NULL AUTO_INCREMENT,
  `persoon_id` int NOT NULL,
  `afspraak_id` int NOT NULL,
  `vestiging_id` int NOT NULL,
  PRIMARY KEY (`rooster_id`),
  UNIQUE KEY `persoon_id_UNIQUE` (`persoon_id`),
  UNIQUE KEY `afspraak_id_UNIQUE` (`afspraak_id`),
  KEY `persoon_id_idx` (`persoon_id`),
  KEY `afspraak_id_idx` (`afspraak_id`),
  KEY `vestiging_id_idx` (`vestiging_id`),
  CONSTRAINT `afspraak_id2` FOREIGN KEY (`afspraak_id`) REFERENCES `afspraak` (`afspraak_id`),
  CONSTRAINT `persoon_id2` FOREIGN KEY (`persoon_id`) REFERENCES `persoon` (`persoon_id`),
  CONSTRAINT `vestiging_id2` FOREIGN KEY (`vestiging_id`) REFERENCES `vestiging` (`vestiging_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rooster`
--

LOCK TABLES `rooster` WRITE;
/*!40000 ALTER TABLE `rooster` DISABLE KEYS */;
/*!40000 ALTER TABLE `rooster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skills`
--

DROP TABLE IF EXISTS `skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skills` (
  `skills_id` int NOT NULL AUTO_INCREMENT,
  `behandeling_id` int NOT NULL,
  PRIMARY KEY (`skills_id`),
  UNIQUE KEY `behandeling_id` (`behandeling_id`),
  CONSTRAINT `behandeling_id2` FOREIGN KEY (`behandeling_id`) REFERENCES `behandeling` (`behandeling_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skills`
--

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vestiging`
--

DROP TABLE IF EXISTS `vestiging`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vestiging` (
  `vestiging_id` int NOT NULL AUTO_INCREMENT,
  `contact_id` int NOT NULL,
  PRIMARY KEY (`vestiging_id`),
  UNIQUE KEY `contact_id_UNIQUE` (`contact_id`),
  KEY `contact_id2_idx` (`contact_id`),
  CONSTRAINT `contact_id2` FOREIGN KEY (`contact_id`) REFERENCES `contact` (`contact_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vestiging`
--

LOCK TABLES `vestiging` WRITE;
/*!40000 ALTER TABLE `vestiging` DISABLE KEYS */;
/*!40000 ALTER TABLE `vestiging` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-01 10:58:37
