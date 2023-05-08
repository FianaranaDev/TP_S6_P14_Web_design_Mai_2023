-- Catégorie 1: Apprentissage automatique --
INSERT INTO Categorie (nomCategorie) VALUES ('Apprentissage automatique');

-- Contenu 1.1: Introduction à l'apprentissage automatique --
INSERT INTO Contenue (keywords, titre, idcategorie, descriimage, resume, snippet, datepublication, image)
VALUES ('apprentissage automatique, introduction', 'Introduction à l''apprentissage automatique', 1, '1.jpg', 'Ce contenu présente une introduction générale à l''apprentissage automatique.', 'L''apprentissage automatique est une branche de l''intelligence artificielle qui se concentre sur le développement de techniques permettant aux ordinateurs d''apprendre à partir de données et d''améliorer leurs performances au fil du temps. Cela implique l''utilisation d''algorithmes et de modèles pour analyser les données, détecter des schémas et prendre des décisions autonomes.', '2023-01-01', 'image_contenu1.jpg');

INSERT INTO Paragraphe (idContenue, imagepara, titrepara, descriptione)
VALUES (1, '2.jpg', 'Qu''est-ce que l''apprentissage automatique ?', 'L''apprentissage automatique est une approche de l''intelligence artificielle qui permet aux systèmes informatiques d''apprendre à partir de données et d''expériences, sans être explicitement programmés. Les algorithmes d''apprentissage automatique permettent aux machines de reconnaître des modèles, de prendre des décisions et de générer des prédictions.');

INSERT INTO Paragraphe (idContenue, imagepara, titrepara, descriptione)
VALUES (1, '3.jpg', 'Types d''apprentissage automatique', 'Il existe différents types d''apprentissage automatique, notamment l''apprentissage supervisé, l''apprentissage non supervisé et l''apprentissage par renforcement. Dans l''apprentissage supervisé, les modèles sont formés sur des données étiquetées, où les résultats attendus sont connus. L''apprentissage non supervisé vise à découvrir des modèles et des structures cachés dans les données non étiquetées. L''apprentissage par renforcement implique l''apprentissage par essais et erreurs, où le modèle apprend à partir des récompenses et des punitions obtenues lors de ses interactions avec un environnement.');




-- Contenu 1.2: Réseaux de neurones artificiels --
INSERT INTO Contenue (keywords, titre, idcategorie, descriimage, resume, snippet, datepublication, image)
VALUES ('réseaux de neurones artificiels, deep learning', 'Réseaux de neurones artificiels', 1, '4.jpg', 'Ce contenu présente les réseaux de neurones artificiels et le concept de deep learning.', 'Les réseaux de neurones artificiels sont des modèles informatiques inspirés du fonctionnement du cerveau humain. Ils sont utilisés pour effectuer des tâches telles que la reconnaissance d''images, la traduction automatique et la prédiction. Le deep learning est une approche du machine learning qui utilise des réseaux de neurones artificiels profonds pour apprendre à partir de données de grande taille et de structures complexes.', '2023-02-01', 'image_contenu2.jpg');

INSERT INTO Paragraphe (idContenue, imagepara, titrepara, descriptione)
VALUES (2, '5.jpg', 'Structure d''un réseau de neurones artificiels', 'Un réseau de neurones artificiels est composé de couches de neurones interconnectés. Chaque neurone reçoit des entrées, effectue des calculs et transmet les résultats à d''autres neurones. Les couches sont généralement organisées en une architecture dite "feedforward", où les informations se propagent de la couche d''entrée à la couche de sortie. Les poids et les biais des connexions entre les neurones sont ajustés lors de l''apprentissage pour optimiser les performances du réseau.');

INSERT INTO Paragraphe (idContenue, imagepara, titrepara, descriptione)
VALUES (2, '6.jpg', 'Applications du deep learning', 'Le deep learning a révolutionné de nombreux domaines tels que la vision par ordinateur, la reconnaissance vocale, la traduction automatique et la recommandation de contenu. Les réseaux de neurones profonds peuvent extraire automatiquement des caractéristiques pertinentes à partir des données, ce qui leur permet de résoudre des problèmes complexes avec une grande précision. Par exemple, dans la vision par ordinateur, le deep learning a permis des avancées significatives dans la détection et la classification d''objets dans les images.');





