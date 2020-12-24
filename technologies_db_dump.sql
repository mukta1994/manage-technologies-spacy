-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: technologies_db
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Technologies`
--

DROP TABLE IF EXISTS `Technologies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Technologies` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  `Description` varchar(3000) NOT NULL,
  PRIMARY KEY (`Id`),
  FULLTEXT KEY `Name` (`Name`,`Description`),
  FULLTEXT KEY `idx_Technologies_Name` (`Name`),
  FULLTEXT KEY `idx_Technologies_Description` (`Description`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Technologies`
--

LOCK TABLES `Technologies` WRITE;
/*!40000 ALTER TABLE `Technologies` DISABLE KEYS */;
INSERT INTO `Technologies` VALUES (1,'Artificial Intelligence (AI)','AI refers to the programmed algorithms that automatically parse and apply knowledge. From security to sales applications within businesses of all sizes, AI is the largest force in emerging technology today.'),(2,'5G','5G’s improvements—low latency, intelligent power consumption, high device density and network slicing—make it a breakthrough and an opportunity for the channel. 5G will make augmented reality, smart cities and connected cars truly possible.'),(3,'Internet of Things (IoT)','IoT brings together information from a series of connected devices that allow for the creation of analytics of systems. These platforms, devices and datasets have the potential to provide insights, efficiencies and new business opportunities.'),(4,'Serverless computing','Serverless computing, or function as a service (FaaS), enables organizations to build applications that scale in real time, responding to demand that may change instantaneously by orders of magnitude. FaaS offers a consumption-based platform, allowing developers to quickly and cost effectively deploy applications.'),(6,'Augmented Reality / Virtual Reality (AR/VR)','AR/VR, also known as mixed reality technologies, are transforming the way we engage with machines, data and each other. Organizations are using mixed reality, AI and sensor technologies to enhance execution flexibility, operational efficiency and individual productivity.'),(8,'d','adsfdg'),(11,'uytrewhgfds','hgfdytre'),(13,'Blockchain kills fake news','By 2023, up to 30% of world news and video content will be authenticated as real by blockchain, countering deep fake technology.\nAlthough fake news has existed for centuries, social media bots have rapidly accelerated the rate at which this deliberate disinformation can be spread. In addition to traditional news stories, technology is being used to create convincing fake audio and video. However, organizations and governments are now turning to technology to help counter fake news, for example, by using blockchain technology to authenticate news photographs and video, as the technology creates an immutable and shared record of content that ideally is viewable to consumers.\n'),(14,'Second Hand become Climate Cool','More people will become increasingly tuned into the runaway cost of new high-end smartphones and the climate impact of making a new one. Extracting precious metals to make the phones has a significant carbon footprint. Though there isn’t a lot of data on the environmental impact of smartphone production, the UN claims that 80 percent of a smartphone’s carbon footprint comes from manufacturing, around four percent from transportation, and 16 percent from a lifetime of use. For climate conscious people, keeping the smartphone you have — or even buying a slightly used one — will be increasingly attractive in 2020.'),(15,'Walking Barcodes','This trend is about how our bodies are becoming our signature — effectively blending our digital and physical selves. It’s also about how living services — contextually-aware, sophisticated digital services — will segue from the digital world into the real world. Hyper-targeted customer experiences will become the norm in physical environments.\nIn entertainment, Disney piloted an interactive movie poster with Accenture Interactive. The AI-powered experience used photography and emotion recognition to enable a poster for the movie Dumbo, which could display a version of the movie poster that corresponded with the expression on the face of the person looking at it.'),(16,'Solar-powered Cars','Another interesting tech trend to anticipate will revolve around solar-powered cars. Many manufacturers are already working towards making solar cars a reality very soon. By allowing the car’s battery to be charged on the move, this could be an absolute game-changer for the EV market. There are already some interesting prototypes currently undergoing testing, and 2020 could see some of them closer to production. Others are attempting to develop solar-powered hybrids too.\nIf achieved, some estimate that the global market for solar-powered EVs could be in the order of $1 Billion in 2020. But, just as it is with every new technology, any models close to the production are incredibly expensive. One example, The Lightyear One, could set you back a whopping $107,000 a unit.'),(17,'Quantum Computing','Quantum computing is the engine that will drive our ability to process and analyze big data and will be the key to leveraging machine learning and the power of AI.'),(18,'Natural Language Processing','Natural language processing (NLP) is a field of AI that enables computers to analyze and understand human language. Speech-to-text converts human language to a programming language, and text-to-speech converts a computer operation to audible response.\n\n'),(19,' Education in your Pocket','There will be an evolving shift from just accessing information, to accessing tools to using technology on the go to actually learn. Whoever you are, whatever you want to learn, study or revise, there are now tools to be able to learn anything from study and revision tools to large MOOCs to online tutors, all available immediately.\nShelley Osborne, VP Learning, Udemy: “There’s definitely been a significant shift to learners learning on their mobile devices. They’re truly on the go. A lot of our learners are doing it on the commute, on the train into work or on the bus — in that five-minute span. These are behaviors that match what we see in other digital spaces in terms of entertainment consumption, but it’s a new thing in the education space.”\n'),(20,'Drone Swarms replace Fireworks','Fireworks have been used for public celebrations for centuries, from Guy Fawkes’ Night, to the Fourth of July, Chinese New Year and Diwali.\nSince the time of Elizabeth I, we have come together, sometimes in our thousands, to watch in awe and wonder as the night sky is illuminated by increasingly elaborate, choreographed explosions.\nBut fireworks come at a cost — financial, human and environmental — which may make their continued use unsustainable. Fortunately, technological innovation is presenting a more benign substitute to pyrotechnics, which will also take entertainment to the next level: drone swarms.'),(21,'Digital Perfume','Currently, smell is almost impossible to convey digitally — but this is all expected to change. We may have all but lost our understanding of fragrances. Modern people use deodorant to conceal their body odors, and traffic exhaust fumes in our bustling megacities make us numb to olfactory sensations. We may even think of our noses just as a place to put our glasses, or as a reminder that we have caught a cold.\nThe experience of watching any type of video would feel more immersive if you could smell the action. In 2030, 56 percent expect to be able to digitally savor all the smells in films they watch. Although there have been attempts to incorporate scent during films as far back as the early 1960s, their failure to gain popularity have likely been due to a lack of effective technology rather than of popular interest.\n'),(22,'A new Digital Currency will become the main global currency.','Klaus Schwab: “Over the next decade there’s the potential for an entirely new form of money, “stablecoin.” If achieved, it could help include the world’s unbanked population and ensure a more stable financial system for all. Experimentation with blockchain in financial services has already led to the development of digital currencies like Bitcoin and Ethereum. But these remain ineffective and have proved prone to major fluctuations and misuse. Moreover, they are still hard to use in daily life, with few retailers accepting them as a form of payment. ­Libra, proposed by Facebook and backed by a consortium of other firms, conceptually might overcome some of those hurdles: It would be easy to use via a digital wallet on Facebook and would be stabilized by pegging it to a reserve basket of currencies (for more, see the feature story in this issue). But a “gold standard” of digital currencies has not emerged-yet. The real opportunity lies in major guarantors of the financial system, such as'),(24,'Spacy','spaCy is designed to help you do real work — to build real products, or gather real insights. The library respects your time, and tries to avoid wasting it. It\'s easy to install, and its API is simple and productive. We like to think of spaCy as the Ruby on Rails of Natural Language Processing.');
/*!40000 ALTER TABLE `Technologies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'technologies_db'
--
/*!50003 DROP PROCEDURE IF EXISTS `get_technologies_sp` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_technologies_sp`(IN page_Number INT, IN rec_per_page INT, OUT total_pages INT )
BEGIN
	declare offset_val INT DEFAULT 0;
    	declare pages INT DEFAULT 0;

    SET offset_val=(page_Number-1) * rec_per_page;
	set total_pages=(SELECT COUNT(*) FROM `Technologies`)/rec_per_page;
	Select  *, total_pages from Technologies order by Id desc LIMIT rec_per_page OFFSET offset_val;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `search_sp` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `search_sp`(IN search VARCHAR(255))
BEGIN
	SELECT * ,MATCH(Name, Description)
AGAINST(search IN BOOLEAN MODE) as score
 	FROM technologies_db.Technologies WHERE MATCH (Name, Description) AGAINST (search IN BOOLEAN MODE) > 0  ORDER BY score DESC LIMIT 20;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Technology_Create_Update_delete_sp` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Technology_Create_Update_delete_sp`(
      tAction VARCHAR(10)
      ,tId INT
      ,tName VARCHAR(100)
      ,tDescription VARCHAR(1000)
)
BEGIN
    -- SELECT
    IF tAction = "SELECT" THEN
        SELECT Id,
            Name,
            Description
        FROM Customers;
     END IF;
 
    -- INSERT
    IF tAction = "INSERT" THEN
        INSERT INTO Technologies(Name, Description)
        VALUES (tName, tDescription);
    END IF;
 
    -- UPDATE
    IF tAction = "UPDATE" THEN
        UPDATE Technologies
        SET Name = tName, Description = tDescription
        WHERE Id = tId;
    END IF;
     
    -- DELETE
    IF tAction = "DELETE" THEN
        DELETE FROM Technologies
        WHERE Id = tId;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-24  1:11:39
