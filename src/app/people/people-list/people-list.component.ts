import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  People:any=[];

  constructor(private service:SharedService) { }

  ngOnInit(): void {    
    this.obtenerPersonas()
  }
  obtenerPersonas(){
    this.service.getPeopleList().subscribe(data=> {
      console.log("Se solicita el listado de personas")
      this.People = data
    })
  }

}
