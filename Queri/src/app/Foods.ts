
export interface IFoods {
    //category: string
    comments: Array<comment_info>;
    content: string;
    meta: Array<statistics>;
    op: string;
}

interface comment_info{
    content: string;
    commentor: string;
}

interface statistics{
    number_of_comments: number;
    number_of_days_remaining: number;
    number_of_likes: number;
}