import ProductItem from "./product-litem";
import { Prisma } from "@prisma/client";

interface ProductListProps {
    products: Prisma.ProductGetPayload<{
        include: {
            restaurant: {
                select: {
                    name: true,
                }
            }
        }
    }>[]
}

const ProductList = async ({products}:ProductListProps) => {
    
    return (   
        <div className="flex gap-4 overflow-x [&::-webkit-scrollbar]:hidden px-5">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
     );
}
 
export default ProductList;