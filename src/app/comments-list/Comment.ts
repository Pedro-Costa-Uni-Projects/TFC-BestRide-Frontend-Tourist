export class Comment {
  rating: number; //rate, rating, evaluation, assessment //stars
  comment: String;
  author: User;
  roadId: Number;

  constructor(
    rating: number,
    comment: String,
    roadId: Number,
    username: String
  ) {
    this.rating = rating;
    this.comment = comment;
    this.author = new User(username);
    this.roadId = roadId;
  }
}

export class User {
  name: String;

  constructor(name: String) {
    this.name = name;
  }
}
