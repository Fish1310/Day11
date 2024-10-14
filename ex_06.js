function worker(task, timeRequired) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(task + ' done');
        }, timeRequired);
    });
}

function factory(tasksObj) {
    tasksObj.tasks.forEach(taskObj => {
        worker(taskObj.task, parseInt(taskObj.timeRequired))
            .then(console.log);
    });
}

let tasks = {
    'tasks': [
        {
            'task': 'Teaching Astronomy',
            'timeRequired': '500',
        },
        {
            'task': 'Refill fuel',
            'timeRequired': '1500',
        },
        {
            'task': 'Repair module',
            'timeRequired': '1000',
        },
    ],
};

worker("Going to work", 1000).then(value => { console.log(value); });
factory(tasks);