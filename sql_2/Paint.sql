-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 23, 2025 at 09:37 PM
-- Server version: 8.0.35
-- PHP Version: 8.2.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Paint`
--

-- --------------------------------------------------------

--
-- Table structure for table `Archives`
--

CREATE TABLE `Archives` (
  `ArchivistID` int NOT NULL,
  `Ranking` varchar(50) DEFAULT NULL,
  `Levels` int DEFAULT NULL,
  `Names` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Drawings`
--

CREATE TABLE `Drawings` (
  `ArtistID` int NOT NULL,
  `Names` varchar(50) DEFAULT NULL,
  `Age` int DEFAULT NULL,
  `Pricing` varchar(50) DEFAULT NULL,
  `fox_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Drawings`
--

INSERT INTO `Drawings` (`ArtistID`, `Names`, `Age`, `Pricing`, `fox_id`) VALUES
(1, 'Will', 24, '340', 100),
(2, 'Salem', 18, '400', 200);

-- --------------------------------------------------------

--
-- Table structure for table `Foxes`
--

CREATE TABLE `Foxes` (
  `CoatID` int NOT NULL,
  `FurColor` varchar(50) DEFAULT NULL,
  `Age` int DEFAULT NULL,
  `trackers` varchar(50) DEFAULT NULL,
  `fox_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Foxes`
--

INSERT INTO `Foxes` (`CoatID`, `FurColor`, `Age`, `trackers`, `fox_id`) VALUES
(1, 'Silver', 2, '3301', 100),
(2, 'Brown', 3, '3302', 200),
(3, 'Arctic', 4, '3303', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Students`
--

CREATE TABLE `Students` (
  `StudentID` int NOT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `Age` int DEFAULT NULL,
  `Major` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Students`
--

INSERT INTO `Students` (`StudentID`, `Name`, `Age`, `Major`) VALUES
(1, 'Alice', 20, 'Computer Science'),
(2, 'Oli', 18, 'Computer Science'),
(3, 'Salem', 17, 'Author');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Archives`
--
ALTER TABLE `Archives`
  ADD PRIMARY KEY (`ArchivistID`);

--
-- Indexes for table `Drawings`
--
ALTER TABLE `Drawings`
  ADD PRIMARY KEY (`ArtistID`),
  ADD KEY `fk_fox` (`fox_id`);

--
-- Indexes for table `Foxes`
--
ALTER TABLE `Foxes`
  ADD PRIMARY KEY (`CoatID`),
  ADD UNIQUE KEY `fox_id` (`fox_id`);

--
-- Indexes for table `Students`
--
ALTER TABLE `Students`
  ADD PRIMARY KEY (`StudentID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Drawings`
--
ALTER TABLE `Drawings`
  ADD CONSTRAINT `fk_fox` FOREIGN KEY (`fox_id`) REFERENCES `Foxes` (`fox_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
