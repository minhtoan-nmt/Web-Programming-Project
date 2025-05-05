-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2025 at 11:56 AM
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
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `total_price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

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
('COM0002', 'CUS0002', 'Quá hay! Cảm ơn bạn đã chia sẻ', '2025-04-29 12:35:00', 0, 'POS0002'),
('COM0003', 'CUS0001', 'Một bình luận mới', '2025-05-03 06:44:38', 0, NULL),
('COM0004', 'CUS0001', 'Một bình luận mới', '2025-05-03 06:45:05', 0, 'POS0001'),
('COM0005', 'CUS0001', 'Array', '2025-05-03 06:55:29', 0, 'Array'),
('COM0006', 'CUS0001', 'Array', '2025-05-03 06:58:07', 0, 'Array'),
('COM0007', 'CUS0001', 'Một bình luận từ web', '2025-05-03 07:00:39', 0, 'POS0001'),
('COM0008', 'CUS0001', 'abcd', '2025-05-03 07:06:04', 0, 'POS0001'),
('COM0009', 'CUS0001', 'abcde', '2025-05-03 07:06:12', 0, 'POS0001'),
('COM0010', 'CUS0001', '1', '2025-05-03 07:06:29', 0, 'POS0001'),
('COM0011', 'CUS0001', '2', '2025-05-03 07:06:31', 0, 'POS0001');

--
-- Triggers `comment`
--
DELIMITER $$
CREATE TRIGGER `commentGenerateNewId` BEFORE INSERT ON `comment` FOR EACH ROW BEGIN
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

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `citizen_id` varchar(12) NOT NULL,
  `phone_num` varchar(12) NOT NULL,
  `address` varchar(255) NOT NULL,
  `birth_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- --------------------------------------------------------

--
-- Table structure for table `itemincart`
--

CREATE TABLE `itemincart` (
  `cart_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` varchar(7) DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `star_rate` double NOT NULL,
  `img_src` varchar(255) DEFAULT NULL,
  `date_posted` datetime NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `title`, `star_rate`, `img_src`, `date_posted`, `content`) VALUES
