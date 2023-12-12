import { Component } from '@angular/core';
import { mensJeans } from 'src/Data/Men/men_jeans';
import { mensKurta } from 'src/Data/Men/men_kurta';
import { mensShoes } from 'src/Data/Men/men_shoes';
import { womensGown } from 'src/Data/Women/women_gown';
import { womensLehenga } from 'src/Data/Women/women_lehenga_choli';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mensJeans:any
  womensGown:any
  womensLehenga:any
  mensShoes:any
  mensKurta:any

  ngOnInit(){
    this.mensJeans = mensJeans.slice(0,5)
    this.womensGown = womensGown.slice(0,5)
    this.womensLehenga= womensLehenga.slice(0,5)
    this.mensShoes = mensShoes.slice(0,5)
    this.mensKurta = mensKurta.slice(0,5)
  }

}
