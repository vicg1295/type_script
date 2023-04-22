enum QuestionStatus {
    published = 'published',
    Draft = 'draft',
    Deleted = 'deleted'
}
interface question  {
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: QuestionStatus;
}

// async function getFaqs(req:
//                            {
//                                topicId: number,
//                                status: QuestionStatus
//                            }):
    // Promise<
    //     question[]> {
    // const res = await fetch('/faqs', {
    //     method: 'POST',
    //     body: JSON.stringify(req)
    // });
    // const data = await res.json();
    // return data;
// }
