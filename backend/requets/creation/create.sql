#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: Ingrediant
#------------------------------------------------------------

CREATE TABLE Ingrediant(
        idIngrediant Int  Auto_increment  NOT NULL ,
        nomIngrediant Varchar (100) NOT NULL
	,CONSTRAINT Ingrediant_PK PRIMARY KEY (idIngrediant)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Plat
#------------------------------------------------------------

CREATE TABLE Plat(
        idPlat Int  Auto_increment  NOT NULL ,
        nom    Varchar (100) NOT NULL ,
        prix   Int NOT NULL ,
        fixe   Bool NOT NULL
	,CONSTRAINT Plat_PK PRIMARY KEY (idPlat)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Menu
#------------------------------------------------------------

CREATE TABLE Menu(
        idMenu Int  Auto_increment  NOT NULL ,
        date   Date NOT NULL
	,CONSTRAINT Menu_PK PRIMARY KEY (idMenu)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Admin
#------------------------------------------------------------

CREATE TABLE Admin(
        idAdmin    Int  Auto_increment  NOT NULL ,
        nomAdmin   Varchar (50) NOT NULL ,
        prenom     Varchar (50) NOT NULL ,
        motDePasse Varchar (50) NOT NULL
	,CONSTRAINT Admin_PK PRIMARY KEY (idAdmin)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Entree
#------------------------------------------------------------

CREATE TABLE Entree(
        idPlat Int NOT NULL ,
        type   Varchar (50)
	,CONSTRAINT Entree_PK PRIMARY KEY (idPlat)

	,CONSTRAINT Entree_Plat_FK FOREIGN KEY (idPlat) REFERENCES Plat(idPlat) on delete cascade
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Dessert
#------------------------------------------------------------

CREATE TABLE Dessert(
        idPlat Int NOT NULL 
	,CONSTRAINT Dessert_PK PRIMARY KEY (idPlat)

	,CONSTRAINT Dessert_Plat_FK FOREIGN KEY (idPlat) REFERENCES Plat(idPlat) on delete cascade
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Principal
#------------------------------------------------------------

CREATE TABLE Principal(
        idPlat Int NOT NULL ,
        type   Varchar (50) NOT NULL 
	,CONSTRAINT Principal_PK PRIMARY KEY (idPlat)

	,CONSTRAINT Principal_Plat_FK FOREIGN KEY (idPlat) REFERENCES Plat(idPlat) on delete cascade
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Composer
#------------------------------------------------------------

CREATE TABLE Composer(
        idIngrediant Int NOT NULL ,
        idPlat        Int NOT NULL ,
        quantite      Int NOT NULL ,
        unite         Char (2) NOT NULL
	,CONSTRAINT Composer_PK PRIMARY KEY (idIngrediant,idPlat)

	,CONSTRAINT Composer_Ingrediant_FK FOREIGN KEY (idIngrediant) REFERENCES Ingrediant(idIngrediant) on delete cascade
	,CONSTRAINT Composer_Plat0_FK FOREIGN KEY (idPlat) REFERENCES Plat(idPlat) on delete cascade
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Creer
#------------------------------------------------------------

CREATE TABLE Creer(
        idPlat  Int NOT NULL ,
        idAdmin Int NOT NULL
	,CONSTRAINT Creer_PK PRIMARY KEY (idPlat,idAdmin)

	,CONSTRAINT Creer_Plat_FK FOREIGN KEY (idPlat) REFERENCES Plat(idPlat) on delete cascade
	,CONSTRAINT Creer_Admin0_FK FOREIGN KEY (idAdmin) REFERENCES Admin(idAdmin) on delete cascade
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Generer
#------------------------------------------------------------

CREATE TABLE Generer(
        idMenu  Int NOT NULL ,
        idAdmin Int NOT NULL
	,CONSTRAINT Generer_PK PRIMARY KEY (idMenu,idAdmin)

	,CONSTRAINT Generer_Menu_FK FOREIGN KEY (idMenu) REFERENCES Menu(idMenu) on delete cascade
	,CONSTRAINT Generer_Admin0_FK FOREIGN KEY (idAdmin) REFERENCES Admin(idAdmin) on delete cascade
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Contient
#------------------------------------------------------------

CREATE TABLE Contient(
        idPlat Int NOT NULL ,
        idMenu Int NOT NULL
	,CONSTRAINT Contient_PK PRIMARY KEY (idPlat,idMenu)

	,CONSTRAINT Contient_Plat_FK FOREIGN KEY (idPlat) REFERENCES Plat(idPlat) on delete cascade
	,CONSTRAINT Contient_Menu0_FK FOREIGN KEY (idMenu) REFERENCES Menu(idMenu) on delete cascade
)ENGINE=InnoDB;