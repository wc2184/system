export function chooseTasks(tasks, mentalState, SOPLength) {
	//TO DO:
	// deal with past due date
	// add variable length tasks
	// breaks in between tasks
	const scoredTasks = [];
	for (const task of tasks) {
		const successChance = Math.pow(mentalState / task.difficulty, 2);
		let urgency = task.urgency;
		if (task.due) {
			const hours = (new Date() - task.due) / 360000;
			const days = hours / 24;
			const multipler = 5;
			urgency = max(urgency, (1 / days) * difficulty * multiplier);
		}
		const score = successChance * task.importance * urgency;
		scoredTask.append([score, task]);
	}
	const taskList = [];
	for (const [score, task] of scoredTasks) {
		if (task.duration <= SOPLength + 10) {
			SOPLength -= task.duration;
			taskList.append(task);
		}
	}
	return taskList;
}
