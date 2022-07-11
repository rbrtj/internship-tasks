import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  lang;

  constructor() { }


  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'pl'
  }

  changeLang(lang){
    localStorage.setItem('lang', lang);
    window.location.reload();
  }
}
