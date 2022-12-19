import { IComment } from '../../../types/comment.interface';
import React, { FC } from 'react';


export const CommentItem: FC<{ comment: IComment }> = ({ comment }) => {
	return <div>
		{/* info short comment.user */}
		<p>{comment.massage}</p>
	</div>
}