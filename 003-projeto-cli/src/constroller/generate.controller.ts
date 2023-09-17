import { EChoicesBoilerPlate } from 'enum/choices-boilerplate.enum';
import { EGitName } from 'enum/git-name.enum';
import { IAnswers } from 'interface/answers.interface';

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
    console.log(gitName, folderName);
  }
}

export const GenFile = new GenerateController();
