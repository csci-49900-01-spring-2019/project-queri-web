
interface Statistics {
    comments: number;
    days_remaining: number;
    likes: number;
}

export interface Post {
    comments: Comment[];
    content: string;
    meta: Statistics;
    username: string;
}

interface Comment {
    content: string;
    username: string;
}
