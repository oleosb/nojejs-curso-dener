import inquirer from 'inquirer';
//QUESTIONS
import { questions } from 'questions';
//INTERFACE
import { IAnswers } from 'interface/answers.interface';
import { GenFile } from 'constroller/generate.controller';

class Init {
  constructor() {
    inquirer.prompt(questions).then((answers: IAnswers) => {
      GenFile.gen(answers);
    });
  }
}

new Init();
