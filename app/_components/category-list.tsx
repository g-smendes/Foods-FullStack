import { db } from "../_lib/prisma";
import CategoryItem from "./category-items";

const CategoryList = async() => {
    const categories = await db.category.findMany({})


    //pegar as categorias do banco de dados
    //rederizar um item para cada categoria
    return (  
        <div className="grid grid-cols-2 gap-3">
        {categories.map((category) => 
        <CategoryItem key={category.id} category={category} />
        )}
        </div>
    );
};
 
export default CategoryList;