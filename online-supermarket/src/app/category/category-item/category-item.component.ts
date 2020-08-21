import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../model/category.model';
import {DomSanitizer} from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  constructor(public _DomSanitizationService: DomSanitizer, private route: ActivatedRoute, private router: Router) { }
  @Input()
  category: Category;
  image: any;

  ngOnInit(): void {
    let objectURL = 'data:image/jpeg;base64,' + this.category.categoryImage;
    this.image = this._DomSanitizationService.bypassSecurityTrustUrl(objectURL);
  }

  onCategorySelected(id: number) {
    this.router.navigate(['/products/byCategory/', id])
  }

}
