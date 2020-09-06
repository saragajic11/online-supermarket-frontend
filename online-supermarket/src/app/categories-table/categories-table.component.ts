import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category.model';
import { Subcategory } from '../model/subcategory.model';
import { CategoryService } from '../service/category.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../shared/delete-dialog/delete-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-table',
  templateUrl: './categories-table.component.html',
  styleUrls: ['./categories-table.component.css']
})
export class CategoriesTableComponent implements OnInit {

  constructor(private categoryService: CategoryService, public dialog: MatDialog, private toastrService: ToastrService, private router: Router) { }
  categories: Category[];
  subcategories: Subcategory[];
  dataSource;
  displayedColumns: string[] = ['position', 'name'];

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(categoires => {
      this.categories = categoires;
    })
  }

  onClickStopPropagation(event: any) {
    event.stopPropagation();
  }

  onEditCategory(id: number) {
    this.router.navigate(['categories/edit/' + id]);
  }

  onDeleteCategory(id: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onDeleteCategoryClicked(id);
      }
    });
  }

  onDeleteCategoryClicked(id: number) {
    this.categoryService.deleteCategory(id).subscribe(()=> {
      this.ngOnInit();
      this.toastrService.success("Category successfully deleted");
    }, error=> {
      this.toastrService.error("Error while deleting category");
    })
  }

  openedCategory(id: number) {
    this.categoryService.getCategoryById(id).subscribe(category => {
      this.subcategories = category.subcategoryDtos;
      //mozda dodati dijalog ako nema subcategorija
      this.dataSource = new MatTableDataSource(this.subcategories);
    })
  }

  onAddNewCategory() {
    this.router.navigate(['/categories/new']);
  }

}
