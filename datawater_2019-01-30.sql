# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Hôte: 127.0.0.1 (MySQL 5.7.20)
# Base de données: datawater
# Temps de génération: 2019-01-30 13:18:13 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Affichage de la table t_bugs
# ------------------------------------------------------------

DROP TABLE IF EXISTS `t_bugs`;

CREATE TABLE `t_bugs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text,
  `file` varchar(100) DEFAULT NULL,
  `datebugs` datetime DEFAULT NULL,
  `methodhttp` varchar(100) DEFAULT NULL,
  `userid` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `t_bugs_t_users_fk` (`userid`),
  CONSTRAINT `t_bugs_t_users_fk` FOREIGN KEY (`userid`) REFERENCES `t_users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Affichage de la table t_calculation
# ------------------------------------------------------------

DROP TABLE IF EXISTS `t_calculation`;

CREATE TABLE `t_calculation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `datecalculation` date NOT NULL,
  `formula` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Affichage de la table t_datafiles
# ------------------------------------------------------------

DROP TABLE IF EXISTS `t_datafiles`;

CREATE TABLE `t_datafiles` (
  `datafileid` int(11) NOT NULL,
  `month` varchar(100) DEFAULT NULL,
  `year` varchar(100) DEFAULT NULL,
  `typefileid` int(11) NOT NULL,
  `orgunitid` int(11) NOT NULL,
  `indicatorid` int(11) NOT NULL,
  `indicatorvalue` varchar(100) NOT NULL,
  `datesubmissions` date NOT NULL,
  `datestorage` date NOT NULL,
  `idexportation` int(11) NOT NULL,
  PRIMARY KEY (`datafileid`),
  KEY `t_datafiles_t_entity_orgunits_FK` (`orgunitid`),
  KEY `t_datafiles_t_typefile_FK` (`typefileid`),
  KEY `t_datafiles_t_indicators_FK` (`indicatorid`),
  KEY `t_datafiles_t_exportation_datas_FK` (`idexportation`),
  CONSTRAINT `t_datafiles_t_entity_orgunits_FK` FOREIGN KEY (`orgunitid`) REFERENCES `t_entity_orgunits` (`id`),
  CONSTRAINT `t_datafiles_t_exportation_datas_FK` FOREIGN KEY (`idexportation`) REFERENCES `t_exportation_datas` (`id`),
  CONSTRAINT `t_datafiles_t_indicators_FK` FOREIGN KEY (`indicatorid`) REFERENCES `t_indicators` (`id`),
  CONSTRAINT `t_datafiles_t_typefile_FK` FOREIGN KEY (`typefileid`) REFERENCES `t_typefile` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Affichage de la table t_entity_orgunits
# ------------------------------------------------------------

DROP TABLE IF EXISTS `t_entity_orgunits`;

CREATE TABLE `t_entity_orgunits` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `keyentity` varchar(100) DEFAULT NULL,
  `labelentity` varchar(100) DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `idparent` int(11) DEFAULT NULL,
  `embedcard` longtext,
  `lat` varchar(45) DEFAULT NULL,
  `lng` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `t_entity_orgunits` WRITE;
/*!40000 ALTER TABLE `t_entity_orgunits` DISABLE KEYS */;

INSERT INTO `t_entity_orgunits` (`id`, `keyentity`, `labelentity`, `category`, `idparent`, `embedcard`, `lat`, `lng`)
VALUES
	(1,'rdc','RD Congo','parent',NULL,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8151407.598830492!2d17.161949326029955!3d-3.9834619516573566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1979facf9a7546bd%3A0x4c63e5eac93f141!2sR%C3%A9publique+d%C3%A9mocratique+du+Congo!5e0!3m2!1sfr!2scd!4v1532889218485\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>',NULL,NULL),
	(2,'kin','Kinshasa','child',1,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254595.35622850372!2d15.182657168840809!3d-4.401290646277203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3130fe066a8b%3A0x168b7e4e1f52378d!2sKinshasa!5e0!3m2!1sfr!2scd!4v1532889172321\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>',NULL,NULL),
	(3,'kng','Kongo Central','Child',1,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034481.1963436545!2d13.111191255508894!3d-5.168489726406542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5c44661bfb245d%3A0x4a2f95d685920f4b!2sBas-Congo!5e0!3m2!1sfr!2scd!4v1532890744872\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>',NULL,NULL),
	(4,'bdd','Bandundu','Child',1,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4073404.674001085!2d16.215985546019116!3d-4.423351984234209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a166a9098839519%3A0x765e65e2f5ffdd19!2sBandundu!5e0!3m2!1sfr!2scd!4v1532890680329\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>',NULL,NULL),
	(5,'Kat','Katanga','Child',1,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8066049.418789036!2d21.760913147859654!3d-9.199430731082538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x199cf64bc51eb983%3A0x82ccbafdd5a36c47!2sKatanga!5e0!3m2!1sfr!2scd!4v1532890791523\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>',NULL,NULL),
	(6,'eqt','Équateur','Child',1,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8169031.029096327!2d15.983350066814177!3d1.3042315904845283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10a759c6a20610a5%3A0xf9db486da6873f09!2zw4lxdWF0ZXVy!5e0!3m2!1sfr!2scd!4v1532890964329\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>',NULL,NULL),
	(7,'kao','Kasai-Oriental','Child',1,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4071036.0849340246!2d21.843211290766835!3d-4.834932588920528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19890cd2cfe4f413%3A0x71ae688f7d40d60b!2sKasa%C3%AF+oriental!5e0!3m2!1sfr!2scd!4v1532891053147\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>',NULL,NULL),
	(8,'kac','Kasai-Occidental','Child',1,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4069295.4408845794!2d19.466747541970076!3d-5.116380611326285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a21a66863c8de11%3A0xb02129df12aad744!2sKasa%C3%AF+occidental!5e0!3m2!1sfr!2scd!4v1532891076392\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>',NULL,NULL),
	(9,'nkv','Nord-Kivu','Child',1,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2042692.2459968044!2d27.47157956296882!3d-0.5517987964596072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19e0865560e56fc3%3A0x341e4dce5d8e1b94!2sNord-Kivu!5e0!3m2!1sfr!2scd!4v1532891111665\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>',NULL,NULL),
	(10,'skv','Sud-Kivu','Child',1,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2039433.4744397798!2d26.97492694601387!3d-3.283484999799054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19ea2ec21f044c99%3A0x95fd4a4a6e234625!2sSud-Kivu!5e0!3m2!1sfr!2scd!4v1532891130713\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>',NULL,NULL),
	(11,'por','Province Orientale','Child',1,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8167843.657372684!2d22.299097954880025!3d1.629476169473721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x175ad0ec9ef615e5%3A0x9bad1b99a73f8ddf!2sProvince+orientale!5e0!3m2!1sfr!2scd!4v1532891157597\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>',NULL,NULL),
	(12,'man','Maniema','Child',1,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4081561.111916044!2d24.4046916415256!3d-2.5396449565059562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19ef0ba259cff31f%3A0x88b7f9d0c20b2fd!2sManiema!5e0!3m2!1sfr!2scd!4v1532891268852\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>',NULL,NULL),
	(13,'ndj','Ndjili','Child',2,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63647.48163020698!2d15.339051098288834!3d-4.417137978197869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a381598590d8d%3A0x7367d81ff6f52598!2sNdjili%2C+Kinshasa!5e0!3m2!1sfr!2scd!4v1532907422455\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>',NULL,NULL),
	(14,'nga','Ngaliema','Child',2,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127302.13406386298!2d15.173317926092498!3d-4.375155893651654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a31bb149a2299%3A0xcd21dd79837324a!2sNgaliema%2C+Kinshasa!5e0!3m2!1sfr!2scd!4v1532887811392\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>',NULL,NULL),
	(15,'luk','Lukunga','Child',2,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254585.74204886626!2d15.106704419312647!3d-4.429312313513604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b1cf99a36d7%3A0xb935969bb6480ac3!2sLukunga!5e0!3m2!1sfr!2scd!4v1532887874610\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>',NULL,NULL),
	(16,'lky','Lukaya','Child',2,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15912.720976246535!2d15.371906066928247!3d-4.377309896818678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a37bfaa54c73b%3A0x1499190fa6699b61!2sLukaya%2C+Kinshasa!5e0!3m2!1sfr!2scd!4v1532887935364\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>',NULL,NULL),
	(17,'mal','Maluku','Child',2,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127287.97384201904!2d15.351845676428338!3d-4.457678382723569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a38640fd18ac9%3A0x367c5a95e692f51c!2sKimbanseke%2C+Kinshasa!5e0!3m2!1sfr!2scd!4v1532887991801\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>',NULL,NULL),
	(18,'mbz','Mbanza Lemba','Child',2,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.0806398559407!2d15.31678391459696!3d-4.396010696805174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3756aaaaaaab%3A0xea4e7f8e61078257!2sMbanza-lemba!5e0!3m2!1sfr!2scd!4v1532888025515\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>',NULL,NULL),
	(19,'mut','Mutendi','Child',2,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15910.089792058285!2d15.19527187420652!3d-4.499376547690538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a2346ed3818ef%3A0xd31e638863022e8d!2sMitendi!5e0!3m2!1sfr!2scd!4v1532888102265\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>',NULL,NULL),
	(20,'knk','Kinkole','Child',2,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15913.771710512257!2d15.499391474195935!3d-4.327603949672037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a4eae28bfcc47%3A0x66fc9755d2173c3!2sKinkole!5e0!3m2!1sfr!2scd!4v1532888685369\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>',NULL,NULL),
	(21,'bbw','Bibwa','Child',2,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7956.189704778875!2d15.368081273498168!3d-4.393347137228413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a378f68b3b3c9%3A0x431ac3d788767ebf!2sQuartier+1%2C+Kinshasa!5e0!3m2!1sfr!2scd!4v1532888781112\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>',NULL,NULL),
	(22,'kkm','Kikimi','Child',2,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.1521348607116!2d15.312626914596896!3d-4.382595496814857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a374ae970d157%3A0xe0844dd9b261c447!2sKikimi%2C+Kinshasa!5e0!3m2!1sfr!2scd!4v1532888902960\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>',NULL,NULL),
	(23,'mkg','Mikonga','Child',2,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.0507916060783!2d15.40895431459702!3d-4.401599296801161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a47fef4dd5ba5%3A0x483602c39e28d039!2sMikonga%2C+Kinshasa!5e0!3m2!1sfr!2scd!4v1532889138787\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>',NULL,NULL),
	(25,'kk','Muyi','Child',2,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31823.740788658615!2d15.35656111762878!3d-4.417138594554005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a381598590d8d%3A0x7367d81ff6f52598!2sNdjili%2C+Kinshasa!5e0!3m2!1sfr!2scd!4v1532989898221\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>','9','90'),
	(26,'mat','Matadi','Child',3,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.185235292076!2d13.430141356966942!3d-5.836364679319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1541349588496\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>','0','0'),
	(27,'mpz','Mpozo','Child',26,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7938.45333821399!2d13.494341120508382!3d-5.823627909621742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccb7f4879404d%3A0x2f5328a856b2b94e!2sMpozo!5e0!3m2!1sfr!2scd!4v1541350985531\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>','0','0'),
	(28,'flv','Fleuve','Child',26,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.185235292076!2d13.430141356966942!3d-5.836364679319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1541349588496\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>','0','0'),
	(29,'bma','Boma','Child',3,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.18523523742!2d13.43014154992747!3d-5.836364679801747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1548699719447\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>','0','0'),
	(30,'kas','Kasangulu','Child',3,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.185235292076!2d13.430141356966942!3d-5.836364679319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1541349588496\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>','0','0'),
	(31,'tla','Tshela','Chilld',3,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.185235292076!2d13.430141356966942!3d-5.836364679319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1541349588496\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>','0','0'),
	(32,'lkl','Lukula','Child',3,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.185235292076!2d13.430141356966942!3d-5.836364679319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1541349588496\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>','0','0'),
	(33,'mnda','Muanda','Child',3,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.185235292076!2d13.430141356966942!3d-5.836364679319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1541349588496\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>','0','0'),
	(34,'kmp','Kimpense','Child',3,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.185235292076!2d13.430141356966942!3d-5.836364679319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1541349588496\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>','0','0'),
	(35,'mzg','Mbanza Ngungu','Child',3,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.185235292076!2d13.430141356966942!3d-5.836364679319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1541349588496\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>','0','0'),
	(36,'iks','Inkisi','Child',3,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.185235292076!2d13.430141356966942!3d-5.836364679319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1541349588496\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>','0','0'),
	(37,'lka','Lukala','Child',3,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.185235292076!2d13.430141356966942!3d-5.836364679319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1541349588496\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>','0','0'),
	(38,'lzi','Luozi','Child',3,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.185235292076!2d13.430141356966942!3d-5.836364679319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1541349588496\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>','0','0'),
	(39,'mle','Mfidi Malele','Child',3,'<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63506.185235292076!2d13.430141356966942!3d-5.836364679319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5ccc0a52f159dd%3A0xfa3b643d669d0836!2sMatadi!5e0!3m2!1sfr!2scd!4v1541349588496\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>','0','0'),
	(40,'kme','Kalemie','Child',5,NULL,'0','0'),
	(41,'kna','Kaniama','Child',5,NULL,NULL,NULL),
	(42,'bkm','Bukama','Child',5,NULL,NULL,NULL),
	(43,'kgl','Kongolo','Child',5,NULL,NULL,NULL),
	(44,'kbl','Kabalo','Child',5,NULL,NULL,NULL),
	(45,'pwt','Pweto','Child',5,NULL,NULL,NULL),
	(46,'lsh','Lubumbashi','Child',5,NULL,NULL,NULL),
	(47,'km1','Kimilolo 1','Child',46,NULL,NULL,NULL),
	(48,'km2','Kimilolo 2','Child',46,NULL,NULL,NULL),
	(49,'km3','Kimilolo 3','Child',46,NULL,NULL,NULL),
	(50,'kpa','Kasapa','Child',46,NULL,NULL,NULL),
	(51,'lno','Luano','Child',46,NULL,NULL,NULL),
	(52,'uni','Unilu','Child',46,NULL,NULL,NULL),
	(53,'rwh','Rwashi','Child',46,NULL,NULL,NULL),
	(54,'ysu','Yesu Mtumishi','Child',46,NULL,NULL,NULL),
	(55,'kph','Kipushi','Child',46,NULL,NULL,NULL),
	(56,'kbs','Kasumbalesa','Child',46,NULL,NULL,NULL),
	(57,'lks','Likasi','Child',5,NULL,NULL,NULL),
	(58,'lwb','Lwambo','Child',57,NULL,NULL,NULL),
	(59,'kpb','Kampemba','Child',57,NULL,NULL,NULL),
	(60,'lk3','Likasi 3','Child',57,NULL,NULL,NULL),
	(61,'klz','Kolwezi','Child',5,NULL,NULL,NULL),
	(62,'klz1','Kolwezi1','Child',61,NULL,NULL,NULL),
	(63,'klz2','Kolwezi2','Child',61,NULL,NULL,NULL),
	(64,'klz3','Kolwezi3','Child',61,NULL,NULL,NULL),
	(65,'kma','Kamina','Child',5,NULL,NULL,NULL),
	(66,'mba','Moba','Child',5,NULL,NULL,NULL),
	(67,'dlo','Dilolo','Child',5,NULL,NULL,NULL),
	(68,'sda','Sandoa','Child',5,NULL,NULL,NULL),
	(69,'sda','Sandoa','Child',5,NULL,NULL,NULL),
	(70,'kas','Kasenga','Child',5,NULL,NULL,NULL),
	(71,'nzu','Nyunzu','Child',5,NULL,NULL,NULL),
	(72,'mkl','Malemba Nkulu','Child',5,NULL,NULL,NULL),
	(73,'akr','Ankoro','Child',5,NULL,NULL,NULL),
	(74,'kbg','Kabongo','Child',5,NULL,NULL,NULL),
	(75,'bkv','Bukavu','Child',10,NULL,NULL,NULL),
	(76,'kmt','Kamituga','Child',10,NULL,NULL,NULL);

/*!40000 ALTER TABLE `t_entity_orgunits` ENABLE KEYS */;
UNLOCK TABLES;


# Affichage de la table t_exportation_datas
# ------------------------------------------------------------

DROP TABLE IF EXISTS `t_exportation_datas`;

CREATE TABLE `t_exportation_datas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dateexportation` datetime DEFAULT NULL,
  `content` text,
  `userid` int(11) DEFAULT NULL,
  `cronjob` tinyint(1) DEFAULT NULL,
  `idorgunit` int(11) DEFAULT NULL,
  `datasize` decimal(10,0) DEFAULT NULL,
  `monthcollect` int(11) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `t_exportation_datas_t_users_FK` (`userid`),
  KEY `t_exportation_datas_t_entity_orgunits_FK` (`idorgunit`),
  CONSTRAINT `t_exportation_datas_t_entity_orgunits_FK` FOREIGN KEY (`idorgunit`) REFERENCES `t_entity_orgunits` (`id`),
  CONSTRAINT `t_exportation_datas_t_users_FK` FOREIGN KEY (`userid`) REFERENCES `t_users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `t_exportation_datas` WRITE;
