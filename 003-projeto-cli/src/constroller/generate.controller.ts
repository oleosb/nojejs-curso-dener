import shellJs from 'shelljs';

import { EChoicesBoilerPlate } from 'enum/choices-boilerplate.enum';
import { EGitName } from 'enum/git-name.enum';
import { IAnswers } from 'interface/answers.interface';
import path from 'node:path';
import fs from 'node:fs';

class GenerateController {
  public gen(answers: IAnswers) {
    try {
      switch (answers.tech) {
        case EChoicesBoilerPlate.NODEJS_TS:
          this._execPath(EGitName.NODEJS_TS, answers.foldername);
          break;
        case EChoicesBoilerPlate.SCSS:
          this._execPath(EGitName.SCSS, answers.foldername);

          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
  private _execPath(gitName: string, folderName: string) {
    try {
      shellJs.cd(path.resolve());
      shellJs.exec(`git clone git@github.com:troquatte/${gitName}.git`);

      fs.renameSync(
        `${path.join(path.resolve(), gitName)}`,
        `${path.join(path.resolve(), folderName)}`,
      );

      return shellJs.exit();
    } catch (error) {
      console.log(error);
    }
  }
}

export const GenFile = new GenerateController();
