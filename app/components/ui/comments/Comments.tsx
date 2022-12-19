import { useAuth } from '../../../hooks/useAuth'
import { CommentService } from '../../../services/comment.service'
import { Loader } from '../Preloaders/loader'
import { CommentItem } from './CommentItem'
import { AddCommentsForm } from './addCommentsForm'
import React from 'react'
import { useQuery } from 'react-query'

export const Comments: React.FC<{ videoId: string }> = ({ videoId }) => {
	const { user } = useAuth()
	const { refetch, data, isLoading } = useQuery(
		['get comments', videoId],
		() => CommentService.getCommentByVideo(videoId),
		{
			select: ({ data }) => data,
		}
	)
	return (
		<>
			<div>
				{user && <AddCommentsForm videoId={videoId} refetch={refetch} />}
			</div>
			{isLoading ? (
				<Loader count={4} />
			) : data?.length ? (
				<div>
					{data.map(comment => (
						<CommentItem comment={comment} key={comment._id} />
					))}
				</div>
			) : (
				<div>Нету комментариев</div>
			)}
			<h2></h2>
		</>
	)
}
