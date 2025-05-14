// 👤 მომხმარებლის კლასის შექმნა
export class User {
  constructor(name, email) {
    this.id = Date.now();       // უნიკალური ID (timestamp)
    this.name = name;
    this.email = email;
    this.createdAt = new Date().toISOString();
  }
}
