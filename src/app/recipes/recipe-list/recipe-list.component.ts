import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
      recipes: Recipe[]=[
        new Recipe('A Test Recipe','This is simply a test','http://img5.imgtn.bdimg.com/it/u=2130159401,1799485848&fm=15&gp=0.jpg'),
        new Recipe('A Test Recipe','This is simply a test','http://img5.imgtn.bdimg.com/it/u=2130159401,1799485848&fm=15&gp=0.jpg')

      ];
  constructor() { }

  ngOnInit() {
  }

}
