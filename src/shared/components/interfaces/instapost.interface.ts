export interface InstaPost {
  id: string;
  user: User;
  image: string;
  post_id: string;
  post_link: string;
  caption: string;
}

export interface User {
  username: string;
  profilePicture: string;
}
