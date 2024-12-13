import Reply from "./Reply"

type CommentProps = {
    content: string,
    createdAt: string,
    user: {
        image: {
            png: string,
            webp: string,
        },
        username: string
    },
    replies: [{
        content:string,
        createdAt: string,
        user: {
            image: {
                png: string,
                webp: string,
            },
            username: string
        },
        replyingTo: string
    }]
}

export default function Comment({content, createdAt, user, replies} : CommentProps) {
    return (
        <>
            <div className="p-4 rounded-lg">
                <div className='flex gap-4 items-center'>
                    <img className='size-8 rounded-full' src={user.image.png || user.image.webp} alt={`${user.username} profile image`} />
                    <p className="font-bold">{user.username}</p>
                    <p>{createdAt}</p>
                </div>
                <p className="my-4">
                    {content}
                </p>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            {replies.map(
                reply => (
                    <Reply                 
                    content={reply.content}
                    createdAt={reply.createdAt}
                    user={reply.user}
                    replyingTo={reply.replyingTo} 
                    />
                )
            )}
        </>
    )
}
