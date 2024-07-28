import { Component } from '@angular/core';
import { Service } from '../../services/films.service';
import { TipiShowTime } from '../../model/dati';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {


  allTheMovies?: TipiShowTime[]

  reactiveForm = new FormGroup({
    inputSearch: new FormControl("", [Validators.minLength(2), Validators.maxLength(20)])
  })

  constructor(
    private servizioHTTP: Service,
    private ar: ActivatedRoute,
    private router: Router
  ) { }

  ricercaTitolo() {
    const titolo = this.reactiveForm.get('inputSearch')!.value
    this.servizioHTTP.searchTitleMovies(titolo).subscribe({
      next: (d) => {
        this.allTheMovies = d
        console.log(this.allTheMovies)
      },
      error: (e) => {
        console.log(e)
      }
    })
    this.reactiveForm.get('inputSearch')!.setValue('')
    //In questo modo cancello il valore di inputSearch che verra' sostituito con un nuovo valore ad una nuova ricerca
  }

}