/*!40000 ALTER TABLE `t_exportation_datas` DISABLE KEYS */;

INSERT INTO `t_exportation_datas` (`id`, `dateexportation`, `content`, `userid`, `cronjob`, `idorgunit`, `datasize`, `monthcollect`, `year`)
VALUES
	(113,'2018-11-19 00:33:56','[{\"aflc\":\"3012\",\"Usine\":\"nga\",\"week\":1,\"FactoryName\":\"Ngaliema\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"4530\",\"Sel\":\"6523\",\"Sulfate\":\"4522\",\"chaux\":\"9850\",\"Gasoil\":\"7456\",\"Kwh\":\"8560\"},{\"aflc\":\"4258\",\"Usine\":\"nga\",\"week\":2,\"FactoryName\":\"Ngaliema\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"6321\",\"Sel\":\"1235\",\"Sulfate\":\"4623\",\"chaux\":\"6350\",\"Gasoil\":\"3205\",\"Kwh\":\"650\"},{\"aflc\":\"25039\",\"Usine\":\"nga\",\"week\":3,\"FactoryName\":\"Ngaliema\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"9874\",\"Sel\":\"7850\",\"Sulfate\":\"325\",\"chaux\":\"6399\",\"Gasoil\":\"9630\",\"Kwh\":\"3690\"},{\"aflc\":\"3632\",\"Usine\":\"nga\",\"week\":4,\"FactoryName\":\"Ngaliema\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"1236\",\"Sel\":\"9606\",\"Sulfate\":\"6205\",\"chaux\":\"8563\",\"Gasoil\":\"6520\",\"Kwh\":\"2036\"},{\"aflc\":0,\"Usine\":\"nga\",\"week\":5,\"FactoryName\":\"Ngaliema\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":0,\"Sel\":0,\"Sulfate\":0,\"chaux\":0,\"Gasoil\":0,\"Kwh\":0}]',1,0,14,865,9,2018),
	(114,'2018-11-19 00:33:56','[{\"aflc\":\"4580\",\"Usine\":\"luk\",\"week\":1,\"FactoryName\":\"Lukunga\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"6968\",\"Sel\":\"9608\",\"Sulfate\":\"0533\",\"chaux\":\"4560\",\"Gasoil\":\"9630\",\"Kwh\":\"8960\"},{\"aflc\":\"3620\",\"Usine\":\"luk\",\"week\":2,\"FactoryName\":\"Lukunga\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"7856\",\"Sel\":\"7846\",\"Sulfate\":\"6583\",\"chaux\":\"7845\",\"Gasoil\":\"3205\",\"Kwh\":\"9860\"},{\"aflc\":\"9850\",\"Usine\":\"luk\",\"week\":3,\"FactoryName\":\"Lukunga\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"2563\",\"Sel\":\"6930\",\"Sulfate\":\"12570\",\"chaux\":\"9630\",\"Gasoil\":\"6530\",\"Kwh\":\"6302\"},{\"aflc\":\"9637\",\"Usine\":\"luk\",\"week\":4,\"FactoryName\":\"Lukunga\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"3265\",\"Sel\":\"2036\",\"Sulfate\":\"9602\",\"chaux\":\"7456\",\"Gasoil\":\"8960\",\"Kwh\":\"7426\"},{\"aflc\":0,\"Usine\":\"luk\",\"week\":5,\"FactoryName\":\"Lukunga\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":0,\"Sel\":0,\"Sulfate\":0,\"chaux\":0,\"Gasoil\":0,\"Kwh\":0}]',1,0,15,2583,9,2018),
	(115,'2018-11-19 00:33:56','[{\"aflc\":\"3203\",\"Usine\":\"lky\",\"week\":1,\"FactoryName\":\"Lukaya\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"4520\",\"Sel\":\"3660\",\"Sulfate\":\"6933\",\"chaux\":\"56205\",\"Gasoil\":\"6369\",\"Kwh\":\"3256\"},{\"aflc\":\"3603\",\"Usine\":\"lky\",\"week\":2,\"FactoryName\":\"Lukaya\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"9605\",\"Sel\":\"6930\",\"Sulfate\":\"14752\",\"chaux\":\"9845\",\"Gasoil\":\"3205\",\"Kwh\":\"3265\"},{\"aflc\":\"6369\",\"Usine\":\"lky\",\"week\":3,\"FactoryName\":\"Lukaya\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"7859\",\"Sel\":\"745\",\"Sulfate\":\"2350\",\"chaux\":\"4562\",\"Gasoil\":\"5201\",\"Kwh\":\"4820\"},{\"aflc\":\"7890\",\"Usine\":\"lky\",\"week\":4,\"FactoryName\":\"Lukaya\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"3025\",\"Sel\":\"2530\",\"Sulfate\":\"3602\",\"chaux\":\"63025\",\"Gasoil\":\"3201\",\"Kwh\":\"12052\"},{\"aflc\":0,\"Usine\":\"lky\",\"week\":5,\"FactoryName\":\"Lukaya\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":0,\"Sel\":0,\"Sulfate\":0,\"chaux\":0,\"Gasoil\":0,\"Kwh\":0}]',1,0,16,859,9,2018),
	(116,'2018-11-19 00:33:56','[{\"aflc\":\"6520\",\"Usine\":\"mal\",\"week\":1,\"FactoryName\":\"Maluku\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"9850\",\"Sel\":\"6570\",\"Sulfate\":\"5602\",\"chaux\":\"7805\",\"Gasoil\":\"45690\",\"Kwh\":\"4560\"},{\"aflc\":\"2150\",\"Usine\":\"mal\",\"week\":2,\"FactoryName\":\"Maluku\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"3620\",\"Sel\":\"8950\",\"Sulfate\":\"3205\",\"chaux\":\"32560\",\"Gasoil\":\"4587\",\"Kwh\":\"6980\"},{\"aflc\":\"3205\",\"Usine\":\"mal\",\"week\":3,\"FactoryName\":\"Maluku\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"1250\",\"Sel\":\"4690\",\"Sulfate\":\"6302\",\"chaux\":\"4560\",\"Gasoil\":\"9860\",\"Kwh\":\"6530\"},{\"aflc\":\"3650\",\"Usine\":\"mal\",\"week\":4,\"FactoryName\":\"Maluku\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"1250\",\"Sel\":\"4560\",\"Sulfate\":\"1450\",\"chaux\":\"6502\",\"Gasoil\":\"5620\",\"Kwh\":\"3650\"},{\"aflc\":0,\"Usine\":\"mal\",\"week\":5,\"FactoryName\":\"Maluku\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":0,\"Sel\":0,\"Sulfate\":0,\"chaux\":0,\"Gasoil\":0,\"Kwh\":0}]',1,0,17,858,9,2018),
	(117,'2018-11-19 01:02:30','[{\"aflc\":\"325\",\"Usine\":\"mpz\",\"week\":1,\"FactoryName\":\"Mpozo\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"785\",\"Sel\":\"8569\",\"Sulfate\":\"987\",\"chaux\":\"36952\",\"Gasoil\":\"745\",\"Kwh\":\"3265\"},{\"aflc\":\"985\",\"Usine\":\"mpz\",\"week\":2,\"FactoryName\":\"Mpozo\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"658\",\"Sel\":\"452\",\"Sulfate\":\"785\",\"chaux\":\"456\",\"Gasoil\":\"652\",\"Kwh\":\"4568\"},{\"aflc\":\"6952\",\"Usine\":\"mpz\",\"week\":3,\"FactoryName\":\"Mpozo\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"6325\",\"Sel\":\"665\",\"Sulfate\":\"654\",\"chaux\":\"956\",\"Gasoil\":\"452\",\"Kwh\":\"9856\"},{\"aflc\":\"4235\",\"Usine\":\"mpz\",\"week\":4,\"FactoryName\":\"Mpozo\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"7456\",\"Sel\":\"9785\",\"Sulfate\":\"125\",\"chaux\":\"235\",\"Gasoil\":\"2456\",\"Kwh\":\"3265\"},{\"aflc\":0,\"Usine\":\"mpz\",\"week\":5,\"FactoryName\":\"Mpozo\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":0,\"Sel\":0,\"Sulfate\":0,\"chaux\":0,\"Gasoil\":0,\"Kwh\":0}]',1,0,27,836,9,2018),
	(118,'2018-11-19 01:02:30','[{\"aflc\":\"785\",\"Usine\":\"flv\",\"week\":1,\"FactoryName\":\"Fleuve\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"693\",\"Sel\":\"1236\",\"Sulfate\":\"1542\",\"chaux\":\"1336\",\"Gasoil\":\"6542\",\"Kwh\":\"9632\"},{\"aflc\":\"9856\",\"Usine\":\"flv\",\"week\":2,\"FactoryName\":\"Fleuve\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"7458\",\"Sel\":\"654\",\"Sulfate\":\"1452\",\"chaux\":\"36541\",\"Gasoil\":\"789\",\"Kwh\":\"4587\"},{\"aflc\":\"3215\",\"Usine\":\"flv\",\"week\":3,\"FactoryName\":\"Fleuve\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"695\",\"Sel\":\"3265\",\"Sulfate\":\"6532\",\"chaux\":\"856\",\"Gasoil\":\"632\",\"Kwh\":\"6521\"},{\"aflc\":\"1235\",\"Usine\":\"flv\",\"week\":4,\"FactoryName\":\"Fleuve\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"9859\",\"Sel\":\"3215\",\"Sulfate\":\"9852\",\"chaux\":\"985\",\"Gasoil\":\"9852\",\"Kwh\":\"1369\"},{\"aflc\":0,\"Usine\":\"flv\",\"week\":5,\"FactoryName\":\"Fleuve\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":0,\"Sel\":0,\"Sulfate\":0,\"chaux\":0,\"Gasoil\":0,\"Kwh\":0}]',1,0,28,849,9,2018),
	(119,'2018-11-19 01:02:30','[{\"aflc\":\"1134\",\"Usine\":\"bma\",\"week\":1,\"FactoryName\":\"Boma\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"9898\",\"Sel\":\"1234\",\"Sulfate\":\"1001\",\"chaux\":\"1212\",\"Gasoil\":\"7878\",\"Kwh\":\"89090\"},{\"aflc\":\"8989\",\"Usine\":\"bma\",\"week\":2,\"FactoryName\":\"Boma\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"9090\",\"Sel\":\"9090\",\"Sulfate\":\"900\",\"chaux\":\"2321\",\"Gasoil\":\"7878\",\"Kwh\":\"1234\"},{\"aflc\":\"1212\",\"Usine\":\"bma\",\"week\":3,\"FactoryName\":\"Boma\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"89090\",\"Sel\":\"7878\",\"Sulfate\":\"19\",\"chaux\":\"1234\",\"Gasoil\":\"7867\",\"Kwh\":\"7800\"},{\"aflc\":\"7865\",\"Usine\":\"bma\",\"week\":4,\"FactoryName\":\"Boma\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"7675\",\"Sel\":\"1234\",\"Sulfate\":\"9999\",\"chaux\":\"1234\",\"Gasoil\":\"6787\",\"Kwh\":\"7890\"},{\"aflc\":0,\"Usine\":\"bma\",\"week\":5,\"FactoryName\":\"Boma\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":0,\"Sel\":0,\"Sulfate\":0,\"chaux\":0,\"Gasoil\":0,\"Kwh\":0}]',1,0,29,845,9,2018),
	(124,'2018-12-16 14:09:56','[{\"aflc\":\"5620\",\"Usine\":\"bkv\",\"week\":1,\"FactoryName\":\"Bukavu\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"5680\",\"Sel\":\"4580\",\"Sulfate\":\"3250\",\"chaux\":\"3200\",\"Gasoil\":\"9603\",\"Kwh\":\"7450\"},{\"aflc\":\"3650\",\"Usine\":\"bkv\",\"week\":2,\"FactoryName\":\"Bukavu\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"5980\",\"Sel\":\"6580\",\"Sulfate\":\"3650\",\"chaux\":\"1260\",\"Gasoil\":\"3650\",\"Kwh\":\"6503\"},{\"aflc\":\"8560\",\"Usine\":\"bkv\",\"week\":3,\"FactoryName\":\"Bukavu\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"3620\",\"Sel\":\"41200\",\"Sulfate\":\"4120\",\"chaux\":\"8560\",\"Gasoil\":\"4560\",\"Kwh\":\"4560\"},{\"aflc\":\"6520\",\"Usine\":\"bkv\",\"week\":4,\"FactoryName\":\"Bukavu\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"2360\",\"Sel\":\"6580\",\"Sulfate\":\"3206\",\"chaux\":\"3260\",\"Gasoil\":\"7850\",\"Kwh\":\"6960\"},{\"aflc\":0,\"Usine\":\"bkv\",\"week\":5,\"FactoryName\":\"Bukavu\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":0,\"Sel\":0,\"Sulfate\":0,\"chaux\":0,\"Gasoil\":0,\"Kwh\":0}]',1,0,75,857,9,2018),
	(125,'2018-12-16 14:09:57','[{\"aflc\":\"7895\",\"Usine\":\"kmt\",\"week\":1,\"FactoryName\":\"Kamituga\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"3650\",\"Sel\":\"9852\",\"Sulfate\":\"3205\",\"chaux\":\"12035\",\"Gasoil\":\"8563\",\"Kwh\":\"5630\"},{\"aflc\":\"5604\",\"Usine\":\"kmt\",\"week\":2,\"FactoryName\":\"Kamituga\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"2560\",\"Sel\":\"3201\",\"Sulfate\":\"9630\",\"chaux\":\"9630\",\"Gasoil\":\"563\",\"Kwh\":\"2360\"},{\"aflc\":\"6320\",\"Usine\":\"kmt\",\"week\":3,\"FactoryName\":\"Kamituga\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"5623\",\"Sel\":\"8563\",\"Sulfate\":\"4569\",\"chaux\":\"78930\",\"Gasoil\":\"4528\",\"Kwh\":\"3690\"},{\"aflc\":\"3658\",\"Usine\":\"kmt\",\"week\":4,\"FactoryName\":\"Kamituga\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":\"9856\",\"Sel\":\"6983\",\"Sulfate\":\"7850\",\"chaux\":\"4520\",\"Gasoil\":\"2560\",\"Kwh\":\"6302\"},{\"aflc\":0,\"Usine\":\"kmt\",\"week\":5,\"FactoryName\":\"Kamituga\",\"month\":\"9\",\"year\":\"2018\",\"Chlore\":0,\"Sel\":0,\"Sulfate\":0,\"chaux\":0,\"Gasoil\":0,\"Kwh\":0}]',1,0,76,867,9,2018);

