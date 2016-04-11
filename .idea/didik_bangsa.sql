-- phpMyAdmin SQL Dump
-- version 4.4.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 10, 2016 at 10:41 AM
-- Server version: 5.6.25
-- PHP Version: 5.6.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `didik_bangsa`
--

-- --------------------------------------------------------

--
-- Table structure for table `bank`
--

CREATE TABLE IF NOT EXISTS `bank` (
  `bank_id` varchar(100) NOT NULL,
  `detail` text,
  `account` text,
  `payment_method_id` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bank`
--

INSERT INTO `bank` (`bank_id`, `detail`, `account`, `payment_method_id`) VALUES
('1242016032411555388', 'BNI', '1111 1111 1111 1111', '1242016032411114591'),
('1242016032411560189', 'BRI', '2222 2222 2222 2222', '1242016032411114591'),
('1242016032411561430', 'Mandiri', '3333 3333 3333 3333', '1242016032411114591'),
('1242016032411571259', 'BCA', '4444 4444 4444 4444', '1242016032411114591');

-- --------------------------------------------------------

--
-- Table structure for table `deposite`
--

CREATE TABLE IF NOT EXISTS `deposite` (
  `deposite_id` varchar(100) NOT NULL,
  `total` text,
  `transaction_id` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `donation`
--

CREATE TABLE IF NOT EXISTS `donation` (
  `donation_id` varchar(100) NOT NULL,
  `total` int(11) DEFAULT NULL,
  `scholarship_id` varchar(100) DEFAULT NULL,
  `transaction_id` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE IF NOT EXISTS `location` (
  `location_id` varchar(100) NOT NULL,
  `detail` text NOT NULL,
  `lat` text,
  `lng` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`location_id`, `detail`, `lat`, `lng`) VALUES
('0\r\n', '-', '-', '-'),
('1242016032410242050', 'Buah Batu, Bandung', '-6.938624099999999', '107.62431930000002'),
('1242016032410330439', 'Dago, Bandung', '-6.891960399999999', '107.61561329999995'),
('1242016032410431593', 'Braga, Bandung', '-6.9192652', '107.60821499999997'),
('1242016032410433275', 'Karapitan, Bandung', '-6.9274973', '107.61678559999996');

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE IF NOT EXISTS `member` (
  `member_id` varchar(100) NOT NULL,
  `name` text,
  `phone` text,
  `email` text,
  `photo` text,
  `biography` text,
  `last_login` datetime DEFAULT NULL,
  `register_date` datetime DEFAULT NULL,
  `password` text,
  `location_id` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`member_id`, `name`, `phone`, `email`, `photo`, `biography`, `last_login`, `register_date`, `password`, `location_id`) VALUES
('1242016040907543682', 'Ramona', '123', 'ramona@email.com', NULL, NULL, NULL, '2016-04-09 00:54:36', '202cb962ac59075b964b07152d234b70', NULL),
('1242016040907544527', 'John', '123', 'john@gmail.com', NULL, NULL, NULL, '2016-04-09 00:54:45', '202cb962ac59075b964b07152d234b70', NULL),
('1242016040907593665', 'neo', '123', 'neo@gmail.com', NULL, NULL, NULL, '2016-04-09 00:59:36', '202cb962ac59075b964b07152d234b70', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE IF NOT EXISTS `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment_method`
--

CREATE TABLE IF NOT EXISTS `payment_method` (
  `payment_method_id` varchar(100) NOT NULL,
  `detail` text,
  `status` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payment_method`
--

INSERT INTO `payment_method` (`payment_method_id`, `detail`, `status`) VALUES
('1122016032411242257', 'Dompet', 1),
('1242016032411114591', 'Transfer', 0);

-- --------------------------------------------------------

--
-- Table structure for table `scholarship`
--

CREATE TABLE IF NOT EXISTS `scholarship` (
  `sholarship_id` varchar(100) NOT NULL,
  `student_name` text,
  `deadline` datetime DEFAULT NULL,
  `picture` text,
  `video` text,
  `short_description` text,
  `detailed_description` text,
  `location_id` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `scholarship_variable`
--

CREATE TABLE IF NOT EXISTS `scholarship_variable` (
  `scholarship_variable_id` varchar(100) NOT NULL,
  `label` text,
  `total` int(11) DEFAULT '0',
  `scholarship_id` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE IF NOT EXISTS `transaction` (
  `transaction_id` varchar(100) NOT NULL,
  `detail` text,
  `date` datetime DEFAULT NULL,
  `member_id` varchar(100) DEFAULT NULL,
  `payment_method_id` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bank`
--
ALTER TABLE `bank`
  ADD PRIMARY KEY (`bank_id`),
  ADD KEY `payment_method_id` (`payment_method_id`);

--
-- Indexes for table `deposite`
--
ALTER TABLE `deposite`
  ADD PRIMARY KEY (`deposite_id`),
  ADD KEY `transaction_id` (`transaction_id`);

--
-- Indexes for table `donation`
--
ALTER TABLE `donation`
  ADD PRIMARY KEY (`donation_id`),
  ADD KEY `scholarship_id` (`scholarship_id`,`transaction_id`),
  ADD KEY `transaction_id` (`transaction_id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`location_id`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`member_id`),
  ADD KEY `location_id` (`location_id`);

--
-- Indexes for table `payment_method`
--
ALTER TABLE `payment_method`
  ADD PRIMARY KEY (`payment_method_id`);

--
-- Indexes for table `scholarship`
--
ALTER TABLE `scholarship`
  ADD PRIMARY KEY (`sholarship_id`),
  ADD KEY `location_id` (`location_id`);

--
-- Indexes for table `scholarship_variable`
--
ALTER TABLE `scholarship_variable`
  ADD PRIMARY KEY (`scholarship_variable_id`),
  ADD KEY `scholarship_id` (`scholarship_id`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`transaction_id`),
  ADD KEY `member_id` (`member_id`,`payment_method_id`),
  ADD KEY `payment_method_id` (`payment_method_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bank`
--
ALTER TABLE `bank`
  ADD CONSTRAINT `bank_ibfk_1` FOREIGN KEY (`payment_method_id`) REFERENCES `payment_method` (`payment_method_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `deposite`
--
ALTER TABLE `deposite`
  ADD CONSTRAINT `deposite_ibfk_1` FOREIGN KEY (`transaction_id`) REFERENCES `transaction` (`transaction_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `donation`
--
ALTER TABLE `donation`
  ADD CONSTRAINT `donation_ibfk_1` FOREIGN KEY (`scholarship_id`) REFERENCES `scholarship` (`sholarship_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `donation_ibfk_2` FOREIGN KEY (`transaction_id`) REFERENCES `transaction` (`transaction_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `member`
--
ALTER TABLE `member`
  ADD CONSTRAINT `member_ibfk_1` FOREIGN KEY (`location_id`) REFERENCES `location` (`location_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `scholarship`
--
ALTER TABLE `scholarship`
  ADD CONSTRAINT `scholarship_ibfk_1` FOREIGN KEY (`location_id`) REFERENCES `location` (`location_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `scholarship_variable`
--
ALTER TABLE `scholarship_variable`
  ADD CONSTRAINT `scholarship_variable_ibfk_1` FOREIGN KEY (`scholarship_id`) REFERENCES `scholarship` (`sholarship_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `transaction_ibfk_2` FOREIGN KEY (`payment_method_id`) REFERENCES `payment_method` (`payment_method_id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
