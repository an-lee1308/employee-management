-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 09, 2022 at 12:54 PM
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
-- Database: `employ`
--

-- --------------------------------------------------------

--
-- Table structure for table `advances`
--

CREATE TABLE `advances` (
  `advances_id` int(11) NOT NULL,
  `date` datetime DEFAULT current_timestamp(),
  `money` int(11) DEFAULT NULL,
  `employee_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `advances`
--

INSERT INTO `advances` (`advances_id`, `date`, `money`, `employee_id`) VALUES
(1, '2022-05-09 15:43:13', 25, 1),
(2, '2022-05-09 15:43:13', 30, 2),
(3, '2022-05-09 15:43:36', 25, 1),
(4, '2022-05-09 15:43:36', 30, 1),
(5, '2022-05-09 15:43:54', 25, 1),
(6, '2022-05-09 15:43:54', 30, 2),
(7, '2022-05-09 15:44:13', 25, 3),
(8, '2022-05-09 15:44:13', 30, 3),
(9, '2022-05-09 15:44:27', 25, 4),
(10, '2022-05-09 15:44:27', 30, 4),
(11, '2022-05-09 15:44:38', 25, 5),
(12, '2022-05-09 15:44:38', 30, 5);

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `employee_id` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `full_name` varchar(255) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `money_per_hour` int(11) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `start_day` datetime DEFAULT current_timestamp(),
  `total_hours` int(11) DEFAULT NULL,
  `team_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`employee_id`, `address`, `age`, `full_name`, `gender`, `image_url`, `money_per_hour`, `phone_number`, `start_day`, `total_hours`, `team_id`) VALUES