/*!40000 ALTER TABLE `t_exportation_datas` ENABLE KEYS */;
UNLOCK TABLES;


# Affichage de la table t_indicators
# ------------------------------------------------------------

DROP TABLE IF EXISTS `t_indicators`;

CREATE TABLE `t_indicators` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `keycode` varchar(100) NOT NULL,
  `indicatorname` text,
  `datecreated` date DEFAULT NULL,
  `datebegin` date NOT NULL,
  `dateend` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `t_indicators` WRITE;
/*!40000 ALTER TABLE `t_indicators` DISABLE KEYS */;

INSERT INTO `t_indicators` (`id`, `keycode`, `indicatorname`, `datecreated`, `datebegin`, `dateend`)
VALUES
	(1,'dp','Direction provinciale','2018-07-04','2018-07-04','2020-07-04'),
	(2,'centres','Usine / Centre','2018-07-04','2018-07-04','2020-07-04'),
	(3,'years','Année','2018-07-04','2018-07-04','2020-07-04'),
	(4,'mois','Mois','2018-07-04','2018-07-04','2020-07-04'),
	(5,'week1','Semaine 1','2018-07-04','2018-07-04','2020-07-04'),
	(6,'week2','Semaine 2','2018-07-04','2018-07-04','2020-07-04'),
	(7,'week3','Semaine 3','2018-07-04','2018-07-04','2020-07-04'),
	(8,'week4','Semaine 4','2018-07-04','2018-07-04','2020-07-04'),
	(9,'week5','Semaine 5','2018-07-04','2018-07-04','2020-07-04');

