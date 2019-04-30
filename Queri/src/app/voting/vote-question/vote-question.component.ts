import { Component, OnInit, Input } from '@angular/core';
import { DemoService } from '../../demo.service';


@Component({
  selector: 'app-voting-question',
  templateUrl: './vote-question.component.html',
  styleUrls: ['./vote-question.component.css']
})
export class VoteQuestionComponent implements OnInit {

  constructor(private demoService: DemoService) { }

  @Input() question: string;
  @Input() username: string;
  @Input() days_remaining: number;
  @Input() number_of_likes: number;
  @Input() number_of_comments: number;
  type: string = 'featured';
  @Input() postId: any;

  buttonText: string = 'Like';
  clicked = false;

  colors: string[] = ['cyan', 'green', 'blue', 'purple', 'pink', 'magenta', 'black', 'grey', 'yellow', 'orange'];
  numberOfColors = this.colors.length;

  ngOnInit() {
  }


  onLike(){
    if (this.buttonText === 'Like'){
      this.buttonText = 'Liked';
      console.log('liked: ' + this.question);
      this.clicked = true;
    }
    // this.demoService.AddLike(this.type, this.postId);
  }

  setRandomColor(): string{
    let index = Math.floor(Math.random() * this.numberOfColors) + 0;
    //this.pageColor = this.colors[index];
    return this.colors[index];
  }

}
