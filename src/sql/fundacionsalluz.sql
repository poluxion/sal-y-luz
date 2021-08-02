-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 02-08-2021 a las 19:45:32
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
-- Estructura de tabla para la tabla `asistencia`
--

CREATE TABLE `asistencia` (
  `idAsistencia` int(11) NOT NULL,
  `idEvento` int(11) NOT NULL,
  `cedula` int(11) NOT NULL,
  `nombreEvento` varchar(50) NOT NULL,
  `nombrePersona` varchar(100) NOT NULL,
  `asistencia` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `asistencia`
--

INSERT INTO `asistencia` (`idAsistencia`, `idEvento`, `cedula`, `nombreEvento`, `nombrePersona`, `asistencia`) VALUES
(89, 15, 11111111, 'Laboratorios de comunicaciones - CONTEMOS LA 13', 'dsa', 0),
(105, 15, 11234556, 'Laboratorios de comunicaciones - CONTEMOS LA 13', 'Andres Salazar', 1),
(124, 14, 11234556, 'Autonomía económica', 'Andres Salazar', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evento`
--

CREATE TABLE `evento` (
  `idEvento` int(255) NOT NULL,
  `nombreEvento` varchar(50) NOT NULL,
  `fechaEventoIni` date NOT NULL,
  `fechaEventoFin` date NOT NULL,
  `horaIni` time NOT NULL,
  `horaFin` time NOT NULL,
  `cupos` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `evento`
--

INSERT INTO `evento` (`idEvento`, `nombreEvento`, `fechaEventoIni`, `fechaEventoFin`, `horaIni`, `horaFin`, `cupos`) VALUES
(14, 'Autonomía económica', '2021-07-01', '2021-07-03', '13:25:00', '13:25:00', 10),
(15, 'Laboratorios de comunicaciones - CONTEMOS LA 13', '2021-07-03', '2021-07-10', '13:28:00', '13:25:00', 10),
(16, 'Red de Lideres Escolares', '2021-07-14', '2021-07-21', '10:00:00', '13:00:00', 10),
(17, 'Semillero de Impacto Social', '2021-07-14', '2021-07-21', '16:20:00', '16:20:00', 10),
(18, 'Laboratorios infantiles de Participación', '2021-07-14', '2021-07-28', '16:51:00', '16:52:00', 25),
(19, 'Festival de fiesta a la vida', '2021-09-17', '2021-10-16', '20:00:00', '19:00:00', 20),
(21, 'Escuela Virtual de Padres', '2021-07-07', '2021-07-16', '13:58:00', '14:56:00', 20),
(22, 'Escuela Virtual de Padres', '2021-07-07', '2021-07-16', '13:58:00', '14:56:00', 20),
(24, 'Autonomía económica', '2021-07-14', '2021-07-31', '14:59:00', '17:59:00', 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `Nombre` varchar(100) DEFAULT NULL,
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
('Asistente', 'asistente@asistente.com', '2021-07-21', 1234567, '$2a$08$0nv6OLpdSF3j2gC3AlWUJeLwpORAiVu8R2YFi7FWlQTrG56cJ8k4e', 'Asistente'),
('dsa', 'asd@asd.com', '2021-05-31', 11111111, '$2a$08$EvyorDcbcKgHy77Kb7usBe.H2eVk4dcHnT.RcEjlMqTZhG9/WoI7e', 'Usuario'),
('Andres Salazar', '1234@1234.com', '2021-05-04', 11234556, '$2a$08$Zaww7HN4BXneGUg/6p.qGO9tZgYwoyG/.2cIucpyy4XMoDW4707Rq', 'Usuario'),
('asd', 'asd@asd.com', '2021-06-09', 111111111, '$2a$08$dq/jXOeOMRcBJumuGjjqiOqzmVlYYFXCYQ1psVsveVhsnRrYCNzle', 'Usuario'),
('Pablo Rua', 'pablo_rua182@hotmail.com', '2021-04-25', 1017172327, '$2a$08$xhEZBZQYDrZkjIYCnCRgD.vUywNf982hb2pfi03ymai.BkIVXxLyy', 'Admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asistencia`
--
ALTER TABLE `asistencia`
  ADD PRIMARY KEY (`idAsistencia`),
  ADD KEY `cedula` (`cedula`) USING BTREE,
  ADD KEY `idEvento` (`idEvento`) USING BTREE;

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
-- AUTO_INCREMENT de la tabla `asistencia`
--
ALTER TABLE `asistencia`
  MODIFY `idAsistencia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=131;

--
-- AUTO_INCREMENT de la tabla `evento`
--
ALTER TABLE `evento`
  MODIFY `idEvento` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
