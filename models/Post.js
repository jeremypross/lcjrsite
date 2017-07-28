const db = require('../config/db');

const Post = {};

Post.findAll = () => {
  return db.query(`SELECT * FROM posts;`);
};

Post.create = (post) => {
  console.log('POST in MODEL', post);
  return db.one(`
    INSERT INTO posts
    (title, post_text, image_url, source_url, category, user_id)
    VALUES
    ($1, $2, $3 ,$4, $5, $6) RETURNING *`,
    [
      post.title,
      post.post_text,
      post.image_url,
      post.source_url,
      post.category,
      post.user_id
    ]
  );
};

Post.findById = (id) => {
  return db.one(`
    SELECT * FROM posts
    WHERE id = $1`,
    [id]
  );
};

Post.findByUserId = (id) => {
  return db.query(`
    SELECT * FROM posts
    WHERE user_id = $1`,
    [id]
  );
};

Post.update = (post, id) => {
  return db.none(`
    UPDATE posts
    SET
      title = $1,
      post_text = $2,
      image_url = $3,
      source_url = $4,
      category = $5
    WHERE id = $6`,
    [
      post.title,
      post.post_text,
      post.image_url,
      post.source_url,
      post.category,
      id
    ]
  );
};

Post.findMusic = () => {
  return db.query(`
    SELECT * FROM posts
    WHERE category ='Music'
  `);
}

Post.findArt = () => {
  return db.query(`
    SELECT * FROM posts
    WHERE category = 'Art'
  `);
}

Post.delete = (id) => {
  return db.none(`
    DELETE FROM posts
    WHERE id = $1`,
    [id]
  );
};

module.exports = Post;
