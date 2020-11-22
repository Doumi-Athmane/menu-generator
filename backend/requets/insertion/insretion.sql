/*------------------------------------------- INSERTION A LA TABLE PLAT----------------------------------*/
insert into plat (idPlat ,nom, prix, fixe) values 

/*---------------------------------ENTREES------------------- ----------------*/
    (1,'Salade composée',350,1),
    (2,'Hmiss',200,1),
    (3,'Zaalouka ',200,1),
    (4,'Bourek poulet ou viande',100,1),
    (5,'Chorba hamra ',350,0),
    (6,'Mini humberger ',150,0),
    (7,'Maadnoussia poulet',450,0),
    (8,'Soupe de courgettes',350,0),
    (9,'Mini pizza ',150,0),
    (10,'Gratin d’épinards et poulet',450,0),
    (11,'Chorba beida ',350,0),
    (12,'Fricassée',150,0),
    (13,'Gratin de pomme de terre poulet et fromage ',450,0),
    (14,'Soupe de lentilles ',350,0),
    (15,'Mini croissants',150,0),
    (16,'Tajine djbene',450,0),
    (17,'Soupe de légumes',350,0),
    (18,'Batbout',150,0),
    (19,'Gratin de courgettes',450,0),
    (20,'Hrira',350,0),
    (21,'Gratin aux Légumes ',450,0),
    (22,'Cherba',350,0),
    (23,'Croisant salé',150,0),
    (24,'Soupe de pomme de terre',350,0),
    (25,'Chorba beida ',350,0),
    (26,'Brik',250,0),
    (27,'Gratin aux légumes avec du poulet',450,0),
    (28,'Fricassées tunisiennes ',150,0),
    (29,'Gratin poulet et champignons ',450,0),
    (30,'Chorba frik ',350,0),
    (31,'Hachis Parmentier ',450,0),
    (32,'Soupe  corail ',350,0),
    (33,'Hachés parmantier',450,0),
  






/*---------------------------------Plats ------------------------------------*/

    (50,'Cuisse de poulet farci au fromage avec Legumes sautés ',750,0),
    (51,'Dolma courgette avec pomme de terre',750,0),
    (52,'Poulet maison façon KFC avec pomme de terre et carottes',750,0),
    (53,'Spaghetti bolognaise',750,0),
    (54,'Tchakhtchoukha viande ou poulet ',750,0),
    (55,'Cordon bleu avec Légumes sautés ',750,0),
    (56,'Tlitli viande ou poulet ',750,0),
    (57,'Poulet farci avec Legumes sautés ',750,0),
    (58,'Mhammar poulet au four avec légumes sautés ',750,0),
    (59,'Tadjine viande et poulet avec pomme de terre et petits pois',750,0),
    (60,'kbab',750,0),
    (61,'Trida poulet ou viande',750,0),
    (62,'Tadjine el khoukh',750,0),
    (63,'Roulé  de viande avec légumes sautés',750,0),
    (64,'Adjijate viande avec légumes sautés',750,0),
    (65,'Tajine zitoune ',750,0),
    (66,'Le Fameux TchiwChiw aux Legumes avec du petit lait',750,0),
    (67,'Chtitha Sardine',750,0),
    (68,'Kbab poulet',750,0),
    (69,'Tadjine de viande avec haricots verts et pomme de terre',750,0),
    (70,'Roulé de poulet avec légumes sautés',750,0),
    (71,'Tajine de viande hachée petit pois pommes de terre',750,0),
    (72,'Rechta ',750,0),
    (73,'Mtewem viande ou poulet ',750,0),
    (74,'Accras de poulet avec légumes sautés',750,0),
    (75,'Brochettes de kefta avec légumes sautés ',750,0),
    (76,'Douara ',750,0),
    (77,'Tlitli boulettes de viande',650,0),
    (78,'Les accras de poulet avec légumes sautés',750,0),
    (79,'Rechta poulet',750,0),
   




/*---------------------------------Desserts ---------------------------------*/

    (100,'Baghrir au miel',120,1),
    (101,'Ktaif',300,1),
    (102,'Tarte aux pommes',250,0),
    (103,'Chesse cake fruit des bois',250,0),
    (104,'Tarte crème brûlée',250,0),
    (105,'Tarte chocolat meringuée ',250,0),
    (106,'Gateaux Mikawsen ',250,0),
    (107,'Tiramisu ',250,0),
    (108,'Mousse au chocolat ',250,0),
    (109,'Fondant au chocolat ',250,0),
    (110,'Brigaderio ',120,0),    
    (111,'Gâteau mojito ',250,0),
    (112,'Gâteau Rafaello ',250,0),
    (113,'Delice 3 chocolats ',250,0),
    (114,'Cheesecake Nutella ',250,0),
    (115,'Fraisier ',250,0),
    (116,'Tarte au citron ',250,0),
    (117,'Fondant au chocolat ',250,0),
    (118,'Amandine ',250,0),
    (119,'Ktayef amande et noix',300,0),
    (120,'Dattes fourées ',120,0),
    (121,'Les mendiants au chocolat',80,0);
    
/*------------------------------------------- INSERTION A LA TABLE ENTREE----------------------------------*/

insert into entree (idPlat) values (1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12),(13),(14),(15),(16),(17),(18),(19),(20),(21),(22),(23),(24),(25),(26),(27),(28),(29),(30),(31),(32),(33)

/*------------------------------------------- INSERTION A LA TABLE PRINCIPAL----------------------------------*/

insert into principal (idPlat,type) values (50,'poulet'),(51,'viande'),(52,'poulet'),(53,'viande'),(54,'poulet'),
(55,'viande'),(56,'viande'),(57,'poulet'),(58,'poulet'),(59,'viande'),(60,'viande'),(61,'poulet'),(62,'poulet'),(63,'viande'),
(64,'viande'),(65,'poulet'),(66,'poulet'),(67,'viande'),(68,'poulet'),(69,'viande'),(70,'poulet'),(71,'viande'),(72,'viande'),
(73,'viande'),(74,'poulet'),(75,'viande'),(76,'viande'),(77,'viande'),(78,'poulet'),(79,'poulet')


 
/*------------------------------------------- INSERTION A LA TABLE DESSERT----------------------------------*/


insert into dessert (idPlat) values (100),(101),(102),(103),(104),(105),(106),(107),(108),(109),(110),(111),(112),(113),(114),(115),(116),(117),(118),(119),(120),(121)

