export interface Post {
    comments: comment[];
    content: string;
    meta: statistics[];
    username: string;
}

interface comment{
    content: string;
    username: string;
}

interface statistics{
    comments: number;
    day_remaining: number;
    likes: number;
}