export const lesson = {
  title: 'Material Angular',
  description: [
    `In this demo we will start using Angular.`,
  ],
  showContent: false,
  showResult: false,
};

export const activity1 = {
  title: 'STEP 1: Use Angular Material',
  description: [
    'In this activity we will use the default card provided by the Angular Team.'
  ],
  solution: `Go to: https://material.angular.io/guide/getting-started for help.
  
$: npm install --save @angular/material @angular/cdk @angular/animations
$: ng add @angular/materia`,
  steps: [
    {
      step: `Step 1: Install Angular Material, Angular CDK and Angular Animations`,
      code: `Add the package to the DEPENDENCIES 
@angular/material 
@angular/cdk 
@angular/animations
`,
    },
    {
      step: `Step 2: Configure animations`,
      code: `
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})
export class AppModule { }`,
    },
    {
      step: `Step 3: Import the component modules`,
      code: `
import { MatButtonModule } from '@angular/material';

@NgModule({
  ...
  imports: [MatButtonModule],
  ...
})
export class AppModule { }
`
    },
    {
      step: `Step 4: Include a theme`,
      code: `
Add the following in the style.scss
@import "~@angular/material/prebuilt-themes/indigo-pink.css";`,
    },
    {
      step: `Step 5: Verify it`,
      code: `Click on the button
Did you see the fancy fab button?, 
you're done!`,
    }
  ],
};

export const activity2 = {
  title: 'Displaying the material card',
  description: [
    `Add the <code>mat-card</code> component to the project.`
  ],
  solution: `Go to https://material.angular.io/components/card/examples 
for help.`,
  steps: [
    {
      step: `Add <code>MatCardModule</code> to the AppModule.`,
      code: `import { MatCardModule } from '@angular/material';

@NgModule({
  ...
  imports: [MatCardModule],
  ...
})
export class AppModule { }`,
    }
  ],
};

export const activity3 = {
  title: 'Using Angular squematics',
  description: [
    `On this activity you will create an Angular app using the cli.`
  ],
  solution: `Go to https://github.com/xthecapx/angular-quiz
for Help.`,
  steps: [
    {
      step: `Run the following code in the console`,
      code: `ng generate @angular/material:material-nav --name myMaterialNav --component app`,
    },
    {
      step: `Go to app-routing.modulets`,
      code: `Add the following code to the router collection
const routes: Routes = [
  ...
  {
    path: 'material-nav',
    component: MyMaterialNavComponent 
  }];`,
    }
  ],
};