insert into plats(nom, type, prix) values 
    /* plats principal */
    ('Gratin de pâtes aux fromages', 'p', 500),
    ('Escalope de poulet à la moutarde', 'p', 1000),
    ('Courgettes gratinées', 'p', 400),
    ('Gratin de pâtes au thon et brocolis', 'p', 600),
    ('Spaghetti alla carbonara', 'p', 700),
    ('Pâtes au saumon fumé', 'p', 1200),
    ('Gratin de chou-fleur', 'p', 500),
    ('Gratin pommes de terre raclette', 'p', 400),
    ('Pommes de terre sautées', 'p', 350 ),
    ('Gratin de riz au poulet', 'p', 500),

    /* DESSERTS */
    ('Tarte aux pommes', 'd', 300),
    ('Tarte chocolat poire', 'd',300 ),
    ('Verrines de framboises', 'd', 350),
    ('Pancakes', 'd', 400),
    ('Tiramisu aux fraises', 'd', 300),
    ('Mousse au chocolat', 'd', 300),
    ('Crepe à la confiture de framboise', 'd', 250),
    ('Crème brulée', 'd', 200),
    ('Crème caramel', 'd', 250),
    ('Galette des rois', 'd', 500),

    /*Entrées */
    ('Salade de chèvre chaud','e', 400),
    ('Soupe aux légumes verts','e', 350),
    ('Soupe aux brocolis','e', 350),
    ('Tortilla aux légumes','e', 350),
    ('Avocat aux crevettes','e', 600),
    ('Soupe de petits pois','e', 350),
    ('Flan de courgettes','e', 350),
    ('Tartelettes chèvre et ciboulette','e', 500),
    ('Oeufs mimosa au saumon fumé','e', 600),
    ('Avocats au thon','e', 500);

insert into ingrediants(nomIngrediant) values
    ('Saumon fumé '),
    ('Mayonnaise'),
    ('Sel'),
    ('Poivre'),
    ('Avocats'),
    ('Thon'),
    ('Crème fraîche'),
    ('Courgettes'),
    ('Lait'),
    ('Soupe de Maïzena'),
    ('Petits pois'),
    ('Brocolis'),
    ('Pate sablée'),
    ('Pomme'),
    ('Sucre en poudre'),
    ('Oeuf'),
    ('Soupe de calvados'),
    ('poudre d\'amandes'),
    ('sucre vanillé'),
    ('poires'),
    ('chocolat noir dessert'),
    ('amandes effilées'),
    ('framboise'),
    ('mascarpone'),
    ('farine'),
    ('beurre'),
    ('levure chimique');

insert into composer(idIngrediants, idPlat, quantite, unite) values 
    (5, 1, 200,'g'),
    (3, 1, 500,'mL'),
    (1, 1, 300, 'g'),
    (13 , 2 , 3 ,'Boites'),
    (19, 2 , 200 ,'g'),
    (26, 2, 2, 'Cuillères'),
    (7, 3, 100,'mL'),
    (22, 3, 200, 'g'),
    (9, 3, 300, 'mL'),
    (11, 4, 2, 'Boites'),
    (25, 4, 64, 'g'),
    (16, 4, 16, 'L'),
    (20, 5, 45 ,'g'),
    (17, 5, 20, 'mL'),
    (18, 5, 4, 'Cuillères'),

    (5, 6, 200,'g'),
    (3, 6 , 500,'mL'),
    (1, 6, 300, 'g'),
    (13 , 7 , 3 ,'Boites'),
    (19, 7 , 200 ,'g'),
    (26, 7, 2, 'Cuillères'),
    (7, 8, 100,'mL'),
    (22, 8, 200, 'g'),
    (9, 8, 300, 'mL'),
    (11, 9, 2, 'Boites'),
    (25, 9, 64, 'g'),
    (16, 9, 16, 'L'),
    (20, 10, 45 ,'g'),
    (17, 10, 20, 'mL'),
    (18, 10, 4, 'Cuillères'),

    (5, 11, 200,'g'),
    (3, 11, 500,'mL'),
    (1, 11, 300, 'g'),
    (13 , 12 , 3 ,'Boites'),
    (19, 12 , 200 ,'g'),
    (26, 12, 2, 'Cuillères'),
    (7, 13, 100,'mL'),
    (22, 13, 200, 'g'),
    (9, 13, 300, 'mL'),
    (11, 14, 2, 'Boites'),
    (25, 14, 64, 'g'),
    (16, 14, 16, 'L'),
    (20, 15, 45 ,'g'),
    (17, 15, 20, 'mL'),
    (18, 15, 4, 'Cuillères'),
    
    (5, 16, 200,'g'),
    (3, 16 , 500,'mL'),
    (1, 16, 300, 'g'),
    (13 , 17 , 3 ,'Boites'),
    (19, 17 , 200 ,'g'),
    (26, 17, 2, 'Cuillères'),
    (7, 18, 100,'mL'),
    (22, 18, 200, 'g'),
    (9, 18, 300, 'mL'),
    (11, 19, 2, 'Boites'),
    (25, 19, 64, 'g'),
    (16, 19, 16, 'L'),
    (20, 20, 45 ,'g'),
    (17, 20 , 20, 'mL'),
    (18, 20, 4, 'Cuillères'),

    (5, 21, 200,'g'),
    (3, 21 , 500,'mL'),
    (1, 21, 300, 'g'),
    (13 , 22 , 3 ,'Boites'),
    (19, 22 , 200 ,'g'),
    (26, 22, 2, 'Cuillères'),
    (7, 23, 100,'mL'),
    (22, 23, 200, 'g'),
    (9, 23, 300, 'mL'),
    (11, 24, 2, 'Boites'),
    (25, 24, 64, 'g'),
    (16, 24, 16, 'L'),
    (20, 25, 45 ,'g'),
    (17, 25, 20, 'mL'),
    (18, 25, 4, 'Cuillères'),

    (5, 26, 200,'g'),
    (3, 26, 500,'mL'),
    (1, 26, 300, 'g'),
    (13 , 27 , 3 ,'Boites'),
    (19, 27 , 200 ,'g'),
    (26, 27, 2, 'Cuillères'),
    (7, 28, 100,'mL'),
    (22, 28, 200, 'g'),
    (9, 28, 300, 'mL'),
    (11, 29, 2, 'Boites'),
    (25, 29, 64, 'g'),
    (16, 29, 16, 'L'),
    (20, 30, 45 ,'g'),
    (17, 30, 20, 'mL'),
    (18, 30, 4, 'Cuillères');

/*Insertion d\'un admin*/
insert into admins(nomAdmin, prenom, motDepasse) values ('Boss', 'Athmane', 'atlas@2020');

/*Creation d\'un menu*/

insert into menu(date) values ('2020-11-08');

insert into contient(idPlat , idMenu) values (1,1),(2,1),(3,1),(11,1),(12,1),(13,1),(21,1),(22,1),(23,1);
  
        
