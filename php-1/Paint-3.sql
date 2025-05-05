-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 30, 2025 at 10:16 PM
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
(1, 'Will Salem', 24, '340', 100);

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
-- Table structure for table `Paintings`
--

CREATE TABLE `Paintings` (
  `id` int NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` text,
  `price` decimal(10,2) DEFAULT NULL,
  `discount` int DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `likes` int DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Paintings`
--

INSERT INTO `Paintings` (`id`, `title`, `description`, `price`, `discount`, `image`, `likes`) VALUES
(1, 'dfsdf', 'sdfsdf', 13.00, 34, 'Screenshot 2025-02-24 at 4.01.44 PM.png', 11),
(2, 'Skibbidi razz blob blob', 'The sizzle is sizzling in blobbing bib', 349000.00, 1, 'extra-handsome-beautiful-squidward-v0-wra7ia5vpjmd1.jpeg.webp', 14),
(3, 'sorry street', 'An empty road in the archives', 50.00, 15, 'Sorry-Street.jpg', 13);

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

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`) VALUES
(3, 'dfsff', 'fsdfsdf@gmail.com');

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
-- Indexes for table `Paintings`
--
ALTER TABLE `Paintings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Students`
--
ALTER TABLE `Students`
  ADD PRIMARY KEY (`StudentID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Archives`
--
ALTER TABLE `Archives`
  MODIFY `ArchivistID` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Drawings`
--
ALTER TABLE `Drawings`
  MODIFY `ArtistID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Foxes`
--
ALTER TABLE `Foxes`
  MODIFY `CoatID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `Paintings`
--
ALTER TABLE `Paintings`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `Students`
--
ALTER TABLE `Students`
  MODIFY `StudentID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
