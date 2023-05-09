INSERT INTO Categorie (nomCategorie) VALUES ('Apprentissage automatique');

INSERT INTO Contenue (keywords, titre, idcategorie, descriimage, resume, snippet, datepublication, image)
VALUES ('apprentissage automatique, introduction', 'Introduction à l''apprentissage automatique', 1, 'dsa.webp', 'Ce contenu présente une introduction générale à l''apprentissage automatique.',
        'L''apprentissage automatique est une branche de l''intelligence artificielle.', '2023-01-01', '1.webp');

INSERT INTO Paragraphe (idContenue, imagepara, titrepara, descriptione)
VALUES (1, '2.webp', 'Qu''est-ce que l''apprentissage automatique ?',
        'L''apprentissage automatique est une approche de l''intelligence artificielle qui permet aux systèmes informatiques d''apprendre à partir de données et d''expériences, sans être explicitement programmés.');

INSERT INTO Paragraphe (idContenue, imagepara, titrepara, descriptione)
VALUES (1, '3.webp', 'Types d''apprentissage automatique', 'Il existe différents types d''apprentissage automatique, notamment l''apprentissage supervisé, l''apprentissage non supervisé et l''apprentissage par renforcement.');

INSERT INTO Contenue (keywords, titre, idcategorie, descriimage, resume, snippet, datepublication, image)
VALUES ('réseaux de neurones artificiels, deep learning', 'Réseaux de neurones artificiels', 1, 'image_intro2.webp', 'Ce contenu présente les réseaux de neurones artificiels et le concept de deep learning.', 'Les réseaux de neurones artificiels sont des modèles informatiques .', '2023-02-01', '4.webp');

INSERT INTO Paragraphe (idContenue, imagepara, titrepara, descriptione)
VALUES (2, '5.webp', 'Structure d''un réseau de neurones artificiels', 'Un réseau de neurones artificiels est composé de couches de neurones interconnectés. Les couches sont généralement organisées en une architecture dite "feedforward". Les poids et les biais des connexions entre les neurones sont ajustés lors de l''apprentissage.');

INSERT INTO Paragraphe (idContenue, imagepara, titrepara, descriptione)
VALUES (2, '6.webp', 'Applications du deep learning', 'Le deep learning a révolutionné de nombreux domaines tels que la vision par ordinateur, la reconnaissance vocale, la traduction automatique et la recommandation de contenu.');



-- Catégorie 2: Traitement du langage naturel --
INSERT INTO Categorie (nomCategorie) VALUES ('Traitement du langage naturel');

-- Contenu 2.1: Introduction au traitement du langage naturel --
INSERT INTO Contenue (keywords, titre, idcategorie, descriimage, resume, snippet, datepublication, image)
VALUES ('traitement du langage naturel, NLP', 'Introduction au traitement du langage naturel', 2, 'image_intro3.webp', 'Ce contenu présente une introduction au traitement du langage naturel (NLP).', 'Le traitement du langage naturel est une branche de l''intelligence artificielle .', '2023-03-01', '7.webp');

INSERT INTO Paragraphe (idContenue, imagepara, titrepara, descriptione)
VALUES (3, '8.webp', 'Les défis du traitement du langage naturel', 'Le traitement du langage naturel présente de nombreux défis, notamment la compréhension du langage ambigu, la gestion des erreurs orthographiques et grammaticales, ainsi que la prise en compte du contexte et de l''ambiguïté dans les interprétations. Les tâches courantes en NLP incluent la classification de texte, l''analyse des sentiments, la traduction automatique et la génération de texte.');

INSERT INTO Paragraphe (idContenue, imagepara, titrepara, descriptione)
VALUES (3, '9.webp', 'Applications du traitement du langage naturel', 'Le traitement du langage naturel trouve des applications dans de nombreux domaines, tels que les chatbots, l''analyse des opinions sur les réseaux sociaux, la recherche d''informations et la rédaction automatique. Les chatbots utilisent des techniques de NLP pour comprendre et répondre aux requêtes des utilisateurs de manière naturelle. L''analyse des opinions permet d''extraire des informations utiles à partir des commentaires et des avis des utilisateurs sur les médias sociaux. La recherche d''informations utilise des techniques de NLP pour analyser et organiser les documents afin de fournir des résultats pertinents aux requêtes des utilisateurs.');





