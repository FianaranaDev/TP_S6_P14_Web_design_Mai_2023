\c postgres
DROP DATABASE ia;
CREATE DATABASE ia;
\c ia;




CREATE TABLE Categorie(
                          id SERIAL PRIMARY KEY NOT NULL,
                          nomCategorie VARCHAR(100)  NOT NULL
);
INSERT INTO Categorie(nomCategorie) VALUES ('Élévation'),('pourquoi'),('11eme');


CREATE TABLE Contenue (
                          id SERIAL PRIMARY KEY NOT NULL,
                          keywords VARCHAR(100) NOT NULL,
                          titre VARCHAR(100) NOT NULL,
                          idcategorie INTEGER NOT NULL REFERENCES Categorie(id),
                          descriimage VARCHAR(50),
                          resume VARCHAR(1000),
                          snippet VARCHAR(700),
                          datepublication date not null,
                          image VARCHAR(100) NOT NULL
);







CREATE TABLE Paragraphe(
                           id SERIAL PRIMARY KEY NOT NULL,
                           idContenue INTEGER NOT NULL REFERENCES Contenue(id),
                           imagepara VARCHAR(50) NOT NULL,
                           titrepara VARCHAR(50) NOT NULL,
                           descriptione text
);

