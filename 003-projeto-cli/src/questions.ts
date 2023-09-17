import path from 'node:path';
import fs from 'node:fs';
import { EChoicesBoilerPlate } from 'enum/choices-boilerplate.enum';
import { EErros } from 'enum/errors.enum';
import { EGitName } from 'enum/git-name.enum';

export const questions = [
  {
    type: 'list',
    name: 'tech',
    message: 'Qual Boilerplate devo criar?',
    choices: [EChoicesBoilerPlate.NODEJS_TS, EChoicesBoilerPlate.SCSS],
  },
  {
    type: 'input',
    name: 'foldername',
    message: 'Qual nome devo dar para a pasta do Projeto?',
    validate(folderName: string) {
      console.log(folderName);

      if (!folderName) return EErros.ERROR_NULL;
      if (/[^\w\s-]/.test(folderName)) return EErros.ERROR_SPECIAL_CHARACTERES;

      if (folderName === EGitName.NODEJS_TS || folderName === EGitName.SCSS)
        return EErros.ERROR_GIT_NAME;

      try {
        const dir = path.resolve(folderName);
        fs.accessSync(dir, fs.constants.R_OK);
        return EErros.ERROR_INVALID_FOLDER;
      } catch (error) {}

      return true;
    },
  },
];