-- Catégorie 3: Vision par ordinateur --
INSERT INTO Categorie (nomCategorie) VALUES ('Vision par ordinateur');

-- Contenu 3.1: Introduction à la vision par ordinateur --
INSERT INTO Contenue (keywords, titre, idcategorie, descriimage, resume, snippet, datepublication, image)
VALUES ('vision par ordinateur, computer vision', 'Introduction à la vision par ordinateur', 3, 'image_intro4.webp', 'Ce contenu présente une introduction à la vision par ordinateur.', 'La vision par ordinateur est un domaine de l''intelligence artificielle qui vise à permettre aux machines de comprendre et d''interpréter des images et des vidéos. Cela inclut la détection d''objets, la reconnaissance faciale, la segmentation d''images et bien plus encore.', '2023-04-01', '10.webp');

INSERT INTO Paragraphe (idContenue, imagepara, titrepara, descriptione)
VALUES (4, '11.webp', 'Les tâches de vision par ordinateur', 'La vision par ordinateur englobe un large éventail de tâches, notamment la détection d''objets, la reconnaissance et la classification d''objets, la localisation d''objets, la reconnaissance faciale, la segmentation d''images et la reconstruction 3D. Ces tâches sont réalisées en utilisant des algorithmes et des modèles qui analysent les caractéristiques visuelles des données.');

INSERT INTO Paragraphe (idContenue, imagepara, titrepara, descriptione)
VALUES (4, '12.webp', 'Applications de la vision par ordinateur', 'La vision par ordinateur a de nombreuses applications pratiques, telles que la surveillance vidéo, la réalité augmentée, les véhicules autonomes et la médecine. Par exemple, la surveillance vidéo utilise des techniques de vision par ordinateur pour détecter les intrusions, suivre les objets en mouvement et reconnaître les comportements suspects. Les véhicules autonomes utilisent la vision par ordinateur pour détecter les piétons, les panneaux de signalisation et les obstacles sur la route.');




-- Catégorie 4: Robotique --

INSERT INTO Categorie (nomCategorie) VALUES ('Robotique');

-- Contenu 4.1: Introduction à la robotique --
INSERT INTO Contenue (keywords, titre, idcategorie, descriimage, resume, snippet, datepublication, image)
VALUES ('robotique, robots intelligents', 'Introduction à la robotique', 4, 'image_intro5.webp', 'Ce contenu présente une introduction à la robotique et aux robots intelligents.', 'La robotique est un domaine multidisciplinaire qui concerne la conception, la construction et la programmation de robots. Les robots intelligents sont des machines capables d''interagir avec leur environnement, d''apprendre de nouvelles tâches et de s''adapter à des situations changeantes.', '2023-05-01', '13.webp');
INSERT INTO Paragraphe (idContenue, imagepara, titrepara, descriptione)
VALUES (5, '14.webp', 'Les composants d''un robot', 'Un robot est composé de plusieurs éléments essentiels, tels que les capteurs, les actionneurs, les processeurs et les systèmes de contrôle. Les capteurs permettent au robot de percevoir son environnement, tels que les caméras, les microphones, les capteurs de distance, etc. Les actionneurs sont responsables des mouvements du robot, tels que les moteurs, les vérins, les roues, etc. Les processeurs et les systèmes de contrôle traitent les informations des capteurs, prennent des décisions et envoient des commandes aux actionneurs.');

    INSERT INTO Paragraphe (idContenue, imagepara, titrepara, descriptione)
VALUES (5, '15.webp', 'Applications de la robotique', 'La robotique trouve des applications dans de nombreux domaines, tels que l''industrie manufacturière, la médecine, l''exploration spatiale et l''assistance aux personnes. Dans l''industrie manufacturière, les robots sont utilisés pour effectuer des tâches répétitives et dangereuses, améliorant ainsi l''efficacité et la sécurité. En médecine, les robots peuvent assister les chirurgiens dans des interventions précises et minimiser les risques. Dans l''exploration spatiale, les robots sont utilisés pour explorer des environnements hostiles et recueillir des données. Dans l''assistance aux personnes, les robots peuvent aider les personnes âgées ou handicapées dans leurs activités quotidiennes.');
