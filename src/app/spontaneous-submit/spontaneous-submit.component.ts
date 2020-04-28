import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-spontaneous-submit',
  templateUrl: './spontaneous-submit.component.html',
  styleUrls: ['./spontaneous-submit.component.css']
})
export class SpontaneousSubmitComponent implements OnInit {

  categories: any[];
  services: any[];
  cities: any[];
  selected: number = null;
  candidatForm: FormGroup;


  constructor(private fb: FormBuilder){
    this.categories =
      [
        {
          "categoryId": 1,
          "categoryName": "Administration et Finance",
          "categoryDesc": "Administration et Finance",
          "categoryServicemodel": [
            {
              "serviceId": 1,
              "serviceName": "Administration vente",
              "serviceDesc": "Administration vente",
              "isActive": 1
            },
            {
              "serviceId": 3,
              "serviceName": "Aide-comptable ",
              "serviceDesc": "Aide-comptable",
              "isActive": 1
            },
            {
              "serviceId": 12,
              "serviceName": "Apprenti Administratif",
              "serviceDesc": "Apprenti Administratif",
              "isActive": 2
            },
            {
              "serviceId": 11,
              "serviceName": "Responsable RH",
              "serviceDesc": "Responsable RH",
              "isActive": 1
            }
          ],
          "active": 1
        },
        {
          "categoryId": 2,
          "categoryName": "Après-vente",
          "categoryDesc": "Après-vente",
          "categoryServicemodel": [
            {
              "serviceId": 1,
              "serviceName": "Employé logistique",
              "serviceDesc": "Employé logistique",
              "isActive": 1
            },
            {
              "serviceId": 2,
              "serviceName": "Conseiller Commercial PRA",
              "serviceDesc": "Conseiller Commercial PRA",
              "isActive": 1
            },
            {
              "serviceId": 3,
              "serviceName": "Chef Magasinier",
              "serviceDesc": "Chef Magasinier",
              "isActive": 1
            }
          ],
          "active": 0
        },
        {
          "categoryId": 4,
          "categoryName": "Carrosserie",
          "categoryDesc": "Carrosserie",
          "categoryServicemodel": [
            {
              "serviceId": 5,
              "serviceName": "Apprenti Carrossier ",
              "serviceDesc": "Apprenti Carrossier",
              "isActive": 1
            },
            {
              "serviceId": 6,
              "serviceName": "Carrossier ",
              "serviceDesc": "Carrossier",
              "isActive": 1
            },
            {
              "serviceId": 7,
              "serviceName": "Chef d'atelier carrosserie ",
              "serviceDesc": "Chef d'atelier carrosserie",
              "isActive": 1
            }
          ],
          "active": 0
        }
      ]

  }



  ngOnInit() {


  }
  public buildServices() {
    this.services = [];
    this.categories.forEach((category) => {
      if (category.categoryId == this.selected) {
        this.services = category.categoryServicemodel;
      }
    });
  }

}
