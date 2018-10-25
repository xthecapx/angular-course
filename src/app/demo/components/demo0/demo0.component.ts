import { Component } from '@angular/core';

@Component({
  selector: 'app-demo0',
  templateUrl: './demo0.component.html',
})
export class Demo0Component {
  person = {
    name: 'Cristian Marquez',
    avatar: 'https://media.licdn.com/dms/image/C4E03AQFnclYio25Hcw/profile-displayphoto-shrink_200_200/0?e=1545868800&v=beta&t=35TdjbWuOgWCSvwPjVdoZepXDUL6K6s6BNjns3oQKFQ',
    facts: [
      '🧢 thecap',
      '🛫 Living Bogotá since 2006',
      '🤓 Frontend Software Developer',
      '👨‍🏫 Write at https://hackernoon.com',
      '🕶️ Amateur Skateboarder'
    ]
  };
}
