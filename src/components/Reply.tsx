import { Reply } from "../types"

type ReplyProps = {
    reply: Reply
}

export default function ReplyComponent({reply} : ReplyProps) {
    return (
        <>
            <div className="p-4 rounded-lg">
                <div className='flex gap-4 items-center'>
                    <img className='size-8 rounded-full' src={reply.user.image.png || reply.user.image.webp} alt={`${reply.user.username} profile image`} />
                    <p className="font-bold">{reply.user.username}</p>
                    <p>{reply.createdAt}</p>
                </div>
                <p className="my-4">
                    <span className="text-bold text-indigo-600">@{reply.replyingTo}</span> {reply.content}
                </p>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}
