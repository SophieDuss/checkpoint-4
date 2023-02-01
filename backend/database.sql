DROP TABLE IF EXISTS `menu`;
DROP TABLE IF EXISTS `burger`;
DROP TABLE IF EXISTS `side`;
DROP TABLE IF EXISTS `desert`;
DROP TABLE IF EXISTS `drink`;


CREATE TABLE burger (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
);

CREATE TABLE side (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
);

CREATE TABLE desert (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
);

CREATE TABLE drink (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
);

CREATE TABLE menu (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
   `burger_id` INT NOT NULL,
    FOREIGN KEY (burger_id) REFERENCES burger(id),
     `side_id` INT NOT NULL,
    FOREIGN KEY (side_id) REFERENCES side(id),
     `desert_id` INT NULL,
    FOREIGN KEY (desert_id) REFERENCES desert(id),
     `drink_id` INT NOT NULL,
    FOREIGN KEY (drink_id) REFERENCES drink(id)
);

INSERT INTO `burger` (`name`, `image`) VALUES ('bigmac', 'https://www.radiofrance.fr/s3/cruiser-production/2020/03/326b8796-2381-45b4-be6e-a1daced4fc87/860_mcdo-core-logo_page_1-1536.webp'), ('cheeseburger', 'https://www.shutterstock.com/image-vector/hamburger-fast-food-icon-flat-600w-733580935.jpg'), ('nuggest', 'https://i.pinimg.com/originals/ba/ff/48/baff48ac2415630870641fedc7f6e991.png');

INSERT INTO `side` (`name`, `image`) VALUES ("french fries", "https://img.icons8.com/color/480/mcdonalds-french-fries.png"), ("potatoes", "http://mcdorivedroite.com/wp-content/uploads/2017/02/layout_icon-43.png");

INSERT INTO `desert` (`name`, `image`) VALUES ("mc flurry", "https://ih1.redbubble.net/image.1441004862.5667/st,small,507x507-pad,600x600,f8f8f8.jpg"), ("sunday", "https://i.pinimg.com/originals/53/5e/cf/535ecf483ae7c2811354ddbd3e03a245.jpg"), ("cookie", "https://previews.123rf.com/images/rusnickel/rusnickel1703/rusnickel170300022/74901238-g%C3%A2teaux-avec-des-p%C3%A9pites-de-chocolat-ic%C3%B4ne-de-cookie-choco-illustration-vectorielle.jpg");

INSERT INTO `drink` (`name`, `image`) VALUES ("coca", "https://image.shutterstock.com/image-vector/red-cola-cup-icon-vector-260nw-295283912.jpg"), ("sprite", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoeG2XSDiOyoFZPeNClVGLo9y-7cccqXKO6w&usqp=CAU");

INSERT INTO `menu` (`name`, `image`, `burger_id`, `side_id`, `desert_id`, `drink_id`) VALUES ("menu bigmac", "https://cdn.dribbble.com/users/2582040/screenshots/5613340/media/36e91c22d1d73eaef59887f92ab27f37.png?compress=1&resize=400x300", 1, 1, 1, 1), ("menu cheese", "https://cherry.img.pmdstatic.net/fit/https.3A.2F.2Fimg.2Egentside.2Ecom.2Fs3.2Ffrgsl.2Fconso.2Fdefault_2021-09-16_c4010587-c230-4fbf-b41d-5778cd7bcd1b.2Ejpeg/1200x675/quality/80/un-menu-de-mcdo-facon-90s.jpg", 2, 2, 2, 2), ("menu nuggest", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuVyHLGle_0mbSu0aJo0MDi77_TAWcQY5lfQ&usqp=CAU", 3, 1, 1, 1);