/*!40000 ALTER TABLE `t_indicators` ENABLE KEYS */;
UNLOCK TABLES;


# Affichage de la table t_permission_access
# ------------------------------------------------------------

DROP TABLE IF EXISTS `t_permission_access`;

CREATE TABLE `t_permission_access` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idpermission` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `idorgunit` int(11) DEFAULT NULL,
  `datepermission` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `t_permission_access_t_entity_orgunits_FK` (`idorgunit`),
  KEY `t_permission_access_t_permissions_FK` (`idpermission`),
  KEY `t_permission_access_t_users_FK` (`iduser`),
  CONSTRAINT `t_permission_access_t_entity_orgunits_FK` FOREIGN KEY (`idorgunit`) REFERENCES `t_entity_orgunits` (`id`),
  CONSTRAINT `t_permission_access_t_permissions_FK` FOREIGN KEY (`idpermission`) REFERENCES `t_permissions` (`id`),
  CONSTRAINT `t_permission_access_t_users_FK` FOREIGN KEY (`iduser`) REFERENCES `t_users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `t_permission_access` WRITE;
/*!40000 ALTER TABLE `t_permission_access` DISABLE KEYS */;

INSERT INTO `t_permission_access` (`id`, `idpermission`, `iduser`, `idorgunit`, `datepermission`)
VALUES
	(1,1,1,1,'2018-07-01'),
	(2,1,2,4,'2019-01-20'),
	(4,3,3,2,'2019-01-20'),
	(11,2,17,5,'2019-01-20'),
	(12,2,18,4,'2019-01-15'),
	(13,1,19,9,'2019-01-19');

