import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DemoService } from '../../demo.service';


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
  @Input() daysRemaining: number;
  @Input() numberOfLikes: number;
  @Input() numberOfComments: number;
  @Input() postId: any;
  votes;

  type = 'featured';
  buttonText = 'Like';
  clicked = false;
  color: any;
  colors: string[] = ['cyan', 'green', 'blue', 'purple', 'pink', 'magenta', 'black', 'grey', 'yellow', 'orange'];
  numberOfColors = this.colors.length;

  ngOnInit() {
    this.setRandomColor();
    this.demoService.getVotes(this.type, this.postId)
    .subscribe(votes => {
      this.votes = votes;
      this.cdr.detectChanges();
      
    })
   
   
  }

  onLike() {
    if (this.buttonText === 'Like') {
      this.buttonText = 'Liked';
      console.log('liked: ' + this.question);
      this.clicked = true;
    }
    // this.demoService.AddLike(this.type, this.postId);
  }

  setRandomColor(): void {
    const index = Math.floor(Math.random() * this.numberOfColors) + 0;
    this.color = this.colors[index];
  }

}
