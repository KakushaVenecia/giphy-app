import { Component, OnInit } from '@angular/core';
import { GifdataService } from '../../gifdata.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  gifs: any[] = []

  constructor(private dataService: GifdataService) { }

  ngOnInit(): void {
    this.dataService.getTrendingGifs()
    .subscribe((response: any) => {
      console.log('Data', response)
      this.gifs = response.data;
    });
  }

}
