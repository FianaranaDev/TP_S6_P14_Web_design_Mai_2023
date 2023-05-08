\c postgres
DROP DATABASE ia;
CREATE DATABASE ia;
\c ia;

CREATE TABLE Utilisateur (
                             id SERIAL PRIMARY KEY NOT NULL,
                             nameUtilisateur VARCHAR(100) NOT NULL,
                             mdpUtilisateur VARCHAR(100) NOT NULL
);

INSERT INTO Utilisateur(nameUtilisateur,mdpUtilisateur) VALUES('test','mdpandrana');


CREATE TABLE Categorie(
    id SERIAL PRIMARY KEY NOT NULL,
    nomCategorie VARCHAR(100)  NOT NULL
);
INSERT INTO Categorie(nomCategorie) VALUES ('quoi'),('pourquoi'),('11eme');


CREATE TABLE Contenue (
    id SERIAL PRIMARY KEY NOT NULL,
    titre VARCHAR(100) NOT NULL,
    idcategorie INTEGER NOT NULL REFERENCES Categorie(id),
    snippet VARCHAR(700),
    datepublication date not null
);

INSERT INTO Contenue(titre,idcategorie,snippet,datepublication)
VALUES ('rush Hour',1,'cette fikme dfa','2022-01-5'),
        ('Jackie',1,'fds','2022-01-6'),
         ('BOB',1,'je ne suis pas','2022-01-7');

CREATE TABLE Paragraphe(
    id SERIAL PRIMARY KEY NOT NULL,
    idContenue INTEGER NOT NULL REFERENCES Contenue(id),
    titrepara VARCHAR(50) NOT NULL,
    descriptione text
);

INSERT INTO Paragraphe(idContenue,titrepara,descriptione)VALUES
    (1,'Limportance de lexercice physique','Lexercice physique joue un rôle essentiel pour maintenir une bonne santé et un bien-être général. Il aide à renforcer les muscles, à améliorer la santé cardiaque, à maintenir un poids santé et à augmenter les niveaux dénergie. En outre, lexercice régulier favorise la libération dendorphines, des substances chimiques qui procurent une sensation de bonheur et de bien-être. Que ce soit une simple marche, une séance de sport ou une activité en plein air, inclure lexercice physique dans notre routine quotidienne est bénéfique pour notre corps et notre esprit.')
    ,(1,' Les avantages dune alimentation équilibrée','Une alimentation équilibrée et nutritive est essentielle pour maintenir un mode de vie sain. Les aliments riches en nutriments tels que les fruits, les légumes, les protéines maigres et les grains entiers fournissent à notre corps lénergie nécessaire pour fonctionner correctement. Une alimentation équilibrée aide à renforcer le système immunitaire, à maintenir un poids santé, à prévenir les maladies chroniques telles que les maladies cardiaques et le diabète, et à améliorer la santé globale. Faire des choix alimentaires sains et éviter les aliments transformés est une habitude bénéfique à adopter.')
    ,(1,'Limportance du sommeil réparateur','Un bon sommeil joue un rôle crucial dans notre santé physique et mentale. Pendant le sommeil, notre corps se répare, nos tissus se régénèrent et notre cerveau consolide les informations apprises tout au long de la journée. Le manque de sommeil peut entraîner des problèmes tels que la fatigue, la baisse des performances cognitives, lirritabilité et même des problèmes de santé à long terme. Il est recommandé de viser environ 7 à 9 heures de sommeil de qualité chaque nuit pour favoriser une bonne santé et une bonne qualité de vie.')
    ,(2,'Les bienfaits de la gestion du stress','La gestion du stress est essentielle pour maintenir un équilibre émotionnel et une bonne santé mentale. Le stress chronique peut avoir des effets néfastes sur notre corps, augmentant le risque de maladies cardiaques, de troubles de lhumeur et de troubles du sommeil. Il est important de trouver des techniques de gestion du stress qui fonctionnent pour nous, comme la méditation, la respiration profonde, lexercice physique régulier ou lexpression créative. En prenant le temps de se détendre et de se recentrer, nous pouvons améliorer notre bien-être global.')
    ,(2,' Les avantages dune attitude positive','Adopter une attitude positive peut avoir un impact significatif sur notre vie. Une perspective optimiste nous permet de faire face aux défis avec résilience, daméliorer nos relations interpersonnelles et de favoriser un sentiment de satisfaction. Une attitude positive peut également renforcer notre système immunitaire, réduire le stress');


