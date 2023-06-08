import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-extraction-edit',
  templateUrl: './extraction-edit.component.html',
  styleUrls: ['./extraction-edit.component.css']
})
export class ExtractionEditComponent implements OnInit {
  id: number;


  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
      this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
          })
    }
  

}
