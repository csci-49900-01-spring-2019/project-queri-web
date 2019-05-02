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

export interface statistics{
    comments: number;
    days_remaining: number;
    likes: number;
}