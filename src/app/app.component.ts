import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleForBest: string = "Best Quote:"
  titleForList: string = "Quotes list:";
  titleForWorst: string = "Worst Quotes:";

  public isSubmitting: boolean = false;

  showForm = false;

  onShowForm(): void{
    this.showForm = !this.showForm;
  }

  adding(a:number, b:number): number{
    return a + b
  }
}

