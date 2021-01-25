-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-01-2021 a las 19:07:37
-- Versión del servidor: 10.4.16-MariaDB
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tec_store`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `active` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `category_offer` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `items`
--

CREATE TABLE `items` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `unit_price` int(10) UNSIGNED NOT NULL,
  `quantity` int(10) UNSIGNED NOT NULL,
  `subtotal` int(10) UNSIGNED NOT NULL,
  `image` varchar(50) NOT NULL,
  `order_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id` int(10) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `total` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `order_shipment`
--

CREATE TABLE `order_shipment` (
  `id` int(10) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED NOT NULL,
  `shipment_id` int(10) UNSIGNED NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` int(10) UNSIGNED NOT NULL,
  `discount` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `description` varchar(255) NOT NULL,
  `code` varchar(50) NOT NULL,
  `image` varchar(50) DEFAULT NULL,
  `stock` int(10) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `discount`, `description`, `code`, `image`, `stock`, `category_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'APPLE WATCH SERIE 3', 44000, 12, '\"El Apple Watch es, en esencia, un dispositivo preparado para recibir notificaciones y contestar bien dictando la respuesta, bien usando scribble, la escritura letra a letra dibujada del Apple Watch o con alguna de las contestaciones predeterminadas.\",', '0001', 'productoD1.jpg', 3, NULL, '2021-01-22 04:16:56', '2021-01-22 04:16:56', NULL),
(2, 'NOTEBOOK LENOVO 15.6', 129000, 8, 'Ideal para impulsar tu empresa\\r\\n- Procesador, memoria y almacenamiento mejorados\\r\\n- Tarjeta gráfica discreta hasta AMD Radeon RX 640\\r\\n- Pantalla FHD de 15.6” hasta IPS, antirreflejos y 250 nits\\r\\n- Altavoces y sonido de vanguardia\\r\\n- Funciones de', '0002', 'productoD2.jpg', 4, NULL, '2021-01-23 00:43:00', '2021-01-23 00:43:00', NULL),
(3, 'Monitor Viewsonic 32\\\" 4K', 87000, 4, 'VX3276-4K-mhd - Pantalla de 32 \\\", panel MVA, resolución 3840 x 2160\\r\\nEl ViewSonic® VX3276-4K-mhd es un elegante monitor 4K UHD de 32 ”(31.5\\\" visible) con un estilo moderno y minimalista perfecto para uso doméstico. Con tecnología de panel SuperClear® ', '0003', 'productoD3.jpg', 7, NULL, '2021-01-23 14:54:24', '2021-01-23 14:54:24', NULL),
(4, 'Webcam Logitech Meetup', 29000, 10, 'MeetUp + Micrófono de expansión Logitech\\r\\nCámara para conferencias todo en uno con lente ultra gran angular para salas pequeñas.\\r\\nDIMENSIONES\\r\\nUnidad principal	\\r\\nAltura x Ancho x Profundidad\\r\\n104 mm x 400 mm x 85 mm\\r\\nPeso 1,04 kg\\r\\nRemoto\\r\\n', '0004', 'productoD4.jpg', 5, NULL, '2021-01-23 14:57:14', '2021-01-23 14:57:14', NULL),
(5, 'Auriculares Inalambricos Logitech', 26000, 12, 'JUEGA A TU MANERA\\r\\nPor fin, unos audífonos que pueden ser tan expresivos como tú. Los audífonos G733 son inalámbricos y se diseñaron pensando en el confort. Y están equipados con todo el sonido envolvente, los filtros de voz y la iluminación avanzada qu', '0005', 'productoD5.jpg', 10, NULL, '2021-01-23 14:59:45', '2021-01-23 14:59:45', NULL),
(6, 'Mouse Glorious Model D', 9000, 5, 'TAMAÑO Y AMPLIFICACIÓN ESTILO Ratón ambidiestro ultraligero para juegos ideal para manos . Construido para velocidad, control y comodidad.\\r\\nCABLE ULTRA FLEXIBLE Nuestro cable trenzado ascendido es tan ligero que produce una sensación inalámbrica sin arr', '0006', 'productoD6.jpg', 15, NULL, '2021-01-23 15:00:59', '2021-01-23 15:00:59', NULL),
(7, 'Play Station 5', 95000, 0, 'Experimenta una velocidad sorprendente con una SSD de velocidad ultrarrápida, una inmersión más profunda con soporte para respuesta háptica, gatillos adaptativos y audio 3D, además de una generación completamente nueva de juegos de PlayStation.\\r\\nLa PS5 ', '0007', 'productoD7.jpg', 2, NULL, '2021-01-23 15:03:41', '2021-01-23 15:03:41', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shipments`
--

