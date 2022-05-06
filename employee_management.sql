-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 04, 2022 at 10:43 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employee_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `advances`
--

CREATE TABLE `advances` (
  `advances_id` int(11) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `money` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `advances`
--

INSERT INTO `advances` (`advances_id`, `date`, `money`, `employee_id`) VALUES
(1, '2022-04-28', 25, 1),
(2, '2022-05-04', 50, 1);

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `Id` int(11) NOT NULL,
  `full_name` text COLLATE utf8_unicode_ci NOT NULL,
  `age` int(11) NOT NULL,
  `gender` text COLLATE utf8_unicode_ci NOT NULL,
  `address` text COLLATE utf8_unicode_ci NOT NULL,
  `phone_number` text COLLATE utf8_unicode_ci NOT NULL,
  `start_day` date NOT NULL DEFAULT current_timestamp(),
  `money_per_hour` int(11) NOT NULL,
  `total_hours` int(11) NOT NULL,
  `image_URL` text COLLATE utf8_unicode_ci NOT NULL,
  `team` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`Id`, `full_name`, `age`, `gender`, `address`, `phone_number`, `start_day`, `money_per_hour`, `total_hours`, `image_URL`, `team`) VALUES
(1, 'Uchiha Madara', 23, 'Male', 'Akatsuki', '88888888888888888888888', '2022-05-04', 88888, 7777777, 'https://newsmd1fr.keeng.net/tiin/archive/images/20210215/191503_batch_148189203_1082353422243802_7176013939645211715_o.jpg', 'Manager'),
(2, 'Pain', 23, 'Male', 'Govap1', '5222222', '2022-04-05', 20000, 8, 'https://i.pinimg.com/originals/61/c5/f2/61c5f2aa1220ab5055cfeb460457e576.jpg', 'Manager'),
(3, 'Kochō Shinobu', 22, 'Female', 'Govap5', '5453453', '2022-04-19', 20000, 8, 'https://w0.peakpx.com/wallpaper/143/184/HD-wallpaper-shinobu-kocho-anime-cute-fondos-anime-kimetsu-no-yaiba-manga-shinobu.jpg', 'Developer'),
(4, 'Uchiha Itachiiiiiiiiiiiii', 22, 'Male', 'Konoha village', '069906699', '2022-04-28', 20000, 8, 'https://i.pinimg.com/originals/25/55/9f/25559f4667c608e97a290e17f6073be0.jpg', 'Shinobi'),
(5, 'Gol D Ace', 22, 'Male', 'Govap76876', '534656756', '2022-04-20', 20000, 8, 'https://image.lag.vn/upload/news/21/05/27/danh-sach-nhan-vat-chet-vi-bi-dam-3_XVLA.jpg', 'Developer'),
(7, 'Zeref Dragneel', 22, 'Male', 'Govap567867', '5547567867', '2022-04-30', 20000, 8, 'https://hoso.wiki/wp-content/uploads/2020/05/zeref-dragneel-1.jpg', 'Manager'),
(8, 'Uzumaki Karin', 22, 'Female', 'Govap6768678', '567868678967', '2022-04-16', 20000, 8, 'https://img.websosanh.vn/v10/users/review/images/mccotq25y9op4/1551160411831_5965528.jpg?compress=85', 'Developer'),
(9, 'Kamado Nezuko', 22, 'Female', 'Govap56867867', '556867869', '2022-04-03', 20000, 8, 'https://thuvienanime.com/wp-content/uploads/2021/10/Nezuko.jpg', 'Manager'),
(10, 'Senju Tobirama', 22, 'Male', 'Govap5465756', '556756756', '2022-04-13', 20000, 8, 'https://tekutiger.files.wordpress.com/2020/12/tobirama-crystal-screenshot-remake-1920x1080-1.png', 'IT Support'),
(11, 'Lê Văn An', 30, 'Male', 'Gò Vấp,Hồ Chí Minh', '0898655662', '2022-04-28', 3000000, 43, 'https://dep365.com/wp-content/uploads/2019/11/img_5dbfb08270832.jpg', 'Manager');

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `id` int(11) NOT NULL,
  `name` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `working`
--

CREATE TABLE `working` (
  `working_id` int(11) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `hour` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `working`
--

INSERT INTO `working` (`working_id`, `date`, `hour`, `employee_id`) VALUES
(1, '2022-04-28', 8, 1),
(2, '2022-05-04', 8, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `advances`
--
ALTER TABLE `advances`
  ADD PRIMARY KEY (`advances_id`),
  ADD KEY `employee_id` (`employee_id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `working`
--
ALTER TABLE `working`
  ADD PRIMARY KEY (`working_id`),
  ADD KEY `employee_id` (`employee_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `advances`
--
ALTER TABLE `advances`
  MODIFY `advances_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=201;

--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `working`
--
ALTER TABLE `working`
  MODIFY `working_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `advances`
--
ALTER TABLE `advances`
  ADD CONSTRAINT `advances_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`Id`);

--
-- Constraints for table `working`
--
ALTER TABLE `working`
  ADD CONSTRAINT `working_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