/*!40000 ALTER TABLE `t_permission_access` ENABLE KEYS */;
UNLOCK TABLES;


# Affichage de la table t_permissions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `t_permissions`;

CREATE TABLE `t_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(100) NOT NULL,
  `read` int(11) NOT NULL,
  `write` int(11) NOT NULL,
  `delete` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `t_permissions` WRITE;
/*!40000 ALTER TABLE `t_permissions` DISABLE KEYS */;

INSERT INTO `t_permissions` (`id`, `role`, `read`, `write`, `delete`)
VALUES
	(1,'superadmin',1,1,1),
	(2,'admin',1,1,0),
	(3,'user',1,0,0);

/*!40000 ALTER TABLE `t_permissions` ENABLE KEYS */;
UNLOCK TABLES;


# Affichage de la table t_typefile
# ------------------------------------------------------------

DROP TABLE IF EXISTS `t_typefile`;

CREATE TABLE `t_typefile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `keycode` varchar(100) NOT NULL,
  `typefilename` varchar(100) NOT NULL,
  `datecreated` date NOT NULL,
  `status` varchar(100) NOT NULL,
  `datevalidity` date NOT NULL,
  `parent` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `t_typefile_t_typefile_FK` (`parent`),
  CONSTRAINT `t_typefile_t_typefile_FK` FOREIGN KEY (`parent`) REFERENCES `t_typefile` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `t_typefile` WRITE;
