const { inquirerMenu, inquirerInput } = require('./helpers/inquirer');
const { getAllTask, createTask } = require('./services/taskService');

const main = async () => {
  let option = '';

  do {
    option = await inquirerMenu();

    switch (option) {
      case 1:
        const title = await inquirerInput('Task Title');
        createTask(title);

        break;

      case 2:
        const allTask = getAllTask();
        console.log(allTask);
        break;
    }
  } while (option !== 'X');
};

main();