CREATE TABLE `shipments` (
  `id` int(10) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `typeusers`
--

CREATE TABLE `typeusers` (
  `id` int(10) UNSIGNED NOT NULL,
  `type` int(10) UNSIGNED NOT NULL,
  `description` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `typeusers`
--

INSERT INTO `typeusers` (`id`, `type`, `description`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 10, 'Coustomer', '2021-01-24 15:05:54', '2021-01-24 15:05:54', NULL),
(2, 50, 'Admin', '2021-01-24 15:05:54', '2021-01-24 15:05:54', NULL),
(3, 100, 'Superadmin', '2021-01-24 15:06:52', '2021-01-24 15:06:52', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `dni` int(10) UNSIGNED NOT NULL,
  `email` varchar(50) NOT NULL,
  `sex` varchar(50) DEFAULT NULL,
  `image` varchar(50) DEFAULT NULL,
  `terms` int(11) DEFAULT NULL,
  `typeuser_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `dni`, `email`, `sex`, `image`, `terms`, `typeuser_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'asdfa', '$2b$10$SwfBcTJraljE64QTd1FZkOa5FxZ9fvaklfTm9NB2G3qYVSFnGbWYu', 12345678, '123@123123123.com', NULL, 'imagen-1610511453762.jpg', NULL, NULL, '2021-01-13 04:17:33', '2021-01-13 04:17:33', NULL),
(2, 'asdfa', '$2b$10$5KhNQOLiw2atb9VuZLBoEuyokyacrVVtU50DyreH4GCvtBE.f5G26', 123123, '123@123123.com', NULL, 'imagen-1610511617025.jpg', NULL, NULL, '2021-01-13 04:20:20', '2021-01-13 04:20:20', NULL),
(3, 'felix', '$2b$10$pC5jZW2y.O3mtGUcTXujqOo/HQfiBGzZNHS5vPOPVvIgzxABOmmjy', 12345678, 'felix@felix.com', NULL, 'imagen-1611099414790.jpg', NULL, NULL, '2021-01-19 23:36:57', '2021-01-19 23:36:57', NULL),
(4, 'felix', '$2b$10$no7XJjqG8pMYbN467TjxgOLZkAgdNuuIf6MEY8mt24pQhiHGX.Wt6', 12345678, 'jos@jos.com', NULL, 'imagen-1611358506349.jpg', NULL, NULL, '2021-01-22 23:35:06', '2021-01-22 23:35:06', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `order_shipment`
--
ALTER TABLE `order_shipment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `shipment_id` (`shipment_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indices de la tabla `shipments`
--
ALTER TABLE `shipments`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `typeusers`
--
ALTER TABLE `typeusers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `typeuser_id` (`typeuser_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `items`
--
ALTER TABLE `items`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `order_shipment`
--
ALTER TABLE `order_shipment`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `shipments`
--
ALTER TABLE `shipments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `typeusers`
--
ALTER TABLE `typeusers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `items_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `order_shipment`
--
ALTER TABLE `order_shipment`
  ADD CONSTRAINT `order_shipment_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `order_shipment_ibfk_2` FOREIGN KEY (`shipment_id`) REFERENCES `shipments` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`typeuser_id`) REFERENCES `typeusers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
