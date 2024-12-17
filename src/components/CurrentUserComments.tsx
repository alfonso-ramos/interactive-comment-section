import CommentUser from './Comment'
import { CommentsData } from "../types"

type CurrentUserCommentsProps = {
    currentUser: CommentsData['currentUser'],
    comments: CommentsData['comments']
}

export default function CurrentUserComments({currentUser, comments} : CurrentUserCommentsProps) {


    return (
        <div>
            
            {comments.map(comment => (
                
                <CommentUser 
                    comment={comment}
                    replies={comment.replies}
                />
            ))}

            <form action="">
                <textarea className="border border-indigo-500 rounded-xl w-full" name="" id=""></textarea>
            </form>

            <div className="p-4">
                <div className="flex justify-between items-center">
                    <img className="rounded-full size-8" src={currentUser.image.png || currentUser.image.webp} alt={`${currentUser.username} profile image`} />

                    <button className="uppercase py-3 px-7 bg-indigo-600 text-white font-bold rounded-lg">
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}
