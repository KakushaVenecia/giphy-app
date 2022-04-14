import { Component, OnInit } from '@angular/core';
import { GifdataService } from '../../gifdata.service'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 gifs:any[]=[];
  constructor(private dataService: GifdataService) { 

  }

  ngOnInit(): void {
  }
  search(searchTerm:string){
    if (searchTerm !== '' ){
      this.dataService.searchGifs(searchTerm)
      .subscribe((response:any) => {
        console.log('searchData',response);
        this.gifs=response.data
      })

    }
  }

}
