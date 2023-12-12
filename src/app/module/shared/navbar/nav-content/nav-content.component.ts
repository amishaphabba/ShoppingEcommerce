import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { navigation } from './nav-content';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.css']
})
export class NavContentComponent {
  category:any
  @Input() selectedSection:any

  ngOnInit(){
    this.category = navigation; 
    console.log(this.category.categories[0].sections)
  }

  constructor(private router:Router){}

  handleNavigate=(path:any)=>{
    this.router.navigate([path])
  }
}
