import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/models/AppState';
import { ProductService } from 'src/app/State/Product/product.service';
import { mensKurta } from 'src/Data/Men/men_kurta';
import { filters, singleFilter } from './filterData';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  filterData:any
  singleFilterData:any
  products:any
  mensKurta:any
  levelthree:any


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private store:Store<AppState>){}

  ngOnInit(){
    this.filterData = filters
    this.singleFilterData = singleFilter
    this.mensKurta = mensKurta
    // to fetch data everytime
    this.activatedRoute.paramMap.subscribe(
      (params)=>{
        console.log("params", params)
        this.levelthree = params.get("levelthree")
        var reqData={
          category: params.get("levelthree"),
          colors: [],
          sizes: [],
          minPrice: 0,
          maxPrice: 10000,
          minDiscount: 0,
          pageNumber: 0,
          pageSize: 100,
          stock: null
        };
        this.productService.findProductsByCategory(reqData);
      });

      this.activatedRoute.queryParams.subscribe(
        (params)=>{
          const color= params["color"]
          const size = params["size"]
          const price = params["price"]
          const discount = params["discount"]
          const stock = params["stock"]
          const sort = params["sort"]
          const pageNumber = params["pageNumber"]
          const minPrice = price?.split("-")[0];
          const maxPrice = price?.split("-")[1];
          var reqData={
            category: this.levelthree,
            colors: color? [color].join(','):[],
            sizes: size,
            minPrice:minPrice?minPrice:0,
            maxPrice:maxPrice?maxPrice:1000000,
            minDiscount: discount?discount:0,
            pageNumber: pageNumber?pageNumber:0,
            pageSize: 100,
            sort: sort?sort:"price_low",
            stock: null
          };
          console.log("req data sent is ",reqData)
          this.productService.findProductsByCategory(reqData)
        }
      )

      this.store.pipe(select((store) => store.product)).subscribe((product)=>{
        this.products = product?.products?.content;
        console.log("store data in product component ",product.products.content)
      });
  }

  handleMultipleSelectFilter(value:string, sectionId:string){
    const queryParams={...this.activatedRoute.snapshot.queryParams}
    console.log(queryParams)

    const filterValues = queryParams[sectionId]?queryParams[sectionId].split(","):[];

    const valueIndex = filterValues.indexOf(value);
    if(valueIndex!=-1){
      filterValues.splice(valueIndex,1)
    }
    else{
      filterValues.push(value);
    }

    if(filterValues.length>0){
      queryParams[sectionId] = filterValues.join(",")
    }
    else{
      delete queryParams[sectionId]
    }
    this.router.navigate([],{queryParams})
  }

  handleSingleSelectFilter(value:string, sectionId:string){
    const queryParams = {...this.activatedRoute.snapshot.queryParams}
    queryParams[sectionId]=value
    this.router.navigate([],{queryParams})
  }

}