('POS0001', 'PlayStation 5 Black and White version of the PS5 coming out on sale.', 4.1, 'https://i.postimg.cc/8C1hsqDg/ps5-item2.webp', '2025-04-12 18:36:56', 'Chính sự phát triển của ngành công nghệ thông tin đã đánh dấu một giai đoạn phát triển mới cho con người. Cuộc sống trở nên hiện đại hơn, thông minh hơn và tiện ích hơn. Tuy nhiên, bên cạnh những tiện ích mà công nghệ mang lại, cũng tồn tại những tác động tiêu cực đối với cuộc sống của chúng ta. Vậy công nghệ ảnh hưởng thế nào đến cuộc sống con người? Hãy cùng chúng tôi khám phá điều này thông qua bài viết dưới đây.\nSự xuất hiện của khoa học công nghệ cùng với những phát minh khoa học tiên tiến đã hoàn toàn thay đổi bản chất cuộc sống của con người. Điện thoại thông minh, máy tính, điều hòa, robot, thanh toán bằng thẻ, và cả ô tô tự lái, máy bay tự lái,... đều là những sáng chế tiên tiến, thông minh của con người, đánh dấu một kỷ nguyên phát triển mới trong lịch sử nhân loại.\nSự xuất hiện của các thiết bị công nghệ tiên tiến đã thúc đẩy sự phát triển kinh tế và xã hội. Những thiết bị này giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả, mà không cần phải tốn nhiều sức lao động.\nĐiện thoại không chỉ giúp chúng ta duy trì liên lạc với nhau, mà còn hỗ trợ giải trí, kinh doanh, và thanh toán. Điện thoại thông minh đã trở thành một phần không thể thiếu trong cuộc sống hàng ngày của chúng ta. Máy tính cũng đã giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả. Hơn nữa, máy tính là công cụ giúp con người tìm kiếm thông tin hiệu quả, và không thể thiếu kết nối internet để hoàn thành nhiều nhiệm vụ. Điện thoại, máy tính và internet đều liên quan chặt chẽ và cùng nhau tạo nên cuộc sống hiện đại.\nNhững phát minh hiện đại như máy bay, ô tô tự lái, và cửa hàng tự động mà không cần người bán cũng mang lại nhiều lợi ích. Chúng đã đánh dấu một bước tiến mới trong sự phát triển của con người. Các thiết bị công nghệ tiên tiến, từ việc thay thế con người trong nhiều tác vụ, đến việc làm nhà bằng robot và hệ thống tự động trong gia đình, đều đã thay đổi cách chúng ta sống và làm việc.\nTuy nhiên, bên cạnh những lợi ích rõ ràng, không thể phủ nhận rằng còn tồn tại những hệ lụy của công nghệ. Công nghệ có thể làm cho chúng ta trở nên lười biếng hơn và đôi khi tạo ra sự ích kỷ và tình trạng căng thẳng. Chúng ta có thể thay thế công việc nhà bằng robot trong khi chỉ ngồi nghe nhạc hoặc xem phim. Khi điện thoại hoặc máy tính gặp sự cố, chúng ta có thể trở nên cáu kỉnh và tức giận.'),
('POS0002', 'PlayStation 5 Black and White version of the PS5 coming out on sale.', 4.2, 'https://i.postimg.cc/rpQ54QF0/ps5-item1.jpg', '2025-04-12 18:36:56', 'Chính sự phát triển của ngành công nghệ thông tin đã đánh dấu một giai đoạn phát triển mới cho con người. Cuộc sống trở nên hiện đại hơn, thông minh hơn và tiện ích hơn. Tuy nhiên, bên cạnh những tiện ích mà công nghệ mang lại, cũng tồn tại những tác động tiêu cực đối với cuộc sống của chúng ta. Vậy công nghệ ảnh hưởng thế nào đến cuộc sống con người? Hãy cùng chúng tôi khám phá điều này thông qua bài viết dưới đây.\nSự xuất hiện của khoa học công nghệ cùng với những phát minh khoa học tiên tiến đã hoàn toàn thay đổi bản chất cuộc sống của con người. Điện thoại thông minh, máy tính, điều hòa, robot, thanh toán bằng thẻ, và cả ô tô tự lái, máy bay tự lái,... đều là những sáng chế tiên tiến, thông minh của con người, đánh dấu một kỷ nguyên phát triển mới trong lịch sử nhân loại.\nSự xuất hiện của các thiết bị công nghệ tiên tiến đã thúc đẩy sự phát triển kinh tế và xã hội. Những thiết bị này giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả, mà không cần phải tốn nhiều sức lao động.\nĐiện thoại không chỉ giúp chúng ta duy trì liên lạc với nhau, mà còn hỗ trợ giải trí, kinh doanh, và thanh toán. Điện thoại thông minh đã trở thành một phần không thể thiếu trong cuộc sống hàng ngày của chúng ta. Máy tính cũng đã giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả. Hơn nữa, máy tính là công cụ giúp con người tìm kiếm thông tin hiệu quả, và không thể thiếu kết nối internet để hoàn thành nhiều nhiệm vụ. Điện thoại, máy tính và internet đều liên quan chặt chẽ và cùng nhau tạo nên cuộc sống hiện đại.\nNhững phát minh hiện đại như máy bay, ô tô tự lái, và cửa hàng tự động mà không cần người bán cũng mang lại nhiều lợi ích. Chúng đã đánh dấu một bước tiến mới trong sự phát triển của con người. Các thiết bị công nghệ tiên tiến, từ việc thay thế con người trong nhiều tác vụ, đến việc làm nhà bằng robot và hệ thống tự động trong gia đình, đều đã thay đổi cách chúng ta sống và làm việc.\nTuy nhiên, bên cạnh những lợi ích rõ ràng, không thể phủ nhận rằng còn tồn tại những hệ lụy của công nghệ. Công nghệ có thể làm cho chúng ta trở nên lười biếng hơn và đôi khi tạo ra sự ích kỷ và tình trạng căng thẳng. Chúng ta có thể thay thế công việc nhà bằng robot trong khi chỉ ngồi nghe nhạc hoặc xem phim. Khi điện thoại hoặc máy tính gặp sự cố, chúng ta có thể trở nên cáu kỉnh và tức giận.'),
('POS0003', 'PlayStation 5 Black and White version of the PS5 coming out on sale.', 4.3, 'https://i.postimg.cc/rpQ54QF0/ps5-item1.jpg', '2025-04-12 18:36:56', 'Chính sự phát triển của ngành công nghệ thông tin đã đánh dấu một giai đoạn phát triển mới cho con người. Cuộc sống trở nên hiện đại hơn, thông minh hơn và tiện ích hơn. Tuy nhiên, bên cạnh những tiện ích mà công nghệ mang lại, cũng tồn tại những tác động tiêu cực đối với cuộc sống của chúng ta. Vậy công nghệ ảnh hưởng thế nào đến cuộc sống con người? Hãy cùng chúng tôi khám phá điều này thông qua bài viết dưới đây.\nSự xuất hiện của khoa học công nghệ cùng với những phát minh khoa học tiên tiến đã hoàn toàn thay đổi bản chất cuộc sống của con người. Điện thoại thông minh, máy tính, điều hòa, robot, thanh toán bằng thẻ, và cả ô tô tự lái, máy bay tự lái,... đều là những sáng chế tiên tiến, thông minh của con người, đánh dấu một kỷ nguyên phát triển mới trong lịch sử nhân loại.\nSự xuất hiện của các thiết bị công nghệ tiên tiến đã thúc đẩy sự phát triển kinh tế và xã hội. Những thiết bị này giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả, mà không cần phải tốn nhiều sức lao động.\nĐiện thoại không chỉ giúp chúng ta duy trì liên lạc với nhau, mà còn hỗ trợ giải trí, kinh doanh, và thanh toán. Điện thoại thông minh đã trở thành một phần không thể thiếu trong cuộc sống hàng ngày của chúng ta. Máy tính cũng đã giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả. Hơn nữa, máy tính là công cụ giúp con người tìm kiếm thông tin hiệu quả, và không thể thiếu kết nối internet để hoàn thành nhiều nhiệm vụ. Điện thoại, máy tính và internet đều liên quan chặt chẽ và cùng nhau tạo nên cuộc sống hiện đại.\nNhững phát minh hiện đại như máy bay, ô tô tự lái, và cửa hàng tự động mà không cần người bán cũng mang lại nhiều lợi ích. Chúng đã đánh dấu một bước tiến mới trong sự phát triển của con người. Các thiết bị công nghệ tiên tiến, từ việc thay thế con người trong nhiều tác vụ, đến việc làm nhà bằng robot và hệ thống tự động trong gia đình, đều đã thay đổi cách chúng ta sống và làm việc.\nTuy nhiên, bên cạnh những lợi ích rõ ràng, không thể phủ nhận rằng còn tồn tại những hệ lụy của công nghệ. Công nghệ có thể làm cho chúng ta trở nên lười biếng hơn và đôi khi tạo ra sự ích kỷ và tình trạng căng thẳng. Chúng ta có thể thay thế công việc nhà bằng robot trong khi chỉ ngồi nghe nhạc hoặc xem phim. Khi điện thoại hoặc máy tính gặp sự cố, chúng ta có thể trở nên cáu kỉnh và tức giận.'),
('POS0004', 'PlayStation 5 Black and White version of the PS5 coming out on sale.', 4, 'https://i.postimg.cc/8C1hsqDg/ps5-item2.webp', '2025-04-12 18:36:56', 'Chính sự phát triển của ngành công nghệ thông tin đã đánh dấu một giai đoạn phát triển mới cho con người. Cuộc sống trở nên hiện đại hơn, thông minh hơn và tiện ích hơn. Tuy nhiên, bên cạnh những tiện ích mà công nghệ mang lại, cũng tồn tại những tác động tiêu cực đối với cuộc sống của chúng ta. Vậy công nghệ ảnh hưởng thế nào đến cuộc sống con người? Hãy cùng chúng tôi khám phá điều này thông qua bài viết dưới đây.\nSự xuất hiện của khoa học công nghệ cùng với những phát minh khoa học tiên tiến đã hoàn toàn thay đổi bản chất cuộc sống của con người. Điện thoại thông minh, máy tính, điều hòa, robot, thanh toán bằng thẻ, và cả ô tô tự lái, máy bay tự lái,... đều là những sáng chế tiên tiến, thông minh của con người, đánh dấu một kỷ nguyên phát triển mới trong lịch sử nhân loại.\nSự xuất hiện của các thiết bị công nghệ tiên tiến đã thúc đẩy sự phát triển kinh tế và xã hội. Những thiết bị này giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả, mà không cần phải tốn nhiều sức lao động.\nĐiện thoại không chỉ giúp chúng ta duy trì liên lạc với nhau, mà còn hỗ trợ giải trí, kinh doanh, và thanh toán. Điện thoại thông minh đã trở thành một phần không thể thiếu trong cuộc sống hàng ngày của chúng ta. Máy tính cũng đã giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả. Hơn nữa, máy tính là công cụ giúp con người tìm kiếm thông tin hiệu quả, và không thể thiếu kết nối internet để hoàn thành nhiều nhiệm vụ. Điện thoại, máy tính và internet đều liên quan chặt chẽ và cùng nhau tạo nên cuộc sống hiện đại.\nNhững phát minh hiện đại như máy bay, ô tô tự lái, và cửa hàng tự động mà không cần người bán cũng mang lại nhiều lợi ích. Chúng đã đánh dấu một bước tiến mới trong sự phát triển của con người. Các thiết bị công nghệ tiên tiến, từ việc thay thế con người trong nhiều tác vụ, đến việc làm nhà bằng robot và hệ thống tự động trong gia đình, đều đã thay đổi cách chúng ta sống và làm việc.\nTuy nhiên, bên cạnh những lợi ích rõ ràng, không thể phủ nhận rằng còn tồn tại những hệ lụy của công nghệ. Công nghệ có thể làm cho chúng ta trở nên lười biếng hơn và đôi khi tạo ra sự ích kỷ và tình trạng căng thẳng. Chúng ta có thể thay thế công việc nhà bằng robot trong khi chỉ ngồi nghe nhạc hoặc xem phim. Khi điện thoại hoặc máy tính gặp sự cố, chúng ta có thể trở nên cáu kỉnh và tức giận.'),
('POS0005', 'PlayStation 5 Black and White version of the PS5 coming out on sale.', 4.4, 'https://i.postimg.cc/rpQ54QF0/ps5-item1.jpg', '2025-04-12 18:36:56', 'Chính sự phát triển của ngành công nghệ thông tin đã đánh dấu một giai đoạn phát triển mới cho con người. Cuộc sống trở nên hiện đại hơn, thông minh hơn và tiện ích hơn. Tuy nhiên, bên cạnh những tiện ích mà công nghệ mang lại, cũng tồn tại những tác động tiêu cực đối với cuộc sống của chúng ta. Vậy công nghệ ảnh hưởng thế nào đến cuộc sống con người? Hãy cùng chúng tôi khám phá điều này thông qua bài viết dưới đây.\nSự xuất hiện của khoa học công nghệ cùng với những phát minh khoa học tiên tiến đã hoàn toàn thay đổi bản chất cuộc sống của con người. Điện thoại thông minh, máy tính, điều hòa, robot, thanh toán bằng thẻ, và cả ô tô tự lái, máy bay tự lái,... đều là những sáng chế tiên tiến, thông minh của con người, đánh dấu một kỷ nguyên phát triển mới trong lịch sử nhân loại.\nSự xuất hiện của các thiết bị công nghệ tiên tiến đã thúc đẩy sự phát triển kinh tế và xã hội. Những thiết bị này giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả, mà không cần phải tốn nhiều sức lao động.\nĐiện thoại không chỉ giúp chúng ta duy trì liên lạc với nhau, mà còn hỗ trợ giải trí, kinh doanh, và thanh toán. Điện thoại thông minh đã trở thành một phần không thể thiếu trong cuộc sống hàng ngày của chúng ta. Máy tính cũng đã giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả. Hơn nữa, máy tính là công cụ giúp con người tìm kiếm thông tin hiệu quả, và không thể thiếu kết nối internet để hoàn thành nhiều nhiệm vụ. Điện thoại, máy tính và internet đều liên quan chặt chẽ và cùng nhau tạo nên cuộc sống hiện đại.\nNhững phát minh hiện đại như máy bay, ô tô tự lái, và cửa hàng tự động mà không cần người bán cũng mang lại nhiều lợi ích. Chúng đã đánh dấu một bước tiến mới trong sự phát triển của con người. Các thiết bị công nghệ tiên tiến, từ việc thay thế con người trong nhiều tác vụ, đến việc làm nhà bằng robot và hệ thống tự động trong gia đình, đều đã thay đổi cách chúng ta sống và làm việc.\nTuy nhiên, bên cạnh những lợi ích rõ ràng, không thể phủ nhận rằng còn tồn tại những hệ lụy của công nghệ. Công nghệ có thể làm cho chúng ta trở nên lười biếng hơn và đôi khi tạo ra sự ích kỷ và tình trạng căng thẳng. Chúng ta có thể thay thế công việc nhà bằng robot trong khi chỉ ngồi nghe nhạc hoặc xem phim. Khi điện thoại hoặc máy tính gặp sự cố, chúng ta có thể trở nên cáu kỉnh và tức giận.'),
('POS0006', 'PlayStation 5 Black and White version of the PS5 coming out on sale.', 3.9, 'https://i.postimg.cc/rpQ54QF0/ps5-item1.jpg', '2025-04-12 18:36:56', 'Chính sự phát triển của ngành công nghệ thông tin đã đánh dấu một giai đoạn phát triển mới cho con người. Cuộc sống trở nên hiện đại hơn, thông minh hơn và tiện ích hơn. Tuy nhiên, bên cạnh những tiện ích mà công nghệ mang lại, cũng tồn tại những tác động tiêu cực đối với cuộc sống của chúng ta. Vậy công nghệ ảnh hưởng thế nào đến cuộc sống con người? Hãy cùng chúng tôi khám phá điều này thông qua bài viết dưới đây.\nSự xuất hiện của khoa học công nghệ cùng với những phát minh khoa học tiên tiến đã hoàn toàn thay đổi bản chất cuộc sống của con người. Điện thoại thông minh, máy tính, điều hòa, robot, thanh toán bằng thẻ, và cả ô tô tự lái, máy bay tự lái,... đều là những sáng chế tiên tiến, thông minh của con người, đánh dấu một kỷ nguyên phát triển mới trong lịch sử nhân loại.\nSự xuất hiện của các thiết bị công nghệ tiên tiến đã thúc đẩy sự phát triển kinh tế và xã hội. Những thiết bị này giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả, mà không cần phải tốn nhiều sức lao động.\nĐiện thoại không chỉ giúp chúng ta duy trì liên lạc với nhau, mà còn hỗ trợ giải trí, kinh doanh, và thanh toán. Điện thoại thông minh đã trở thành một phần không thể thiếu trong cuộc sống hàng ngày của chúng ta. Máy tính cũng đã giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả. Hơn nữa, máy tính là công cụ giúp con người tìm kiếm thông tin hiệu quả, và không thể thiếu kết nối internet để hoàn thành nhiều nhiệm vụ. Điện thoại, máy tính và internet đều liên quan chặt chẽ và cùng nhau tạo nên cuộc sống hiện đại.\nNhững phát minh hiện đại như máy bay, ô tô tự lái, và cửa hàng tự động mà không cần người bán cũng mang lại nhiều lợi ích. Chúng đã đánh dấu một bước tiến mới trong sự phát triển của con người. Các thiết bị công nghệ tiên tiến, từ việc thay thế con người trong nhiều tác vụ, đến việc làm nhà bằng robot và hệ thống tự động trong gia đình, đều đã thay đổi cách chúng ta sống và làm việc.\nTuy nhiên, bên cạnh những lợi ích rõ ràng, không thể phủ nhận rằng còn tồn tại những hệ lụy của công nghệ. Công nghệ có thể làm cho chúng ta trở nên lười biếng hơn và đôi khi tạo ra sự ích kỷ và tình trạng căng thẳng. Chúng ta có thể thay thế công việc nhà bằng robot trong khi chỉ ngồi nghe nhạc hoặc xem phim. Khi điện thoại hoặc máy tính gặp sự cố, chúng ta có thể trở nên cáu kỉnh và tức giận.'),
('POS0007', 'PlayStation 5 Black and White version of the PS5 coming out on sale.', 4.1, 'https://i.postimg.cc/rpQ54QF0/ps5-item1.jpg', '2025-04-12 18:36:56', 'Chính sự phát triển của ngành công nghệ thông tin đã đánh dấu một giai đoạn phát triển mới cho con người. Cuộc sống trở nên hiện đại hơn, thông minh hơn và tiện ích hơn. Tuy nhiên, bên cạnh những tiện ích mà công nghệ mang lại, cũng tồn tại những tác động tiêu cực đối với cuộc sống của chúng ta. Vậy công nghệ ảnh hưởng thế nào đến cuộc sống con người? Hãy cùng chúng tôi khám phá điều này thông qua bài viết dưới đây.\nSự xuất hiện của khoa học công nghệ cùng với những phát minh khoa học tiên tiến đã hoàn toàn thay đổi bản chất cuộc sống của con người. Điện thoại thông minh, máy tính, điều hòa, robot, thanh toán bằng thẻ, và cả ô tô tự lái, máy bay tự lái,... đều là những sáng chế tiên tiến, thông minh của con người, đánh dấu một kỷ nguyên phát triển mới trong lịch sử nhân loại.\nSự xuất hiện của các thiết bị công nghệ tiên tiến đã thúc đẩy sự phát triển kinh tế và xã hội. Những thiết bị này giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả, mà không cần phải tốn nhiều sức lao động.\nĐiện thoại không chỉ giúp chúng ta duy trì liên lạc với nhau, mà còn hỗ trợ giải trí, kinh doanh, và thanh toán. Điện thoại thông minh đã trở thành một phần không thể thiếu trong cuộc sống hàng ngày của chúng ta. Máy tính cũng đã giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả. Hơn nữa, máy tính là công cụ giúp con người tìm kiếm thông tin hiệu quả, và không thể thiếu kết nối internet để hoàn thành nhiều nhiệm vụ. Điện thoại, máy tính và internet đều liên quan chặt chẽ và cùng nhau tạo nên cuộc sống hiện đại.\nNhững phát minh hiện đại như máy bay, ô tô tự lái, và cửa hàng tự động mà không cần người bán cũng mang lại nhiều lợi ích. Chúng đã đánh dấu một bước tiến mới trong sự phát triển của con người. Các thiết bị công nghệ tiên tiến, từ việc thay thế con người trong nhiều tác vụ, đến việc làm nhà bằng robot và hệ thống tự động trong gia đình, đều đã thay đổi cách chúng ta sống và làm việc.\nTuy nhiên, bên cạnh những lợi ích rõ ràng, không thể phủ nhận rằng còn tồn tại những hệ lụy của công nghệ. Công nghệ có thể làm cho chúng ta trở nên lười biếng hơn và đôi khi tạo ra sự ích kỷ và tình trạng căng thẳng. Chúng ta có thể thay thế công việc nhà bằng robot trong khi chỉ ngồi nghe nhạc hoặc xem phim. Khi điện thoại hoặc máy tính gặp sự cố, chúng ta có thể trở nên cáu kỉnh và tức giận.'),
('POS0008', 'PlayStation 5 Black and White version of the PS5 coming out on sale.', 4.1, 'https://i.postimg.cc/8C1hsqDg/ps5-item2.webp', '2025-04-12 18:36:56', 'Chính sự phát triển của ngành công nghệ thông tin đã đánh dấu một giai đoạn phát triển mới cho con người. Cuộc sống trở nên hiện đại hơn, thông minh hơn và tiện ích hơn. Tuy nhiên, bên cạnh những tiện ích mà công nghệ mang lại, cũng tồn tại những tác động tiêu cực đối với cuộc sống của chúng ta. Vậy công nghệ ảnh hưởng thế nào đến cuộc sống con người? Hãy cùng chúng tôi khám phá điều này thông qua bài viết dưới đây.\nSự xuất hiện của khoa học công nghệ cùng với những phát minh khoa học tiên tiến đã hoàn toàn thay đổi bản chất cuộc sống của con người. Điện thoại thông minh, máy tính, điều hòa, robot, thanh toán bằng thẻ, và cả ô tô tự lái, máy bay tự lái,... đều là những sáng chế tiên tiến, thông minh của con người, đánh dấu một kỷ nguyên phát triển mới trong lịch sử nhân loại.\nSự xuất hiện của các thiết bị công nghệ tiên tiến đã thúc đẩy sự phát triển kinh tế và xã hội. Những thiết bị này giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả, mà không cần phải tốn nhiều sức lao động.\nĐiện thoại không chỉ giúp chúng ta duy trì liên lạc với nhau, mà còn hỗ trợ giải trí, kinh doanh, và thanh toán. Điện thoại thông minh đã trở thành một phần không thể thiếu trong cuộc sống hàng ngày của chúng ta. Máy tính cũng đã giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả. Hơn nữa, máy tính là công cụ giúp con người tìm kiếm thông tin hiệu quả, và không thể thiếu kết nối internet để hoàn thành nhiều nhiệm vụ. Điện thoại, máy tính và internet đều liên quan chặt chẽ và cùng nhau tạo nên cuộc sống hiện đại.\nNhững phát minh hiện đại như máy bay, ô tô tự lái, và cửa hàng tự động mà không cần người bán cũng mang lại nhiều lợi ích. Chúng đã đánh dấu một bước tiến mới trong sự phát triển của con người. Các thiết bị công nghệ tiên tiến, từ việc thay thế con người trong nhiều tác vụ, đến việc làm nhà bằng robot và hệ thống tự động trong gia đình, đều đã thay đổi cách chúng ta sống và làm việc.\nTuy nhiên, bên cạnh những lợi ích rõ ràng, không thể phủ nhận rằng còn tồn tại những hệ lụy của công nghệ. Công nghệ có thể làm cho chúng ta trở nên lười biếng hơn và đôi khi tạo ra sự ích kỷ và tình trạng căng thẳng. Chúng ta có thể thay thế công việc nhà bằng robot trong khi chỉ ngồi nghe nhạc hoặc xem phim. Khi điện thoại hoặc máy tính gặp sự cố, chúng ta có thể trở nên cáu kỉnh và tức giận.'),
('POS0009', 'PlayStation 5 Black and White version of the PS5 coming out on sale.', 4.5, 'https://i.postimg.cc/rpQ54QF0/ps5-item1.jpg', '2025-04-12 18:36:56', 'Chính sự phát triển của ngành công nghệ thông tin đã đánh dấu một giai đoạn phát triển mới cho con người. Cuộc sống trở nên hiện đại hơn, thông minh hơn và tiện ích hơn. Tuy nhiên, bên cạnh những tiện ích mà công nghệ mang lại, cũng tồn tại những tác động tiêu cực đối với cuộc sống của chúng ta. Vậy công nghệ ảnh hưởng thế nào đến cuộc sống con người? Hãy cùng chúng tôi khám phá điều này thông qua bài viết dưới đây.\nSự xuất hiện của khoa học công nghệ cùng với những phát minh khoa học tiên tiến đã hoàn toàn thay đổi bản chất cuộc sống của con người. Điện thoại thông minh, máy tính, điều hòa, robot, thanh toán bằng thẻ, và cả ô tô tự lái, máy bay tự lái,... đều là những sáng chế tiên tiến, thông minh của con người, đánh dấu một kỷ nguyên phát triển mới trong lịch sử nhân loại.\nSự xuất hiện của các thiết bị công nghệ tiên tiến đã thúc đẩy sự phát triển kinh tế và xã hội. Những thiết bị này giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả, mà không cần phải tốn nhiều sức lao động.\nĐiện thoại không chỉ giúp chúng ta duy trì liên lạc với nhau, mà còn hỗ trợ giải trí, kinh doanh, và thanh toán. Điện thoại thông minh đã trở thành một phần không thể thiếu trong cuộc sống hàng ngày của chúng ta. Máy tính cũng đã giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả. Hơn nữa, máy tính là công cụ giúp con người tìm kiếm thông tin hiệu quả, và không thể thiếu kết nối internet để hoàn thành nhiều nhiệm vụ. Điện thoại, máy tính và internet đều liên quan chặt chẽ và cùng nhau tạo nên cuộc sống hiện đại.\nNhững phát minh hiện đại như máy bay, ô tô tự lái, và cửa hàng tự động mà không cần người bán cũng mang lại nhiều lợi ích. Chúng đã đánh dấu một bước tiến mới trong sự phát triển của con người. Các thiết bị công nghệ tiên tiến, từ việc thay thế con người trong nhiều tác vụ, đến việc làm nhà bằng robot và hệ thống tự động trong gia đình, đều đã thay đổi cách chúng ta sống và làm việc.\nTuy nhiên, bên cạnh những lợi ích rõ ràng, không thể phủ nhận rằng còn tồn tại những hệ lụy của công nghệ. Công nghệ có thể làm cho chúng ta trở nên lười biếng hơn và đôi khi tạo ra sự ích kỷ và tình trạng căng thẳng. Chúng ta có thể thay thế công việc nhà bằng robot trong khi chỉ ngồi nghe nhạc hoặc xem phim. Khi điện thoại hoặc máy tính gặp sự cố, chúng ta có thể trở nên cáu kỉnh và tức giận.'),
('POS0010', 'PlayStation 5 Black and White version of the PS5 coming out on sale.', 4.7, 'https://i.postimg.cc/rpQ54QF0/ps5-item1.jpg', '2025-04-12 18:36:56', 'Chính sự phát triển của ngành công nghệ thông tin đã đánh dấu một giai đoạn phát triển mới cho con người. Cuộc sống trở nên hiện đại hơn, thông minh hơn và tiện ích hơn. Tuy nhiên, bên cạnh những tiện ích mà công nghệ mang lại, cũng tồn tại những tác động tiêu cực đối với cuộc sống của chúng ta. Vậy công nghệ ảnh hưởng thế nào đến cuộc sống con người? Hãy cùng chúng tôi khám phá điều này thông qua bài viết dưới đây.\nSự xuất hiện của khoa học công nghệ cùng với những phát minh khoa học tiên tiến đã hoàn toàn thay đổi bản chất cuộc sống của con người. Điện thoại thông minh, máy tính, điều hòa, robot, thanh toán bằng thẻ, và cả ô tô tự lái, máy bay tự lái,... đều là những sáng chế tiên tiến, thông minh của con người, đánh dấu một kỷ nguyên phát triển mới trong lịch sử nhân loại.\nSự xuất hiện của các thiết bị công nghệ tiên tiến đã thúc đẩy sự phát triển kinh tế và xã hội. Những thiết bị này giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả, mà không cần phải tốn nhiều sức lao động.\nĐiện thoại không chỉ giúp chúng ta duy trì liên lạc với nhau, mà còn hỗ trợ giải trí, kinh doanh, và thanh toán. Điện thoại thông minh đã trở thành một phần không thể thiếu trong cuộc sống hàng ngày của chúng ta. Máy tính cũng đã giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả. Hơn nữa, máy tính là công cụ giúp con người tìm kiếm thông tin hiệu quả, và không thể thiếu kết nối internet để hoàn thành nhiều nhiệm vụ. Điện thoại, máy tính và internet đều liên quan chặt chẽ và cùng nhau tạo nên cuộc sống hiện đại.\nNhững phát minh hiện đại như máy bay, ô tô tự lái, và cửa hàng tự động mà không cần người bán cũng mang lại nhiều lợi ích. Chúng đã đánh dấu một bước tiến mới trong sự phát triển của con người. Các thiết bị công nghệ tiên tiến, từ việc thay thế con người trong nhiều tác vụ, đến việc làm nhà bằng robot và hệ thống tự động trong gia đình, đều đã thay đổi cách chúng ta sống và làm việc.\nTuy nhiên, bên cạnh những lợi ích rõ ràng, không thể phủ nhận rằng còn tồn tại những hệ lụy của công nghệ. Công nghệ có thể làm cho chúng ta trở nên lười biếng hơn và đôi khi tạo ra sự ích kỷ và tình trạng căng thẳng. Chúng ta có thể thay thế công việc nhà bằng robot trong khi chỉ ngồi nghe nhạc hoặc xem phim. Khi điện thoại hoặc máy tính gặp sự cố, chúng ta có thể trở nên cáu kỉnh và tức giận.'),
('POS0011', 'PlayStation 5 Black and White version of the PS5 coming out on sale.', 4.1, 'https://i.postimg.cc/8C1hsqDg/ps5-item2.webp', '2025-04-12 18:36:56', 'Chính sự phát triển của ngành công nghệ thông tin đã đánh dấu một giai đoạn phát triển mới cho con người. Cuộc sống trở nên hiện đại hơn, thông minh hơn và tiện ích hơn. Tuy nhiên, bên cạnh những tiện ích mà công nghệ mang lại, cũng tồn tại những tác động tiêu cực đối với cuộc sống của chúng ta. Vậy công nghệ ảnh hưởng thế nào đến cuộc sống con người? Hãy cùng chúng tôi khám phá điều này thông qua bài viết dưới đây.\nSự xuất hiện của khoa học công nghệ cùng với những phát minh khoa học tiên tiến đã hoàn toàn thay đổi bản chất cuộc sống của con người. Điện thoại thông minh, máy tính, điều hòa, robot, thanh toán bằng thẻ, và cả ô tô tự lái, máy bay tự lái,... đều là những sáng chế tiên tiến, thông minh của con người, đánh dấu một kỷ nguyên phát triển mới trong lịch sử nhân loại.\nSự xuất hiện của các thiết bị công nghệ tiên tiến đã thúc đẩy sự phát triển kinh tế và xã hội. Những thiết bị này giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả, mà không cần phải tốn nhiều sức lao động.\nĐiện thoại không chỉ giúp chúng ta duy trì liên lạc với nhau, mà còn hỗ trợ giải trí, kinh doanh, và thanh toán. Điện thoại thông minh đã trở thành một phần không thể thiếu trong cuộc sống hàng ngày của chúng ta. Máy tính cũng đã giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả. Hơn nữa, máy tính là công cụ giúp con người tìm kiếm thông tin hiệu quả, và không thể thiếu kết nối internet để hoàn thành nhiều nhiệm vụ. Điện thoại, máy tính và internet đều liên quan chặt chẽ và cùng nhau tạo nên cuộc sống hiện đại.\nNhững phát minh hiện đại như máy bay, ô tô tự lái, và cửa hàng tự động mà không cần người bán cũng mang lại nhiều lợi ích. Chúng đã đánh dấu một bước tiến mới trong sự phát triển của con người. Các thiết bị công nghệ tiên tiến, từ việc thay thế con người trong nhiều tác vụ, đến việc làm nhà bằng robot và hệ thống tự động trong gia đình, đều đã thay đổi cách chúng ta sống và làm việc.\nTuy nhiên, bên cạnh những lợi ích rõ ràng, không thể phủ nhận rằng còn tồn tại những hệ lụy của công nghệ. Công nghệ có thể làm cho chúng ta trở nên lười biếng hơn và đôi khi tạo ra sự ích kỷ và tình trạng căng thẳng. Chúng ta có thể thay thế công việc nhà bằng robot trong khi chỉ ngồi nghe nhạc hoặc xem phim. Khi điện thoại hoặc máy tính gặp sự cố, chúng ta có thể trở nên cáu kỉnh và tức giận.'),
('POS0012', 'PlayStation 5 Black and White version of the PS5 coming out on sale.', 4, 'https://i.postimg.cc/rpQ54QF0/ps5-item1.jpg', '2025-04-12 18:36:56', 'Chính sự phát triển của ngành công nghệ thông tin đã đánh dấu một giai đoạn phát triển mới cho con người. Cuộc sống trở nên hiện đại hơn, thông minh hơn và tiện ích hơn. Tuy nhiên, bên cạnh những tiện ích mà công nghệ mang lại, cũng tồn tại những tác động tiêu cực đối với cuộc sống của chúng ta. Vậy công nghệ ảnh hưởng thế nào đến cuộc sống con người? Hãy cùng chúng tôi khám phá điều này thông qua bài viết dưới đây.\nSự xuất hiện của khoa học công nghệ cùng với những phát minh khoa học tiên tiến đã hoàn toàn thay đổi bản chất cuộc sống của con người. Điện thoại thông minh, máy tính, điều hòa, robot, thanh toán bằng thẻ, và cả ô tô tự lái, máy bay tự lái,... đều là những sáng chế tiên tiến, thông minh của con người, đánh dấu một kỷ nguyên phát triển mới trong lịch sử nhân loại.\nSự xuất hiện của các thiết bị công nghệ tiên tiến đã thúc đẩy sự phát triển kinh tế và xã hội. Những thiết bị này giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả, mà không cần phải tốn nhiều sức lao động.\nĐiện thoại không chỉ giúp chúng ta duy trì liên lạc với nhau, mà còn hỗ trợ giải trí, kinh doanh, và thanh toán. Điện thoại thông minh đã trở thành một phần không thể thiếu trong cuộc sống hàng ngày của chúng ta. Máy tính cũng đã giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả. Hơn nữa, máy tính là công cụ giúp con người tìm kiếm thông tin hiệu quả, và không thể thiếu kết nối internet để hoàn thành nhiều nhiệm vụ. Điện thoại, máy tính và internet đều liên quan chặt chẽ và cùng nhau tạo nên cuộc sống hiện đại.\nNhững phát minh hiện đại như máy bay, ô tô tự lái, và cửa hàng tự động mà không cần người bán cũng mang lại nhiều lợi ích. Chúng đã đánh dấu một bước tiến mới trong sự phát triển của con người. Các thiết bị công nghệ tiên tiến, từ việc thay thế con người trong nhiều tác vụ, đến việc làm nhà bằng robot và hệ thống tự động trong gia đình, đều đã thay đổi cách chúng ta sống và làm việc.\nTuy nhiên, bên cạnh những lợi ích rõ ràng, không thể phủ nhận rằng còn tồn tại những hệ lụy của công nghệ. Công nghệ có thể làm cho chúng ta trở nên lười biếng hơn và đôi khi tạo ra sự ích kỷ và tình trạng căng thẳng. Chúng ta có thể thay thế công việc nhà bằng robot trong khi chỉ ngồi nghe nhạc hoặc xem phim. Khi điện thoại hoặc máy tính gặp sự cố, chúng ta có thể trở nên cáu kỉnh và tức giận.'),
('POS0013', 'PlayStation 5 Black and White version of the PS5 coming out on sale.', 4, 'https://i.postimg.cc/8C1hsqDg/ps5-item2.webp', '2025-04-12 18:36:56', 'Chính sự phát triển của ngành công nghệ thông tin đã đánh dấu một giai đoạn phát triển mới cho con người. Cuộc sống trở nên hiện đại hơn, thông minh hơn và tiện ích hơn. Tuy nhiên, bên cạnh những tiện ích mà công nghệ mang lại, cũng tồn tại những tác động tiêu cực đối với cuộc sống của chúng ta. Vậy công nghệ ảnh hưởng thế nào đến cuộc sống con người? Hãy cùng chúng tôi khám phá điều này thông qua bài viết dưới đây.\nSự xuất hiện của khoa học công nghệ cùng với những phát minh khoa học tiên tiến đã hoàn toàn thay đổi bản chất cuộc sống của con người. Điện thoại thông minh, máy tính, điều hòa, robot, thanh toán bằng thẻ, và cả ô tô tự lái, máy bay tự lái,... đều là những sáng chế tiên tiến, thông minh của con người, đánh dấu một kỷ nguyên phát triển mới trong lịch sử nhân loại.\nSự xuất hiện của các thiết bị công nghệ tiên tiến đã thúc đẩy sự phát triển kinh tế và xã hội. Những thiết bị này giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả, mà không cần phải tốn nhiều sức lao động.\nĐiện thoại không chỉ giúp chúng ta duy trì liên lạc với nhau, mà còn hỗ trợ giải trí, kinh doanh, và thanh toán. Điện thoại thông minh đã trở thành một phần không thể thiếu trong cuộc sống hàng ngày của chúng ta. Máy tính cũng đã giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả. Hơn nữa, máy tính là công cụ giúp con người tìm kiếm thông tin hiệu quả, và không thể thiếu kết nối internet để hoàn thành nhiều nhiệm vụ. Điện thoại, máy tính và internet đều liên quan chặt chẽ và cùng nhau tạo nên cuộc sống hiện đại.\nNhững phát minh hiện đại như máy bay, ô tô tự lái, và cửa hàng tự động mà không cần người bán cũng mang lại nhiều lợi ích. Chúng đã đánh dấu một bước tiến mới trong sự phát triển của con người. Các thiết bị công nghệ tiên tiến, từ việc thay thế con người trong nhiều tác vụ, đến việc làm nhà bằng robot và hệ thống tự động trong gia đình, đều đã thay đổi cách chúng ta sống và làm việc.\nTuy nhiên, bên cạnh những lợi ích rõ ràng, không thể phủ nhận rằng còn tồn tại những hệ lụy của công nghệ. Công nghệ có thể làm cho chúng ta trở nên lười biếng hơn và đôi khi tạo ra sự ích kỷ và tình trạng căng thẳng. Chúng ta có thể thay thế công việc nhà bằng robot trong khi chỉ ngồi nghe nhạc hoặc xem phim. Khi điện thoại hoặc máy tính gặp sự cố, chúng ta có thể trở nên cáu kỉnh và tức giận.'),
('POS0014', 'PlayStation 5 Black and White version of the PS5 coming out on sale.', 4.6, 'https://i.postimg.cc/rpQ54QF0/ps5-item1.jpg', '2025-04-12 18:36:56', 'Chính sự phát triển của ngành công nghệ thông tin đã đánh dấu một giai đoạn phát triển mới cho con người. Cuộc sống trở nên hiện đại hơn, thông minh hơn và tiện ích hơn. Tuy nhiên, bên cạnh những tiện ích mà công nghệ mang lại, cũng tồn tại những tác động tiêu cực đối với cuộc sống của chúng ta. Vậy công nghệ ảnh hưởng thế nào đến cuộc sống con người? Hãy cùng chúng tôi khám phá điều này thông qua bài viết dưới đây.\nSự xuất hiện của khoa học công nghệ cùng với những phát minh khoa học tiên tiến đã hoàn toàn thay đổi bản chất cuộc sống của con người. Điện thoại thông minh, máy tính, điều hòa, robot, thanh toán bằng thẻ, và cả ô tô tự lái, máy bay tự lái,... đều là những sáng chế tiên tiến, thông minh của con người, đánh dấu một kỷ nguyên phát triển mới trong lịch sử nhân loại.\nSự xuất hiện của các thiết bị công nghệ tiên tiến đã thúc đẩy sự phát triển kinh tế và xã hội. Những thiết bị này giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả, mà không cần phải tốn nhiều sức lao động.\nĐiện thoại không chỉ giúp chúng ta duy trì liên lạc với nhau, mà còn hỗ trợ giải trí, kinh doanh, và thanh toán. Điện thoại thông minh đã trở thành một phần không thể thiếu trong cuộc sống hàng ngày của chúng ta. Máy tính cũng đã giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả. Hơn nữa, máy tính là công cụ giúp con người tìm kiếm thông tin hiệu quả, và không thể thiếu kết nối internet để hoàn thành nhiều nhiệm vụ. Điện thoại, máy tính và internet đều liên quan chặt chẽ và cùng nhau tạo nên cuộc sống hiện đại.\nNhững phát minh hiện đại như máy bay, ô tô tự lái, và cửa hàng tự động mà không cần người bán cũng mang lại nhiều lợi ích. Chúng đã đánh dấu một bước tiến mới trong sự phát triển của con người. Các thiết bị công nghệ tiên tiến, từ việc thay thế con người trong nhiều tác vụ, đến việc làm nhà bằng robot và hệ thống tự động trong gia đình, đều đã thay đổi cách chúng ta sống và làm việc.\nTuy nhiên, bên cạnh những lợi ích rõ ràng, không thể phủ nhận rằng còn tồn tại những hệ lụy của công nghệ. Công nghệ có thể làm cho chúng ta trở nên lười biếng hơn và đôi khi tạo ra sự ích kỷ và tình trạng căng thẳng. Chúng ta có thể thay thế công việc nhà bằng robot trong khi chỉ ngồi nghe nhạc hoặc xem phim. Khi điện thoại hoặc máy tính gặp sự cố, chúng ta có thể trở nên cáu kỉnh và tức giận.'),
('POS0015', 'PlayStation 5 Black and White version of the PS5 coming out on sale.', 4.4, 'https://i.postimg.cc/rpQ54QF0/ps5-item1.jpg', '2025-04-12 18:36:56', 'Chính sự phát triển của ngành công nghệ thông tin đã đánh dấu một giai đoạn phát triển mới cho con người. Cuộc sống trở nên hiện đại hơn, thông minh hơn và tiện ích hơn. Tuy nhiên, bên cạnh những tiện ích mà công nghệ mang lại, cũng tồn tại những tác động tiêu cực đối với cuộc sống của chúng ta. Vậy công nghệ ảnh hưởng thế nào đến cuộc sống con người? Hãy cùng chúng tôi khám phá điều này thông qua bài viết dưới đây.\nSự xuất hiện của khoa học công nghệ cùng với những phát minh khoa học tiên tiến đã hoàn toàn thay đổi bản chất cuộc sống của con người. Điện thoại thông minh, máy tính, điều hòa, robot, thanh toán bằng thẻ, và cả ô tô tự lái, máy bay tự lái,... đều là những sáng chế tiên tiến, thông minh của con người, đánh dấu một kỷ nguyên phát triển mới trong lịch sử nhân loại.\nSự xuất hiện của các thiết bị công nghệ tiên tiến đã thúc đẩy sự phát triển kinh tế và xã hội. Những thiết bị này giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả, mà không cần phải tốn nhiều sức lao động.\nĐiện thoại không chỉ giúp chúng ta duy trì liên lạc với nhau, mà còn hỗ trợ giải trí, kinh doanh, và thanh toán. Điện thoại thông minh đã trở thành một phần không thể thiếu trong cuộc sống hàng ngày của chúng ta. Máy tính cũng đã giúp con người giải quyết công việc một cách nhanh chóng và hiệu quả. Hơn nữa, máy tính là công cụ giúp con người tìm kiếm thông tin hiệu quả, và không thể thiếu kết nối internet để hoàn thành nhiều nhiệm vụ. Điện thoại, máy tính và internet đều liên quan chặt chẽ và cùng nhau tạo nên cuộc sống hiện đại.\nNhững phát minh hiện đại như máy bay, ô tô tự lái, và cửa hàng tự động mà không cần người bán cũng mang lại nhiều lợi ích. Chúng đã đánh dấu một bước tiến mới trong sự phát triển của con người. Các thiết bị công nghệ tiên tiến, từ việc thay thế con người trong nhiều tác vụ, đến việc làm nhà bằng robot và hệ thống tự động trong gia đình, đều đã thay đổi cách chúng ta sống và làm việc.\nTuy nhiên, bên cạnh những lợi ích rõ ràng, không thể phủ nhận rằng còn tồn tại những hệ lụy của công nghệ. Công nghệ có thể làm cho chúng ta trở nên lười biếng hơn và đôi khi tạo ra sự ích kỷ và tình trạng căng thẳng. Chúng ta có thể thay thế công việc nhà bằng robot trong khi chỉ ngồi nghe nhạc hoặc xem phim. Khi điện thoại hoặc máy tính gặp sự cố, chúng ta có thể trở nên cáu kỉnh và tức giận.'),
('POS0016', 'Đăng post mới với link hình ảnh', 0, 'https://i.postimg.cc/8C1hsqDg/ps5-item2.webp', '2025-05-05 09:46:08', 'something');

