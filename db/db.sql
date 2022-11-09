CREATE TABLE usuarios(
	id BIGSERIAL PRIMARY KEY, 
	email VARCHAR(255) NOT NULL UNIQUE,
	nombre VARCHAR(255) NOT NULL,
	apellido VARCHAR(255) NOT NULL,
	telefono VARCHAR(40) NOT NULL UNIQUE,
	foto VARCHAR(255) NULL,
	password VARCHAR(255) NOT NULL,
	disponible BOOLEAN NULL,
	session_token VARCHAR(255) NULL,
	created_at TIMESTAMP(0) NOT NULL,
	apdate_at TIMESTAMP(0) NOT NULL
);



INSERT INTO usuario(
	email,
	nombre,
	apellido,
	telefono,
	password,
	created_at,
	update_at
)VALUES(
	'juliogonzales@gmail.com',
	'julio',
	'gonzales',
	'78097156',
	'12345678',
	'2022-09-28',
	'2022-09-28'
)



INSERT INTO public.tanques(
	 codigo, combustible, descripcion, capacidad_max, cantidad_disponible, 
	cantidad_min, created_at, apdate_at )
	VALUES ('A0002', 'diesel','combustible', 4000, 2000, 1000,
			'2022-09-28','2022-09-28');