/*!40000 ALTER TABLE `t_typefile` DISABLE KEYS */;

INSERT INTO `t_typefile` (`id`, `keycode`, `typefilename`, `datecreated`, `status`, `datevalidity`, `parent`)
VALUES
	(325073,'LIVRAISON','FICHE DE LIVRAISON','2018-07-04','active','2020-07-04',NULL),
	(325698,'PRODCHIM','PRODUIT CHIMIQUES','2018-07-04','active','2020-07-04',NULL),
	(325699,'AGLEFOC','AGEFLOC','2018-07-04','active','2020-07-04',325698),
	(3256910,'CHAUX','CHAUX','2018-07-04','active','2020-07-04',325698),
	(3256911,'CHLORE','CHLORE','2018-07-04','active','2020-07-04',325698),
	(3256912,'GASOIL','GASOIL','2018-07-04','active','2020-07-04',325698),
	(3256913,'KILOWATT','KILOWATT','2018-07-04','active','2020-07-04',325698),
	(3256914,'SEL','SEL','2018-07-04','active','2020-07-04',325698);

/*!40000 ALTER TABLE `t_typefile` ENABLE KEYS */;
UNLOCK TABLES;


# Affichage de la table t_typefile_indicators
# ------------------------------------------------------------

DROP TABLE IF EXISTS `t_typefile_indicators`;

