import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DemoService } from '../../demo.service';
// import { Subscribe } from ''
import { Result} from '../../_models/result';


@Component({
  selector: 'app-voting-question',
  templateUrl: './vote-question.component.html',
  styleUrls: ['./vote-question.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoteQuestionComponent implements OnInit {

  constructor(private demoService: DemoService, private cdr:ChangeDetectorRef) { }

  @Input() question: string;
  @Input() username: string;

 
  @Input() numberOfLikes: number;
  /*
  @Input() daysRemaining: number;
  @Input() numberOfComments: number;
  */
  @Input() postId: any;
  votes;

  type = 'voting';
  buttonText = 'Like';
  clicked = false;
  color: any;
  colors: string[] = ['cyan', 'green', 'blue', 'purple', 'pink', 'magenta', 'black', 'grey', 'yellow', 'orange'];
  numberOfColors = this.colors.length;

  state: Result;

  ngOnInit() {
    this.setRandomColor();
    this.getVotes();
  }

  getVotes() {
    this.demoService.getVotes(this.type, this.postId)
    .subscribe(votes => {
      this.votes = votes;
      this.cdr.detectChanges();
    });
  }

  async onLike() {
    if (this.buttonText === 'Like') {
      this.buttonText = 'Liked';
      // console.log('liked: ' + this.question);
      this.clicked = true;
      await this.demoService.AddLike(this.type, this.postId)
        .subscribe(data => {
          this.state = data;
          // console.log(this.state);
          // console.log('State: ', this.state.result.committed);
          
          if(this.state.result.committed === true) {
            this.getVotes();
          }
        });
    }
  }

  setRandomColor(): void {
    const index = Math.floor(Math.random() * this.numberOfColors) + 0;
    this.color = this.colors[index];
  }

 

}
