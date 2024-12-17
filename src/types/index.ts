import { z } from 'zod'

const BaseCommentSchema = z.object({
    id: z.number(),
    content: z.string(),
    createdAt: z.string(),
    score: z.number(),
    user: z.object({
        image: z.object({
            png: z.string(),
            webp: z.string(),
        }),
        username: z.string(),
    }),
})

export const ReplySchema = BaseCommentSchema.extend({
    replyingTo: z.string(),
})

export const CommentSchema = BaseCommentSchema.extend({
    replies: z.array(ReplySchema), 
})

export const CommentsDataSchema = z.object({
    currentUser: BaseCommentSchema.shape.user, 
    comments: z.array(CommentSchema), 
})

export type User = z.infer<typeof BaseCommentSchema.shape.user>
export type Reply = z.infer<typeof ReplySchema>
export type Comment = z.infer<typeof CommentSchema>
export type CommentsData = z.infer<typeof CommentsDataSchema>
