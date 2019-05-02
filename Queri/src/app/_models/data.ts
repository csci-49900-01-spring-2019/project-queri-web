
interface statistics{
    comments: number;
    days_remaining: number;
    likes: number;
}

export interface Post {
    comments: comment[];
    content: string;
    meta: statistics;
    username: string;
}

interface comment {
    content: string;
    username: string;
}
<<<<<<< HEAD

interface statistics {
    comments: number;
    days_remaining: number;
    likes: number;
}
=======
>>>>>>> 8dff863a91d487801fa63d224be3fd590761b739
