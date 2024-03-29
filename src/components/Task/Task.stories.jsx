import Task from '.';
const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export default {
	component: Task,
	title: 'Design System/Atoms/Task',
	tags: ['autodocs'],
};

export const Default = {
	args: {
		task: {
			id: '1',
			title: 'Test Task',
			state: 'TASK_INBOX',
		},
	},
};

export const Pinned = {
	args: {
		task: {
			...Default.args.task,
			state: 'TASK_PINNED',
		},
	},
};

export const Archived = {
	args: {
		task: {
			...Default.args.task,
			state: 'TASK_ARCHIVED',
		},
	},
};

export const LongTitle = {
	args: {
		task: {
			...Default.args.task,
			title: longTitleString,
		},
	},
};