(1, 'Akatsuki', 23, 'Uchiha Madara', 'Male', 'https://newsmd1fr.keeng.net/tiin/archive/images/20210215/191503_batch_148189203_1082353422243802_7176013939645211715_o.jpg', 88888, '88888888888888888888888', '2022-05-04 00:00:00', 7777777, 1),
(2, 'Govap1', 23, 'Pain', 'Male', 'https://i.pinimg.com/originals/61/c5/f2/61c5f2aa1220ab5055cfeb460457e576.jpg', 20000, '5222222', '2022-04-05 00:00:00', 8, 1),
(3, 'Govap5', 22, 'Kochō Shinobu', 'Female', 'https://w0.peakpx.com/wallpaper/143/184/HD-wallpaper-shinobu-kocho-anime-cute-fondos-anime-kimetsu-no-yaiba-manga-shinobu.jpg', 20000, '5453453', '2022-04-19 00:00:00', 8, 4),
(4, 'Konoha village', 22, 'Uchiha Itachiiiiiiiiiiiii', 'Male', 'https://i.pinimg.com/originals/25/55/9f/25559f4667c608e97a290e17f6073be0.jpg', 20000, '069906699', '2022-04-28 00:00:00', 8, 3),
(5, 'Govap76876', 22, 'Gol D Ace', 'Male', 'https://image.lag.vn/upload/news/21/05/27/danh-sach-nhan-vat-chet-vi-bi-dam-3_XVLA.jpg', 20000, '534656756', '2022-04-20 00:00:00', 8, 4),
(7, 'Govap567867', 22, 'Zeref Dragneel', 'Male', 'https://hoso.wiki/wp-content/uploads/2020/05/zeref-dragneel-1.jpg', 20000, '5547567867', '2022-04-30 00:00:00', 8, 1),
(8, 'Govap6768678', 22, 'Uzumaki Karin', 'Female', 'https://img.websosanh.vn/v10/users/review/images/mccotq25y9op4/1551160411831_5965528.jpg?compress=85', 20000, '567868678967', '2022-04-16 00:00:00', 8, 4),
(9, 'Govap56867867', 22, 'Kamado Nezuko', 'Female', 'https://thuvienanime.com/wp-content/uploads/2021/10/Nezuko.jpg', 20000, '556867869', '2022-04-03 00:00:00', 8, 1),
(10, 'Govap5465756', 22, 'Senju Tobirama', 'Male', 'https://tekutiger.files.wordpress.com/2020/12/tobirama-crystal-screenshot-remake-1920x1080-1.png', 20000, '556756756', '2022-04-13 00:00:00', 8, 2),
(11, 'Gò Vấp,Hồ Chí Minh', 30, 'Lê Văn An', 'Male', 'https://dep365.com/wp-content/uploads/2019/11/img_5dbfb08270832.jpg', 3000000, '0898655662', '2022-04-28 00:00:00', 43, 1),
(20, 'Akatsuki', 23, 'Uchiha Madara1', 'Male', 'https://newsmd1fr.keeng.net/tiin/archive/images/20210215/191503_batch_148189203_1082353422243802_7176013939645211715_o.jpg', 88888, '88888888888888888888888', '2022-05-04 00:00:00', 7777777, 1),
(12, 'Govap1', 23, 'Pain1', 'Male', 'https://i.pinimg.com/originals/61/c5/f2/61c5f2aa1220ab5055cfeb460457e576.jpg', 20000, '5222222', '2022-04-05 00:00:00', 8, 2),
(13, 'Govap5', 22, 'Kochō Shinobu1', 'Female', 'https://w0.peakpx.com/wallpaper/143/184/HD-wallpaper-shinobu-kocho-anime-cute-fondos-anime-kimetsu-no-yaiba-manga-shinobu.jpg', 20000, '5453453', '2022-04-19 00:00:00', 8, 4),
(14, 'Konoha village', 22, 'Uchiha Itachiiiiiiiiiiiii1', 'Male', 'https://i.pinimg.com/originals/25/55/9f/25559f4667c608e97a290e17f6073be0.jpg', 20000, '069906699', '2022-04-28 00:00:00', 8, 3),
(15, 'Govap76876', 22, 'Gol D Ace1', 'Male', 'https://image.lag.vn/upload/news/21/05/27/danh-sach-nhan-vat-chet-vi-bi-dam-3_XVLA.jpg', 20000, '534656756', '2022-04-20 00:00:00', 8, 4),
(16, 'Govap567867', 22, 'Zeref Dragneel1', 'Male', 'https://hoso.wiki/wp-content/uploads/2020/05/zeref-dragneel-1.jpg', 20000, '5547567867', '2022-04-30 00:00:00', 8, 3),
(17, 'Govap6768678', 22, 'Uzumaki Karin1', 'Female', 'https://img.websosanh.vn/v10/users/review/images/mccotq25y9op4/1551160411831_5965528.jpg?compress=85', 20000, '567868678967', '2022-04-16 00:00:00', 8, 4),
(18, 'Govap56867867', 22, 'Kamado Nezuko1', 'Female', 'https://thuvienanime.com/wp-content/uploads/2021/10/Nezuko.jpg', 20000, '556867869', '2022-04-03 00:00:00', 8, 3),
(19, 'Govap5465756', 22, 'Senju Tobirama1', 'Male', 'https://tekutiger.files.wordpress.com/2020/12/tobirama-crystal-screenshot-remake-1920x1080-1.png', 20000, '556756756', '2022-04-13 00:00:00', 8, 2),
(21, 'Gò Vấp,Hồ Chí Minh', 30, 'Lê Văn An1', 'Male', 'https://dep365.com/wp-content/uploads/2019/11/img_5dbfb08270832.jpg', 3000000, '0898655662', '2022-04-28 00:00:00', 43, 1);

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `team_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`team_id`, `name`) VALUES
(1, 'Akatsuki'),
(2, 'Straw hat'),
(3, 'BigMom'),
(4, 'White Beard'),
(5, 'Red Hair'),
(6, 'Dragon Killer');

-- --------------------------------------------------------

--
-- Table structure for table `working`
--

CREATE TABLE `working` (
  `working_id` int(11) NOT NULL,
  `date` datetime DEFAULT current_timestamp(),
  `hour` int(11) DEFAULT NULL,
  `employee_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `working`
--

INSERT INTO `working` (`working_id`, `date`, `hour`, `employee_id`) VALUES
(1, '2022-05-09 15:45:51', 8, 1),
(2, '2022-05-09 15:45:51', 9, 1),
(3, '2022-05-09 15:46:06', 8, 2),
(4, '2022-05-09 15:46:06', 9, 2),
(5, '2022-05-09 15:46:18', 8, 3),
(6, '2022-05-09 15:46:18', 9, 3),
(7, '2022-05-09 15:46:35', 8, 4),
(8, '2022-05-09 15:46:35', 9, 4),
(9, '2022-05-09 15:46:55', 11, 5),
(10, '2022-05-09 15:46:55', 5, 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `advances`
--
ALTER TABLE `advances`
  ADD PRIMARY KEY (`advances_id`),
  ADD KEY `FKc3reksfx6m07qvbog7ho9nh7a` (`employee_id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`employee_id`),
  ADD KEY `FK8d7lrsr6kwirr93rx0tafnoqa` (`team_id`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`team_id`);

--
-- Indexes for table `working`
--
ALTER TABLE `working`
  ADD PRIMARY KEY (`working_id`),
  ADD KEY `FKedx6ep6gex8s36pcgsni287h8` (`employee_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `advances`
--
ALTER TABLE `advances`
  MODIFY `advances_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `employee_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `team_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `working`
--
ALTER TABLE `working`
  MODIFY `working_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