-- Catégorie 2: Traitement du langage naturel --
INSERT INTO Categorie (nomCategorie) VALUES ('Traitement du langage naturel');

-- Contenu 2.1: Introduction au traitement du langage naturel --
INSERT INTO Contenue (keywords, titre, idcategorie, descriimage, resume, snippet, datepublication, image)
VALUES ('traitement du langage naturel, NLP', 'Introduction au traitement du langage naturel', 2, '7.jpg', 'Ce contenu présente une introduction au traitement du langage naturel (NLP).', 'Le traitement du langage naturel est une branche de l''intelligence artificielle qui vise à permettre aux machines de comprendre, d''interpréter et de générer un langage humain. Cela implique la reconnaissance et l''analyse des mots, de la syntaxe, de la sémantique et du contexte dans les données textuelles.', '2023-03-01', 'image_contenu3.jpg');

INSERT INTO Paragraphe (idContenue, imagepara, titrepara, descriptione)
VALUES (3, '8.jpg', 'Les défis du traitement du langage naturel', 'Le traitement du langage naturel présente de nombreux défis, notamment la compréhension du langage ambigu, la gestion des erreurs orthographiques et grammaticales, ainsi que la prise en compte du contexte et de l''ambiguïté dans les interprétations. Les tâches courantes en NLP incluent la classification de texte, l''analyse des sentiments, la traduction automatique et la génération de texte.');

INSERT INTO Paragraphe (idContenue, imagepara, titrepara, descriptione)
VALUES (3, '9.jpg', 'Applications du traitement du langage naturel', 'Le traitement du langage naturel trouve des applications dans de nombreux domaines, tels que les chatbots, l''analyse des opinions sur les réseaux sociaux, la recherche d''informations et la rédaction automatique. Les chatbots utilisent des techniques de NLP pour comprendre et répondre aux requêtes des utilisateurs de manière naturelle. L''analyse des opinions permet d''extraire des informations utiles à partir des commentaires et des avis des utilisateurs sur les médias sociaux. La recherche d''informations utilise des techniques de NLP pour analyser et organiser les documents afin de fournir des résultats pertinents aux requêtes des utilisateurs.');





-- Catégorie 3: Vision par ordinateur --
INSERT INTO Categorie (nomCategorie) VALUES ('Vision par ordinateur');

-- Contenu 3.1: Introduction à la vision par ordinateur --
INSERT INTO Contenue (keywords, titre, idcategorie, descriimage, resume, snippet, datepublication, image)
VALUES ('vision par ordinateur, computer vision', 'Introduction à la vision par ordinateur', 3, '10.jpg', 'Ce contenu présente une introduction à la vision par ordinateur.', 'La vision par ordinateur est un domaine de l''intelligence artificielle qui vise à permettre aux machines de comprendre et d''interpréter des images et des vidéos. Cela inclut la détection d''objets, la reconnaissance faciale, la segmentation d''images et bien plus encore.', '2023-04-01', 'image_contenu4.jpg');

INSERT INTO Paragraphe (idContenue, imagepara, titrepara, descriptione)
VALUES (4, '11.jpg', 'Les tâches de vision par ordinateur', 'La vision par ordinateur englobe un large éventail de tâches, notamment la détection d''objets, la reconnaissance et la classification d''objets, la localisation d''objets, la reconnaissance faciale, la segmentation d''images et la reconstruction 3D. Ces tâches sont réalisées en utilisant des algorithmes et des modèles qui analysent les caractéristiques visuelles des données.');

INSERT INTO Paragraphe (idContenue, imagepara, titrepara, descriptione)
VALUES (4, '12.jpg', 'Applications de la vision par ordinateur', 'La vision par ordinateur a de nombreuses applications pratiques, telles que la surveillance vidéo, la réalité augmentée, les véhicules autonomes et la médecine. Par exemple, la surveillance vidéo utilise des techniques de vision par ordinateur pour détecter les intrusions, suivre les objets en mouvement et reconnaître les comportements suspects. Les véhicules autonomes utilisent la vision par ordinateur pour détecter les piétons, les panneaux de signalisation et les obstacles sur la route.');




