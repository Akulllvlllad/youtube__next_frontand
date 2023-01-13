import { CommentService } from '../../../services/comment.service';
import { ICommentDto } from '../../../types/comment.interface';
import { Input } from '../input/Input';
import styles from './Comments.module.scss';
import cn from 'classnames';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';


export const AddCommentsForm: React.FC<{ videoId: string; refetch: any }> = ({
	videoId,
	refetch,
}) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ICommentDto>()

	const { mutateAsync } = useMutation(
		'add comment',
		(data: ICommentDto) => CommentService.createComment({ ...data, videoId }),
		{
			onSuccess(data) {
				reset()
				refetch()
			},
		}
	)

	const onSubmit: SubmitHandler<ICommentDto> = async data => {
		await mutateAsync(data)
	}

	return (
		<form className={cn(styles.form)} onSubmit={handleSubmit(onSubmit)}>
			<Input
				{...register('massage', {
					required: 'massage is required',
				})}
				
				placeholder='Massage'
				error={errors.massage}
			/>
		</form>
	)
}