CREATE DATABASE IF NOT EXISTS `recetario` CHARACTER SET utf8mb4;

USE recetario;

CREATE TABLE `contacto` (
  `idcontacto` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `mensaje` varchar(180),
  PRIMARY KEY (`idcontacto`),
  UNIQUE KEY `email_UNIQUE` (`email`)
);

INSERT INTO contacto VALUES (1, "Miguel Angel Gutierrez","ing.miguel.gutierrez@gmail.com","Me gustaría agreguen una receta con pescado de rio");
INSERT INTO contacto VALUES (2, "Juan Perez","juan.perez@gmail.com","Hice la suprema maryland, me salió bastante bien!");

