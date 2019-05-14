import { Post } from './post';

export class User{
    id: number;
    nome: string;
    sobrenome: string;
    login: string;
    email: string;
    senha: string;
    avatar: string;
    posts: Post[];
}