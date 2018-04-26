import { Component, OnInit } from '@angular/core';
import { StateService } from '../core/services/state.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private stateService: StateService) { }

  ngOnInit() {
  }

  newQuickApp() {
    this.stateService.newApp();
  }

  loadQuickApp() {
    console.log('Load clicked.');
  }

}
