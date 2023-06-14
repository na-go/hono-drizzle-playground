CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL
);

CREATE UNIQUE INDEX `nameIdx` ON `users` (`name`);
CREATE UNIQUE INDEX `emailIdx` ON `users` (`email`);