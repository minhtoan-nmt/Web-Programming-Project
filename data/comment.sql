-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 02, 2025 at 08:45 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ltw`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` varchar(7) NOT NULL,
  `user_id` varchar(7) NOT NULL,
  `content` text NOT NULL,
  `date_posted` datetime NOT NULL,
  `like_count` int(11) NOT NULL DEFAULT 0,
  `post_id` varchar(7) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id`, `user_id`, `content`, `date_posted`, `like_count`, `post_id`) VALUES
('', 'CUS0001', 'Quá hay! Cảm ơn bạn đã chia sẻ', '0000-00-00 00:00:00', 0, 'POS0001'),
('', 'CUS0001', 'Quá hay! Cảm ơn bạn đã chia sẻ', '0000-00-00 00:00:00', 0, 'POS0001'),
('', 'CUS0001', 'Quá hay! Cảm ơn bạn đã chia sẻ', '0000-00-00 00:00:00', 0, 'POS0001'),
('', 'CUS0001', 'Quá hay! Cảm ơn bạn đã chia sẻ', '2025-04-29 12:35:00', 0, 'POS0001'),
('COM0001', 'CUS0002', 'Quá hay! Cảm ơn bạn đã chia sẻ', '2025-04-29 12:35:00', 0, NULL),
('COM0002', 'CUS0002', 'Quá hay! Cảm ơn bạn đã chia sẻ', '2025-04-29 12:35:00', 0, 'POS0002');

--
-- Triggers `comment`
--
DELIMITER $$
CREATE TRIGGER `TriggerGenerateNewId` BEFORE INSERT ON `comment` FOR EACH ROW BEGIN
    DECLARE next_id INT DEFAULT 0;
    DECLARE formatted_id VARCHAR(7);

    -- 1. Find the highest existing numeric part of COM IDs
    SELECT
        IFNULL(MAX(CAST(SUBSTRING(id, 4) AS UNSIGNED)), 0) INTO next_id
    FROM
        comment
    WHERE
        id LIKE 'COM%';

    -- 2. Increment the numeric part
    SET next_id = next_id + 1;

    -- 3. Format the ID
    SET formatted_id = CONCAT('COM', LPAD(next_id, 4, '0'));

    -- 4. Assign the new ID to the 'id' column of the new row
    SET NEW.id = formatted_id;
END
$$
DELIMITER ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
