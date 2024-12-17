import {Comment} from '../types/index'
import Reply from './Reply'

type CommentProps = {
    comment: Comment
    replies: Comment['replies']
    // content: string,
    // createdAt: string,
    // user: {
    //     image: {
    //         png: string,
    //         webp: string,
    //     },
    //     username: string
    // },
    // replies: [{
    //     content:string,
    //     createdAt: string,
    //     user: {
    //         image: {
    //             png: string,
    //             webp: string,
    //         },
    //         username: string
    //     },
    //     replyingTo: string
    // }]
}

export default function CommentUser({comment, replies} : CommentProps) {
    return (
        <>
            <div className="p-4 rounded-lg">
                <div className='flex gap-4 items-center'>
                    <img className='size-8 rounded-full' src={comment.user.image.png || comment.user.image.webp} alt={`${comment.user.username} profile image`} />
                    <p className="font-bold">{comment.user.username}</p>
                    <p>{comment.createdAt}</p>
                </div>
                <p className="my-4">
                    {comment.content}
                </p>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            {replies.map(
                reply => (
                    <Reply                 
                        reply={reply}
                    />
                )
            )}
        </>
    )
}