CREATE TABLE `t_typefile_indicators` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `indicatorid` int(11) NOT NULL,
  `datecreated` date NOT NULL,
  `idtypefile` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idtypefile_UNIQUE` (`idtypefile`),
  KEY `indicatorid_UNIQUE` (`indicatorid`),
  CONSTRAINT `t_typefile_indicators_t_indicators_FK` FOREIGN KEY (`indicatorid`) REFERENCES `t_indicators` (`id`),
  CONSTRAINT `t_typefile_indicators_t_typefile_FK` FOREIGN KEY (`idtypefile`) REFERENCES `t_typefile` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `t_typefile_indicators` WRITE;
/*!40000 ALTER TABLE `t_typefile_indicators` DISABLE KEYS */;

INSERT INTO `t_typefile_indicators` (`id`, `indicatorid`, `datecreated`, `idtypefile`)
VALUES
	(1,5,'2018-09-11',325699),
	(2,6,'2018-09-11',325699),
	(3,7,'2018-09-11',325699),
	(4,8,'2018-09-11',325699),
	(5,9,'2018-09-11',325699),
	(6,1,'2018-09-11',325699),
	(7,2,'2018-09-11',325699),
	(8,3,'2018-09-11',325699),
	(9,4,'2018-09-11',325699),
	(10,1,'2018-09-11',3256910),
	(11,2,'2018-09-11',3256910),
	(12,3,'2018-09-11',3256910),
	(13,4,'2018-09-11',3256910),
	(14,5,'2018-09-11',3256910),
	(15,6,'2018-09-11',3256910),
	(16,7,'2018-09-11',3256910),
	(17,8,'2018-09-11',3256910),
	(18,9,'2018-09-11',3256910),
	(19,1,'2018-09-11',3256911),
	(20,2,'2018-09-11',3256911),
	(21,3,'2018-09-11',3256911),
	(22,4,'2018-09-11',3256911),
	(23,5,'2018-09-11',3256911),
	(24,6,'2018-09-11',3256911),
	(25,7,'2018-09-11',3256911),
	(26,8,'2018-09-11',3256911),
	(27,9,'2018-09-11',3256911),
	(28,1,'2018-09-11',3256912),
	(29,2,'2018-09-11',3256912),
	(30,3,'2018-09-11',3256912),
	(31,4,'2018-09-11',3256912),
	(32,5,'2018-09-11',3256912),
	(33,6,'2018-09-11',3256912),
	(34,7,'2018-09-11',3256912),
	(35,8,'2018-09-11',3256912),
	(36,9,'2018-09-11',3256912),
	(37,1,'2018-09-11',3256913),
	(38,2,'2018-09-11',3256913),
	(39,3,'2018-09-11',3256913),
	(40,4,'2018-09-11',3256913),
	(41,5,'2018-09-11',3256913),
	(42,6,'2018-09-11',3256913),
	(43,7,'2018-09-11',3256913),
	(44,8,'2018-09-11',3256913),
	(45,9,'2018-09-11',3256913),
	(46,1,'2018-09-11',3256914),
	(47,2,'2018-09-11',3256914),
	(48,3,'2018-09-11',3256914),
	(49,4,'2018-09-11',3256914),
	(50,5,'2018-09-11',3256914),
	(51,6,'2018-09-11',3256914),
	(52,7,'2018-09-11',3256914),
	(53,8,'2018-09-11',3256914),
	(54,9,'2018-09-11',3256914);

/*!40000 ALTER TABLE `t_typefile_indicators` ENABLE KEYS */;
UNLOCK TABLES;


# Affichage de la table t_users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `t_users`;

CREATE TABLE `t_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `fullname` varchar(100) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `t_users` WRITE;
/*!40000 ALTER TABLE `t_users` DISABLE KEYS */;

