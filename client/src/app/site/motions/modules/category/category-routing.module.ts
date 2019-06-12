import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryMotionsSortComponent } from './components/category-motions-sort/category-motions-sort.component';
import { WatchSortingTreeGuard } from 'app/shared/utils/watch-sorting-tree.guard';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { CategoriesSortComponent } from './components/categories-sort/categories-sort.component';

const routes: Routes = [
    { path: '', component: CategoryListComponent, pathMatch: 'full' },
    { path: ':id/sort', component: CategoryMotionsSortComponent, canDeactivate: [WatchSortingTreeGuard] },
    { path: 'sort', component: CategoriesSortComponent, canDeactivate: [WatchSortingTreeGuard] },
    { path: ':id', component: CategoryDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoryRoutingModule {}
