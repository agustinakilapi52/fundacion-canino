-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-03-2021 a las 23:47:27
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fundacion_sos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `canino`
--

CREATE TABLE `canino` (
  `id_canino` int(10) NOT NULL,
  `nombre` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `fecha_nacimiento` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `edad` int(3) NOT NULL,
  `sexo` tinyint(1) NOT NULL,
  `tamanio` tinyint(4) NOT NULL,
  `castrado` tinyint(1) NOT NULL,
  `desparasitado` tinyint(1) NOT NULL,
  `vacunado` tinyint(4) NOT NULL,
  `descripcion` text COLLATE utf8_spanish_ci NOT NULL,
  `estado_adopcion` tinyint(1) NOT NULL,
  `fecha_adopcion` date DEFAULT NULL,
  `imagen_portada` text COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `canino`
--

INSERT INTO `canino` (`id_canino`, `nombre`, `fecha_nacimiento`, `edad`, `sexo`, `tamanio`, `castrado`, `desparasitado`, `vacunado`, `descripcion`, `estado_adopcion`, `fecha_adopcion`, `imagen_portada`) VALUES
(14, 'Osito', '2001-09-01', 19, 1, 2, 1, 1, 1, 'Es muy tranquilo y cómodo Se lleva re bien con otros animales.', 0, '0000-00-00', 'http://res.cloudinary.com/dylbe29a5/image/upload/v1616024981/kb0to3xdlaox9cb5qtrv.jpg'),
(29, 'Pipi', '2001-12-12', 8, 1, 2, 1, 1, 1, 'Es un muy buen compañero y necesita un hogar con urgencia.', 0, '0000-00-00', 'http://res.cloudinary.com/dylbe29a5/image/upload/v1616024506/dgry61vgy9bk5oyvrmad.jpg'),
(38, 'Langosta', '20/05/2020', 2, 0, 1, 1, 1, 1, ' Es super mimosa, siempre lista para que la hagas upa. Le faltan algunos dientitos pero le gusta sonreír.', 0, '0000-00-00', 'http://res.cloudinary.com/dylbe29a5/image/upload/v1616025738/au0vt9ggibvh5yboxdid.jpg'),
(39, 'Lagarto Electrico', '05/11/2019\n\n\n\n\n\n\n\n\n\n\n\n', 3, 1, 2, 1, 1, 1, 'Le gusta la tranquilidad y tomar sol por las tardes. Es un galgo atigrado un poco miedoso pero sociable.', 0, '0000-00-00', 'http://res.cloudinary.com/dylbe29a5/image/upload/v1616026144/z5aeqxt3we8jz9lg6ueu.jpg'),
(40, 'Dorothea', '29/04/2013', 8, 0, 2, 0, 1, 1, 'Es muy cariñosa, le gusta jugar con niños', 0, '0000-00-00', 'http://res.cloudinary.com/dylbe29a5/image/upload/v1616026986/cgxjwqunj2f6rso6tfqz.jpg'),
(41, 'Cabezón', '20/11/2018', 3, 1, 1, 0, 1, 1, 'Es muy cariñoso. Necesita una casa con paredones altos y poco movimiento de entradas y salidas', 0, '0000-00-00', 'http://res.cloudinary.com/dylbe29a5/image/upload/v1616037490/frf6qvnjuiriecqtzavu.jpg'),
(42, 'Guerrero', '13/02/2012', 9, 1, 2, 1, 1, 1, 'Super cariñoso y guardian Vivió toda su vida en la isla, ya es hora que disfrute el amor de una familia, el césped y los paseos.', 0, '0000-00-00', 'http://res.cloudinary.com/dylbe29a5/image/upload/v1616091721/v27kf3abgxkvexx9n2fw.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` double NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_categoria_tienda` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(400) NOT NULL,
  `imagen` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id_categoria_tienda`, `nombre`, `descripcion`, `imagen`) VALUES
(1, 'Mujeres', 'Ropar para dama', 'women.jpg'),
(2, 'Hombres', 'Ropa para hombre', 'men.jpg'),
(3, 'Niños', 'Ropa para niños', 'children.jpg'),
(4, 'Accesorios', 'De todo', 'accesorios.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria_donacion`
--

CREATE TABLE `categoria_donacion` (
  `id_categoria_donacion` int(11) NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `categoria_donacion`
--

INSERT INTO `categoria_donacion` (`id_categoria_donacion`, `descripcion`) VALUES
(15, 'YES');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `donaciones`
--

CREATE TABLE `donaciones` (
  `id_donaciones` int(11) NOT NULL,
  `descripcion` text COLLATE utf8_spanish_ci NOT NULL,
  `contacto` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `direccion` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `categoria_donaciones` int(11) NOT NULL,
  `imagen_portada` text COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `donaciones`
--

INSERT INTO `donaciones` (`id_donaciones`, `descripcion`, `contacto`, `direccion`, `categoria_donaciones`, `imagen_portada`) VALUES
(15, 'asd', '123 123-1234', 'asd123', 15, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evento`
--

CREATE TABLE `evento` (
  `id_evento` int(11) NOT NULL,
  `titulo` text COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` text COLLATE utf8_spanish_ci NOT NULL,
  `contacto` text COLLATE utf8_spanish_ci NOT NULL,
  `ubicacion` text COLLATE utf8_spanish_ci NOT NULL,
  `fecha_hora` datetime NOT NULL,
  `imagen_portada` text COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `evento`
--

INSERT INTO `evento` (`id_evento`, `titulo`, `descripcion`, `contacto`, `ubicacion`, `fecha_hora`, `imagen_portada`) VALUES
(9, 'Colecta Cipolletti', 'En #rionegro ya se quemaron mas de 1400 hectáreas y el fuego llegó a #chubut #elmaiten \nLa situación es devastadora  para el medio ambiente, la vida humana y animal\nLa comarca nos necesita.\nMas de 200 familias evacuadas y miles de animales sufriendo.\nYa hay perdidas irreparables, ayudemos con materiales, alimentos medicacion, etc. Contactenos para realizar la donación', '2995659454', 'Puntos de recolección Nqn y Cipolletti.', '0000-00-00 00:00:00', 'http://res.cloudinary.com/dylbe29a5/image/upload/v1616092436/ngb6tzlnkd09aoixvdbq.jpg'),
(15, 'Cruzada Solidaria', 'DARÍO RÍOS Y GIAN PIERRE AGUILAR \nRECORRERAN 600 KM DE NUESTTA Ruta 40  POR LOS JORDANES.\nEl 20 de Febrero corremos 600 km por la *Salud de TODOS*\nLa salud humana, animal y ambiental  son *UNA SOLA SALUD*\nEsta cruzada es en beneficio de los 300s perros que viven encerrados en la perrera municipal de Cipolletti.\nJunto a la agrupacion voluntaria Guardería canina de la isla Jordan y la fundación s.o.s. animal estaremos recaudando donaciones  a nuestro paso por tu ciudad.', '2996204370', 'Cipolletti - El bolson', '0000-00-00 00:00:00', 'http://res.cloudinary.com/dylbe29a5/image/upload/v1616093087/khp2gakmdbf0g0xuxyuo.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formulario_adopcion`
--

CREATE TABLE `formulario_adopcion` (
  `id_formulario` int(10) NOT NULL,
  `nombre` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `apellido` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `direccion` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `dni` int(8) NOT NULL,
  `telefono` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `correo` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `canino` int(10) NOT NULL,
  `id_localidad` int(10) NOT NULL,
  `requisito` int(11) NOT NULL,
  `provincia_id` tinyint(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `formulario_adopcion`
--

INSERT INTO `formulario_adopcion` (`id_formulario`, `nombre`, `apellido`, `direccion`, `dni`, `telefono`, `correo`, `canino`, `id_localidad`, `requisito`, `provincia_id`) VALUES
(20, 'Laura', 'Kilapi', 'Pastor bowdler y Ecuador', 31240549, '+542996726785', 'agus@gmail.com', 14, 20, 8, 7),
(21, 'Noelia celeste', 'Viecens', 'Uruguay 495', 43891187, '(299) 672-6785', 'noeliaviecens@gmail.com', 29, 3, 8, 4),
(22, 'santiago', 'Viecens', 'Uruguay 495', 65667809, '(299) 672-6785', 'fgjh@gmail.com', 14, 3, 8, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `galeria`
--

CREATE TABLE `galeria` (
  `id_galeria` int(11) NOT NULL,
  `titulo` varchar(200) NOT NULL,
  `descripcion` text NOT NULL,
  `imagen_url` varchar(200) NOT NULL,
  `public_id` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes_canino`
--

CREATE TABLE `imagenes_canino` (
  `id_ic` int(11) NOT NULL,
  `id_canino` int(11) NOT NULL,
  `imagen_url` text NOT NULL,
  `public_id` varchar(255) NOT NULL,
  `portada` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `imagenes_canino`
--

INSERT INTO `imagenes_canino` (`id_ic`, `id_canino`, `imagen_url`, `public_id`, `portada`) VALUES
(2, 3, 'http://res.cloudinary.com/dylbe29a5/image/upload/v1604091467/hyr1z2sj9nzp86eeswzt.jpg', 'hyr1z2sj9nzp86eeswzt', 0),
(3, 3, 'http://res.cloudinary.com/dylbe29a5/image/upload/v1604091470/noxwrcpmt56cl48l23fj.jpg', 'noxwrcpmt56cl48l23fj', 0),
(26, 29, 'http://res.cloudinary.com/dylbe29a5/image/upload/v1616024506/dgry61vgy9bk5oyvrmad.jpg', 'dgry61vgy9bk5oyvrmad', 1),
(27, 14, 'http://res.cloudinary.com/dylbe29a5/image/upload/v1616024981/kb0to3xdlaox9cb5qtrv.jpg', 'kb0to3xdlaox9cb5qtrv', 1),
(29, 38, 'http://res.cloudinary.com/dylbe29a5/image/upload/v1616025738/au0vt9ggibvh5yboxdid.jpg', 'au0vt9ggibvh5yboxdid', 1),
(30, 39, 'http://res.cloudinary.com/dylbe29a5/image/upload/v1616026144/z5aeqxt3we8jz9lg6ueu.jpg', 'z5aeqxt3we8jz9lg6ueu', 1),
(31, 40, 'http://res.cloudinary.com/dylbe29a5/image/upload/v1616026986/cgxjwqunj2f6rso6tfqz.jpg', 'cgxjwqunj2f6rso6tfqz', 1),
(32, 41, 'http://res.cloudinary.com/dylbe29a5/image/upload/v1616037490/frf6qvnjuiriecqtzavu.jpg', 'frf6qvnjuiriecqtzavu', 1),
(33, 42, 'http://res.cloudinary.com/dylbe29a5/image/upload/v1616091721/v27kf3abgxkvexx9n2fw.jpg', 'v27kf3abgxkvexx9n2fw', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes_donaciones`
--

CREATE TABLE `imagenes_donaciones` (
  `id_id` int(11) NOT NULL,
  `id_donaciones` int(11) NOT NULL,
  `imagen_url` text NOT NULL,
  `public_id` varchar(255) NOT NULL,
  `portada` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `imagenes_donaciones`
--

INSERT INTO `imagenes_donaciones` (`id_id`, `id_donaciones`, `imagen_url`, `public_id`, `portada`) VALUES
(1, 3, 'http://res.cloudinary.com/dylbe29a5/image/upload/v1604104780/pf9s7bqlxfrennucwc1v.png', 'pf9s7bqlxfrennucwc1v', 0),
(2, 3, 'http://res.cloudinary.com/dylbe29a5/image/upload/v1604104784/tkgwul5ubwpr4igmi13k.png', 'tkgwul5ubwpr4igmi13k', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes_evento`
--

CREATE TABLE `imagenes_evento` (
  `id_ie` int(11) NOT NULL,
  `id_evento` int(11) NOT NULL,
  `imagen_url` text NOT NULL,
  `public_id` varchar(255) NOT NULL,
  `portada` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `imagenes_evento`
--

INSERT INTO `imagenes_evento` (`id_ie`, `id_evento`, `imagen_url`, `public_id`, `portada`) VALUES
(13, 9, 'http://res.cloudinary.com/dylbe29a5/image/upload/v1616092436/ngb6tzlnkd09aoixvdbq.jpg', 'ngb6tzlnkd09aoixvdbq', 0),
(20, 15, 'http://res.cloudinary.com/dylbe29a5/image/upload/v1616093087/khp2gakmdbf0g0xuxyuo.jpg', 'khp2gakmdbf0g0xuxyuo', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `localidades`
--

CREATE TABLE `localidades` (
  `id_localidad` int(10) NOT NULL,
  `provincia_id` tinyint(3) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `codigopostal` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `localidades`
--

INSERT INTO `localidades` (`id_localidad`, `provincia_id`, `nombre`, `codigopostal`) VALUES
(3, 4, 'Carlos Paz', 5152),
(20, 7, 'Cipolletti', 8324);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(300) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` double NOT NULL,
  `imagen` varchar(200) NOT NULL,
  `inventario` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `talla` varchar(100) NOT NULL,
  `color` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `imagen`, `inventario`, `id_categoria`, `talla`, `color`) VALUES
(1, 'Tank Top', 'Finding perfect t-shirt', 60, 'cloth_1.jpg', 30, 3, 'XL', 'white'),
(2, 'Corater', 'Finding perfect products', 20, 'shoe_1.jpg', 3, 2, '25.5', 'blue');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_venta`
--

CREATE TABLE `productos_venta` (
  `id_productos_venta` int(255) NOT NULL,
  `id_ventas` int(255) NOT NULL,
  `id_producto` int(255) NOT NULL,
  `cantidad` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `precio` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `subtotal` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincia`
--

CREATE TABLE `provincia` (
  `id` tinyint(3) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `provincia`
--

INSERT INTO `provincia` (`id`, `nombre`) VALUES
(4, 'Cordoba'),
(6, 'Chaco'),
(7, 'Río Negro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `requisito`
--

CREATE TABLE `requisito` (
  `id_requisito` int(10) NOT NULL,
  `pregunta` text COLLATE utf8_spanish_ci NOT NULL,
  `respuesta` tinyint(4) NOT NULL,
  `observacion` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `requisito`
--

INSERT INTO `requisito` (`id_requisito`, `pregunta`, `respuesta`, `observacion`) VALUES
(8, 'Hola?', 1, 'asd');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `username` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(45) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id_ventas` int(255) DEFAULT NULL,
  `id_usuario` int(255) NOT NULL,
  `fecha` date NOT NULL,
  `total` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `canino`
--
ALTER TABLE `canino`
  ADD PRIMARY KEY (`id_canino`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_categoria_tienda`);

--
-- Indices de la tabla `categoria_donacion`
--
ALTER TABLE `categoria_donacion`
  ADD PRIMARY KEY (`id_categoria_donacion`);

--
-- Indices de la tabla `donaciones`
--
ALTER TABLE `donaciones`
  ADD PRIMARY KEY (`id_donaciones`),
  ADD KEY `categoria_donaciones` (`categoria_donaciones`);

--
-- Indices de la tabla `evento`
--
ALTER TABLE `evento`
  ADD PRIMARY KEY (`id_evento`);

--
-- Indices de la tabla `formulario_adopcion`
--
ALTER TABLE `formulario_adopcion`
  ADD PRIMARY KEY (`id_formulario`),
  ADD KEY `canino` (`canino`),
  ADD KEY `id_localidad` (`id_localidad`),
  ADD KEY `requisito` (`requisito`),
  ADD KEY `provincia_id` (`provincia_id`);

--
-- Indices de la tabla `galeria`
--
ALTER TABLE `galeria`
  ADD PRIMARY KEY (`id_galeria`);

--
-- Indices de la tabla `imagenes_canino`
--
ALTER TABLE `imagenes_canino`
  ADD PRIMARY KEY (`id_ic`);

--
-- Indices de la tabla `imagenes_donaciones`
--
ALTER TABLE `imagenes_donaciones`
  ADD PRIMARY KEY (`id_id`);

--
-- Indices de la tabla `imagenes_evento`
--
ALTER TABLE `imagenes_evento`
  ADD PRIMARY KEY (`id_ie`);

--
-- Indices de la tabla `localidades`
--
ALTER TABLE `localidades`
  ADD PRIMARY KEY (`id_localidad`),
  ADD KEY `provincia_id` (`provincia_id`);

--
-- Indices de la tabla `productos_venta`
--
ALTER TABLE `productos_venta`
  ADD PRIMARY KEY (`id_productos_venta`);

--
-- Indices de la tabla `provincia`
--
ALTER TABLE `provincia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `requisito`
--
ALTER TABLE `requisito`
  ADD PRIMARY KEY (`id_requisito`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `canino`
--
ALTER TABLE `canino`
  MODIFY `id_canino` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_categoria_tienda` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `categoria_donacion`
--
ALTER TABLE `categoria_donacion`
  MODIFY `id_categoria_donacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `donaciones`
--
ALTER TABLE `donaciones`
  MODIFY `id_donaciones` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `evento`
--
ALTER TABLE `evento`
  MODIFY `id_evento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `formulario_adopcion`
--
ALTER TABLE `formulario_adopcion`
  MODIFY `id_formulario` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `galeria`
--
ALTER TABLE `galeria`
  MODIFY `id_galeria` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `imagenes_canino`
--
ALTER TABLE `imagenes_canino`
  MODIFY `id_ic` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `imagenes_donaciones`
--
ALTER TABLE `imagenes_donaciones`
  MODIFY `id_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `imagenes_evento`
--
ALTER TABLE `imagenes_evento`
  MODIFY `id_ie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `localidades`
--
ALTER TABLE `localidades`
  MODIFY `id_localidad` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `productos_venta`
--
ALTER TABLE `productos_venta`
  MODIFY `id_productos_venta` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `provincia`
--
ALTER TABLE `provincia`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `requisito`
--
ALTER TABLE `requisito`
  MODIFY `id_requisito` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `donaciones`
--
ALTER TABLE `donaciones`
  ADD CONSTRAINT `donaciones_ibfk_1` FOREIGN KEY (`categoria_donaciones`) REFERENCES `categoria_donacion` (`id_categoria_donacion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `formulario_adopcion`
--
ALTER TABLE `formulario_adopcion`
  ADD CONSTRAINT `fk_fl` FOREIGN KEY (`id_localidad`) REFERENCES `localidades` (`id_localidad`) ON UPDATE CASCADE,
  ADD CONSTRAINT `formulario_adopcion_ibfk_1` FOREIGN KEY (`canino`) REFERENCES `canino` (`id_canino`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `formulario_adopcion_ibfk_2` FOREIGN KEY (`requisito`) REFERENCES `requisito` (`id_requisito`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `localidades`
--
ALTER TABLE `localidades`
  ADD CONSTRAINT `localidades_ibfk_1` FOREIGN KEY (`provincia_id`) REFERENCES `provincia` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