INSERT INTO `t_users` (`id`, `username`, `password`, `fullname`, `status`)
VALUES
	(1,'@Lama','@@@@','Hornel LAMA',1),
	(2,'nico','','Danny Lama Wosaa',1),
	(3,'riddy','','Riddy Ndoma',1),
	(17,'kate','','Kindu Kate',1),
	(18,'menga','','Franky Bopamu',1),
	(19,'nancy','','Nancy Bongo',0),
	(20,NULL,NULL,NULL,0),
	(21,NULL,NULL,NULL,0),
	(22,NULL,NULL,NULL,0),
	(23,NULL,NULL,NULL,0),
	(24,NULL,NULL,NULL,0),
	(25,NULL,NULL,NULL,0),
	(26,NULL,NULL,NULL,0),
	(27,NULL,NULL,NULL,0),
	(28,NULL,NULL,NULL,0),
	(29,NULL,NULL,NULL,0),
	(30,NULL,NULL,NULL,0),
	(31,NULL,NULL,NULL,0),
	(32,NULL,NULL,NULL,0),
	(33,NULL,NULL,NULL,0),
	(34,NULL,NULL,NULL,0),
	(35,NULL,NULL,NULL,0),
	(36,NULL,NULL,NULL,0),
	(37,NULL,NULL,NULL,0),
	(38,NULL,NULL,NULL,0),
	(39,NULL,NULL,NULL,0),
	(40,NULL,NULL,NULL,0),
	(41,NULL,NULL,NULL,0),
	(42,NULL,NULL,NULL,0),
	(43,NULL,NULL,NULL,0),
	(44,NULL,NULL,NULL,0),
	(45,NULL,NULL,NULL,0),
	(46,NULL,NULL,NULL,0),
	(47,NULL,NULL,NULL,0),
	(48,NULL,NULL,NULL,0),
	(49,NULL,NULL,NULL,0),
	(50,NULL,NULL,NULL,0);

/*!40000 ALTER TABLE `t_users` ENABLE KEYS */;
UNLOCK TABLES;


# Affichage de la table t_years_fixed
# ------------------------------------------------------------

DROP TABLE IF EXISTS `t_years_fixed`;

CREATE TABLE `t_years_fixed` (
  `id` int(11) NOT NULL,
  `status` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
