
export interface dataModel {
    comments: commentInfo[];
    content: string;
    meta: statistics[];
    op: string;
}

interface commentInfo{
    content: string;
    commentor: string;
}

interface statistics{
    number_of_comments: number;
    number_of_days_remaining: number;
    number_of_likes: number;
}