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
  title: 'Activity 3: fromEvent',
  description: [
    `In this case we use the <code>fromEvent</code> Observable again, but in this case we are going to use it to capture the click event anywhere in the document.`
  ],
  solution: `this.activity3sub = fromEvent(document, 'click')
  .subscribe((event: MouseEvent) => {
    this.result3 = {x: event.clientX, y: event.clientY};
  });`,
  steps: [
    {
      step: ``,
      code: `this.activity3sub = fromEvent()`,
    },
    {
      step: ``,
      code: `this.activity3sub = fromEvent(document, 'click')`,
    },
    {
      step: `Call the <code>subscribe()</code> method`,
      code: `.subscribe();`,
    },
    {
      step: `Add a callback function that takes a parameter <code>event</code> of type <code>MouseEvent</code>.`,
      code: `.subscribe((event: MouseEvent) => {});`,
    },
    {
      step: `Inside the method body, assign an empty object to <code>result3</code>.`,
      code: `.subscribe((event: MouseEvent) => {
  this.result3 = { };
});`,
    },
    {
      step: `Add the keys <code>x</code> and <code>y</code> and assign the values of <code>event.clientX</code> and <code>event.clientY</code>`,
      code: `.subscribe((event: MouseEvent) => {
  this.result3 = {x: event.clientX, y: event.clientY};
});`,
    },
  ],
};

export const activity4 = {
  title: 'Exercise 1: unsubscribing',
  description: [
    `To prevent memory leaks, we should always consider unsubscribing from our Observables.`,
    `We can do this using the <code>ngOnDestroy</code> method, that Angular runs during the Component tear down.`,
    `In order to unsubscribe we need to store a reference to the subscription, what we did in the previous activities.`,
  ],
  solution: `ngOnDestroy() {
  this.activity2sub.unsubscribe();
  this.activity3sub.unsubscribe();
}`,
  steps: [
    {
      step: `In the ngOnDestroy method add call into the <code>unsubscribe()</code> method on <code>this.activity2sub</code>`,
      code: `this.activity2sub.unsubscribe()`,
    },
    {
      step: `Do the same for <code>this.activity3sub</code>`,
      code: `this.activity3sub.unsubscribe()`,
    },
  ],
};
