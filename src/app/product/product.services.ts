import { Observable, of } from 'rxjs';
import { PRODUCTS } from './product.mock';
import { ProductStructure } from './product.component';

export class ProductService {
    getCalcServices(){
        return 'ServicesCalcGettingByComponent!';
    }

    getProducts(): Observable<ProductStructure[]> {
        return of(PRODUCTS);
      }
}