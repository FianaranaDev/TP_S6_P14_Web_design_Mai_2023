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
                          keywords VARCHAR(100) NOT NULL,
                          titre VARCHAR(100) NOT NULL,
                          idCategorie INTEGER NOT NULL REFERENCES Categorie(id),
                          descriimage VARCHAR(50),
                          resume VARCHAR(1000),
                          snippet VARCHAR(700),
                          datepublication date not null,
                          image VARCHAR(100) NOT NULL
);

INSERT INTO Contenue(titre,image,descriimage,idCategorie,keywords,snippet,resume,datepublication)
VALUES ('rush Hour','1.jpeg','otrany sary',1,'das fad fad ds','cette fikme dfa','Professionnel de lnformatique avec 5 ans dexpérience dans le développement web et la gestion de projets. Fortes compétences en résolution de problèmes et en travail déquipe. Passionné par les nouvelles technologies et constamment à la recherche de défis stimulants.','2022-01-5'),
       ('Jackie','1.jpeg','photo',1,'fsd ds fsd fd','fds','Professionnelle chevronnée en stratégie dentreprise et marketing avec 8 ans dexpérience. Solide expérience dans lanalyse de données pour prendre des décisions éclairées. Aptitude à diriger des équipes et à atteindre les objectifs fixés. Orientée résultats et axée sur linnovation.','2022-01-6'),
       ('BOB','1.jpeg','bien le sary',1,'de bg ge','mlay',' Designer graphique créatif avec 3 ans dexpérience dans la conception graphique, le branding et lillustration. Maîtrise des outils de conception tels que Adobe Photoshop et Illustrator. Capacité à transformer des concepts en visuels attrayants et mémorables. Passionné par lart et lesthétique, toujours à laffût des dernières tendances du design.','2022-01-7');

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


