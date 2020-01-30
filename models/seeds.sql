
USE gamesdb;

INSERT INTO games (game_name, game_type, played, review, game_genre, img_src, createdAt, updatedAt)
VALUES ("FIFA", "Console", true, "Great", "Sport", "Test", curdate(), curdate());

INSERT INTO users (user_name, password, createdAt, updatedAt)
VALUES ("myname", "password", curdate(), curdate());

INSERT INTO userlists (user_name, played, gameid, createdAt, updatedAt)
VALUES ("myname", true, 1, curdate(), curdate());
