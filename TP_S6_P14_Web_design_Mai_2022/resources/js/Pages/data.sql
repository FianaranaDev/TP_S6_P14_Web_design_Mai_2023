

DROP TABLE Categorie CASCADE ; DROP TABLE Contenue CASCADE;DROP TABLE Paragraphe CASCADE;

CREATE TABLE Categorie(
                          id SERIAL PRIMARY KEY NOT NULL,
                          nomCategorie VARCHAR(100)  NOT NULL
);


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

