import { Component } from '@angular/core';
import { show } from '../../model/dati';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../../services/films.service';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrl: './dettagli.component.scss'
})
export class DettagliComponent  {

  film?: show
  id?: number

  constructor(
    private router: Router,
    private ar : ActivatedRoute,
    private servizio : Service
  ) {  }

  ngOnInit(){
    this.ar.params.subscribe(
      par => {
        const idPagina = parseInt(par["id"] as string)
        isNaN(idPagina) ? console.log("errore, non e' un numero") : this.id = idPagina
      }
    )
    
    this.servizio.searchById(this.id).subscribe({
    next : (ogg) => { console.log(ogg), this.film = ogg},
    error : (e) => { console.log('film non trovato')}
    })

  }

  tornaIndietro() {
    this.router.navigateByUrl("")
  }


}