--
-- Triggers `post`
--
DELIMITER $$
CREATE TRIGGER `postGenerateNewId` BEFORE INSERT ON `post` FOR EACH ROW BEGIN
    DECLARE next_id INT DEFAULT 0;
    DECLARE formatted_id VARCHAR(7);

    -- 1. Find the highest existing numeric part of COM IDs
    SELECT
        IFNULL(MAX(CAST(SUBSTRING(id, 4) AS UNSIGNED)), 0) INTO next_id
    FROM
        post
    WHERE
        id LIKE 'POS%';

    -- 2. Increment the numeric part
    SET next_id = next_id + 1;

    -- 3. Format the ID
    SET formatted_id = CONCAT('POS', LPAD(next_id, 4, '0'));

    -- 4. Assign the new ID to the 'id' column of the new row
    SET NEW.id = formatted_id;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `discount` tinyint(4) NOT NULL,
  `description` mediumtext NOT NULL,
  `star_count` int(11) NOT NULL,
  `star_rate` double NOT NULL,
  `img_src` varchar(255) NOT NULL,
  `date_posted` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `category`, `price`, `discount`, `description`, `star_count`, `star_rate`, `img_src`, `date_posted`) VALUES
(1, 'Máy cạo râu', 'Dụng cụ', 100000, 40, 'Máy cạo râu với pin lên đến 60 phút sử dụng', 0, 0, '', '2025-04-24 11:30:35'),
(2, 'Áo Nam', 'Nam', 120000, 30, 'some description', 0, 0, '/image/hom/banner/ao1.avif', '2025-04-27 19:25:02'),
(3, 'Váy Nữ', 'Nữ', 130000, 30, 'some description', 0, 0, '/image/hom/banner/v2.webp', '2025-04-27 19:25:02'),
(4, 'Áo Bé Gái', 'Trẻ em', 90000, 30, 'some description', 0, 0, '/image/hom/banner/g1.avif', '2025-04-27 19:25:02'),
(5, 'Áo Nam', 'Nam', 140000, 30, 'some description', 0, 0, '/image/hom/banner/ao3.avif', '2025-04-27 19:25:02'),
(6, 'Váy Nữ', 'Nữ', 110000, 30, 'some description', 0, 0, '/image/hom/banner/v3.webp', '2025-04-27 19:25:02'),
(7, 'Áo Bé Trai', 'Trẻ em', 80000, 30, 'some description', 0, 0, '/image/hom/banner/t1.webp', '2025-04-27 19:25:02'),
(8, 'Áo Nam', 'Nam', 150000, 30, 'some description', 0, 0, '/image/hom/banner/ao5.webp', '2025-04-27 19:25:02'),
(9, 'Giày Cao Gót', 'Nữ', 160000, 30, 'some description', 0, 0, '/image/hom/banner/n4.jpg', '2025-04-27 19:25:02'),
(10, 'Áo Nam', 'Nam', 120000, 30, 'some description', 0, 0, '/image/hom/banner/ao2.webp', '2025-04-27 19:25:02'),
(11, 'Váy Nữ', 'Nữ', 130000, 30, 'some description', 0, 0, '/image/hom/banner/v1.avif', '2025-04-27 19:25:02'),
(12, 'Áo Bé Gái', 'Trẻ em', 90000, 30, 'some description', 0, 0, '/image/hom/banner/g1.avif', '2025-04-27 19:25:02'),
(13, 'Áo Nam', 'Nam', 140000, 30, 'some description', 0, 0, '/image/hom/banner/ao4.jpg', '2025-04-27 19:25:02'),
(14, 'Áo Nữ', 'Nữ', 110000, 30, 'some description', 0, 0, '/image/hom/banner/n2.webp', '2025-04-27 19:25:02'),
(15, 'Áo Bé Trai', 'Trẻ em', 80000, 30, 'some description', 0, 0, '/image/hom/banner/t2.webp', '2025-04-27 19:25:02'),
(16, 'Áo Nam', 'Nam', 150000, 30, 'some description', 0, 0, '/image/hom/banner/ao6.jpg', '2025-04-27 19:25:02'),
(17, 'Giày Cao Gót', 'Nữ', 160000, 30, 'some description', 0, 0, '/image/hom/banner/n3.jpg', '2025-04-27 19:25:02'),
(18, 'iPhone 13', 'Điện thoại', 1000000, 30, 'some description', 0, 0, '/image/hom/banner/d1.jpg', '2025-04-27 19:25:02'),
(19, 'iPhone 14', 'Điện thoại', 1100000, 30, 'some description', 0, 0, '/image/hom/banner/d2.webp', '2025-04-27 19:25:02'),
(20, 'iPhone 15', 'Điện thoại', 1200000, 30, 'some description', 0, 0, '/image/hom/banner/d3.webp', '2025-04-27 19:25:02'),
(21, 'iPhone 12', 'Điện thoại', 900000, 30, 'some description', 0, 0, '/image/hom/banner/d4.png', '2025-04-27 19:25:02'),
(22, 'iPhone 10', 'Điện thoại', 700000, 30, 'some description', 0, 0, '/image/hom/banner/d5.webp', '2025-04-27 19:25:02'),
(23, 'MacBook Air 13-inch', 'Máy tính', 1800000, 30, 'some description', 0, 0, '/image/hom/banner/m2.webp', '2025-04-27 19:25:02'),
(24, 'MacBook Pro 16 inch M4', 'Máy tính', 2000000, 30, 'some description', 0, 0, '/image/hom/banner/m1.webp', '2025-04-27 19:25:02'),
(25, 'MacBook Air 14 inch', 'Máy tính', 1700000, 30, 'some description', 0, 0, '/image/hom/banner/m3.webp', '2025-04-27 19:25:02'),
(26, 'Laptop HP 15-FD0095WM', 'Máy tính', 1500000, 30, 'some description', 0, 0, '/image/hom/banner/m4.webp', '2025-04-27 19:25:02'),
(27, 'MacBook Pro 13 inch', 'Máy tính', 1500000, 30, 'some description', 0, 0, '/image/hom/banner/m5.webp', '2025-04-27 19:25:02'),
(28, 'Đồng Hồ Chính Hãng BABY-G BA-130-7A1', 'Đồng hồ', 1000000, 30, 'some description', 0, 0, '/image/hom/banner/h1.webp', '2025-04-27 19:25:02'),
(29, 'Đồng Hồ Nữ Chính Hãng CITIZEN Quartz EU6060-55D', 'Đồng hồ', 2000000, 30, 'some description', 0, 0, '/image/hom/banner/h2.webp', '2025-04-27 19:25:02'),
(30, 'Đồng Hồ Nam Chính Hãng CASIO G-SHOCK GA-110-1B', 'Đồng hồ', 10000000, 30, 'some description', 0, 0, '/image/hom/banner/h3.webp', '2025-04-27 19:25:02'),
(31, 'Đồng hồ Frederique Constant', 'Đồng hồ', 5000000, 30, 'some description', 0, 0, '/image/hom/banner/h4.webp', '2025-04-27 19:25:02'),
(32, 'Đồng hồ Hublot Big Bang Integral Titanium', 'Đồng hồ', 6000000, 30, 'some description', 0, 0, '/image/hom/banner/h5.webp', '2025-04-27 19:25:02'),
(33, 'Sony Alpha A7', 'Camera', 2000000, 30, 'some description', 0, 0, '/image/hom/banner/c1.webp', '2025-04-27 19:25:02'),
(34, 'Canon EOS R5', 'Camera', 3500000, 30, 'some description', 0, 0, '/image/hom/banner/c2.webp', '2025-04-27 19:25:02'),
(35, 'Nikon Z9', 'Camera', 4000000, 30, 'some description', 0, 0, '/image/hom/banner/c3.webp', '2025-04-27 19:25:02'),
(36, 'Fujifilm X-T5', 'Camera', 1800000, 30, 'some description', 0, 0, '/image/hom/banner/c4.webp', '2025-04-27 19:25:02'),
(37, 'AirPods Pro', 'Tai nghe', 250000, 30, 'some description', 0, 0, '/image/hom/banner/tai1.webp', '2025-04-27 19:25:02'),
(38, 'Sony WH-1000XM5', 'Tai nghe', 400000, 30, 'some description', 0, 0, '/image/hom/banner/tai2.webp', '2025-04-27 19:25:02'),
(39, 'Bose QuietComfort', 'Tai nghe', 350000, 30, 'some description', 0, 0, '/image/hom/banner/tai3.webp', '2025-04-27 19:25:02'),
(40, 'JBL Tune 760NC', 'Tai nghe', 180000, 30, 'some description', 0, 0, '/image/hom/banner/tai4.webp', '2025-04-27 19:25:02'),
(41, 'Máy Hút Bụi', 'Gia dụng', 300000, 30, 'some description', 0, 0, '/image/hom/banner/gd1.webp', '2025-04-27 19:25:02'),
(42, 'Nồi Chiên Không Dầu', 'Gia dụng', 250000, 30, 'some description', 0, 0, '/image/hom/banner/gd2.webp', '2025-04-27 19:25:02'),
(43, 'Máy Lọc Nước', 'Gia dụng', 400000, 30, 'some description', 0, 0, '/image/hom/banner/gd3.webp', '2025-04-27 19:25:02'),
(44, 'Máy Giặt', 'Gia dụng', 700000, 30, 'some description', 0, 0, '/image/hom/banner/gd4.webp', '2025-04-27 19:25:02'),
(45, 'Máy Giặt', 'Gia dụng', 700000, 30, 'some description', 0, 0, '/image/hom/banner/gd5.webp', '2025-04-27 19:25:02'),
(46, 'Giày chạy bộ Nike', 'Thể thao', 200000, 30, 'some description', 0, 0, '/image/hom/banner/sport1.webp', '2025-04-27 19:25:02'),
(47, 'Áo bóng đá Adidas', 'Thể thao', 80000, 30, 'some description', 0, 0, '/image/hom/banner/sport2.webp', '2025-04-27 19:25:02'),
(48, 'Vợt cầu lông Yonex', 'Thể thao', 150000, 30, 'some description', 0, 0, '/image/hom/banner/sport3.webp', '2025-04-27 19:25:02'),
(49, 'Bóng rổ Spalding', 'Thể thao', 60000, 30, 'some description', 0, 0, '/image/hom/banner/sport4.webp', '2025-04-27 19:25:02'),
(50, 'Dụng cụ tập gym', 'Thể thao', 300000, 30, 'some description', 0, 0, '/image/hom/banner/sport5.webp', '2025-04-27 19:25:02'),
(51, 'Máy đo huyết áp Omron', 'Sức khỏe', 500000, 30, 'some description', 0, 0, '/image/hom/banner/k1.webp', '2025-04-27 19:25:02'),
(52, 'Máy massage cổ Xiaomi', 'Sức khỏe', 300000, 30, 'some description', 0, 0, '/image/hom/banner/k2.webp', '2025-04-27 19:25:02'),
(53, 'Thực phẩm bổ sung Omega-3', 'Sức khỏe', 250000, 30, 'some description', 0, 0, '/image/hom/banner/k3.webp', '2025-04-27 19:25:02'),
(54, 'Vitamin tổng hợp', 'Sức khỏe', 100000, 30, 'some description', 0, 0, '/image/hom/banner/k4.webp', '2025-04-27 19:25:02'),
(55, 'Máy xông mũi họng', 'Sức khỏe', 400000, 30, 'some description', 0, 0, '/image/hom/banner/k5.webp', '2025-04-27 19:25:02'),
(56, 'Khéo ăn khéo nói sẽ có được thiên hạ', 'Học tập', 1200000, 30, 'some description', 0, 0, '/image/hom/banner/s1.webp', '2025-04-27 19:25:02'),
(57, 'Thỏ bảy màu', 'Học tập', 500000, 30, 'some description', 0, 0, '/image/hom/banner/s2.webp', '2025-04-27 19:25:02'),
(58, 'Tâm trí tối giản', 'Học tập', 80000, 30, 'some description', 0, 0, '/image/hom/banner/s3.webp', '2025-04-27 19:25:02'),
(59, 'Đắc nhân tâm', 'Học tập', 40000, 30, 'some description', 0, 0, '/image/hom/banner/s4.webp', '2025-04-27 19:25:02'),
(60, 'Kỹ luật bản thân', 'Học tập', 150000, 30, 'some description', 0, 0, '/image/hom/banner/s5.webp', '2025-04-27 19:25:02'),
(61, 'Muối biển', 'Gia vị', 10000, 30, 'some description', 0, 0, '/image/hom/banner/mu.webp', '2025-04-27 19:25:02'),
(62, 'Tiêu đen', 'Gia vị', 15000, 30, 'some description', 0, 0, '/image/hom/banner/ti.jpg', '2025-04-27 19:25:02'),
(63, 'Tương ớt', 'Gia vị', 5000, 30, 'some description', 0, 0, '/image/hom/banner/t3.webp', '2025-04-27 19:25:02'),
(64, 'Nước mắm', 'Gia vị', 20000, 30, 'some description', 0, 0, '/image/hom/banner/t4.png', '2025-04-27 19:25:02'),
(65, 'Đường', 'Gia vị', 20000, 30, 'some description', 0, 0, '/image/hom/banner/t5.jpg', '2025-04-27 19:25:02'),
(66, 'Bánh quy', 'Ăn vặt', 25000, 30, 'some description', 0, 0, '/image/hom/banner/v1.jpg', '2025-04-27 19:25:02'),
(67, 'Hạt điều', 'Ăn vặt', 40000, 30, 'some description', 0, 0, '/image/hom/banner/ha.jpg', '2025-04-27 19:25:02'),
(68, 'Kẹo dẻo', 'Ăn vặt', 15000, 30, 'some description', 0, 0, '/image/hom/banner/ke.jpg', '2025-04-27 19:25:02'),
(69, 'Bắp rang bơ', 'Ăn vặt', 30000, 30, 'some description', 0, 0, '/image/hom/banner/v4.webp', '2025-04-27 19:25:02'),
(70, 'Thịt bò', 'Đồ sống', 200000, 30, 'some description', 0, 0, '/image/hom/banner/bo.webp', '2025-04-27 19:25:02'),
(71, 'Cá hồi', 'Đồ sống', 250000, 30, 'some description', 0, 0, '/image/hom/banner/ca.jpg', '2025-04-27 19:25:02'),
(72, 'Gà nguyên con', 'Đồ sống', 150000, 30, 'some description', 0, 0, '/image/hom/banner/ga.jpg', '2025-04-27 19:25:02'),
(73, 'Tôm tươi', 'Đồ sống', 180000, 30, 'some description', 0, 0, '/image/hom/banner/d4.jpg', '2025-04-27 19:25:02'),
(74, 'Cá hộp', 'Đóng hộp', 50000, 30, 'some description', 0, 0, '/image/hom/banner/p1.jpg', '2025-04-27 19:25:02'),
(75, 'Thịt hộp', 'Đóng hộp', 70000, 30, 'some description', 0, 0, '/image/hom/banner/p2.jpg', '2025-04-27 19:25:02'),
(76, 'Sữa đặc', 'Đóng hộp', 40000, 30, 'some description', 0, 0, '/image/hom/banner/p3.webp', '2025-04-27 19:25:02'),
(77, 'Trái cây đóng hộp', 'Đóng hộp', 60000, 30, 'some description', 0, 0, '/image/hom/banner/p4.webp', '2025-04-27 19:25:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `fk_cart_customer` FOREIGN KEY (`id`) REFERENCES `customer` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
