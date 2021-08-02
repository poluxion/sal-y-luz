-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 14-07-2021 a las 15:43:14
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fundacionsalluz`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evento`
--

CREATE TABLE `evento` (
  `idEvento` int(255) NOT NULL,
  `nombreEvento` varchar(50) DEFAULT NULL,
  `fechaEventoIni` date DEFAULT NULL,
  `fechaEventoFin` date NOT NULL,
  `horaIni` time NOT NULL,
  `horaFin` time NOT NULL,
  `cupos` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `evento`
--

INSERT INTO `evento` (`idEvento`, `nombreEvento`, `fechaEventoIni`, `fechaEventoFin`, `horaIni`, `horaFin`, `cupos`) VALUES
(14, 'Autonomía económica', '2021-07-01', '2021-07-03', '13:25:00', '13:25:00', 10),
(15, 'Laboratorios de comunicaciones - CONTEMOS LA 13', '2021-07-03', '2021-07-10', '13:28:00', '13:25:00', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `Nombre` varchar(25) DEFAULT NULL,
  `Correo` varchar(30) DEFAULT NULL,
  `FechaDeNacimiento` date DEFAULT NULL,
  `Cedula` int(11) NOT NULL,
  `Contrasena` varchar(255) DEFAULT NULL,
  `Rol` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`Nombre`, `Correo`, `FechaDeNacimiento`, `Cedula`, `Contrasena`, `Rol`) VALUES
('dsa', 'asd@asd.com', '2021-05-31', 11111111, '$2a$08$EvyorDcbcKgHy77Kb7usBe.H2eVk4dcHnT.RcEjlMqTZhG9/WoI7e', 'Usuario'),
('Andres Salazar', '1234@1234.com', '2021-05-04', 11234556, '$2a$08$Zaww7HN4BXneGUg/6p.qGO9tZgYwoyG/.2cIucpyy4XMoDW4707Rq', 'Usuario'),
('asd', 'asd@asd.com', '2021-06-09', 111111111, '$2a$08$dq/jXOeOMRcBJumuGjjqiOqzmVlYYFXCYQ1psVsveVhsnRrYCNzle', 'Usuario'),
('Pablo Rua', 'pablo_rua182@hotmail.com', '2021-04-25', 1017172327, '$2a$08$xhEZBZQYDrZkjIYCnCRgD.vUywNf982hb2pfi03ymai.BkIVXxLyy', 'Admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `evento`
--
ALTER TABLE `evento`
  ADD PRIMARY KEY (`idEvento`),
  ADD KEY `idEvento` (`idEvento`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`Cedula`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `evento`
--
ALTER TABLE `evento`
  MODIFY `idEvento` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
