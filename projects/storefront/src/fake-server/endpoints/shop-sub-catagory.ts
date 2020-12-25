import { Observable, of } from 'rxjs';
import { shopSubCatagories } from '../database/shop-sub-catagory';
import { ShopCategory } from '../../app/interfaces/category';

export function getShopCatagories(mainCataId: number): Observable<ShopCategory[]> {
    return of(shopSubCatagories.filter( s => s.mainCategoryId == mainCataId));
}