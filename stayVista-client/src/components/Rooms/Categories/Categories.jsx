import Container from "../../Shared/Container";
import { CategoriesData } from "./CategoriesData";
import CategoryBox from "./CategoryBox";


const Categories = () => {
    return (
        <Container>
            <div className="pt-4 flex items-center justify-between overflow-x-auto">
                {CategoriesData.map(category => <CategoryBox
                key={category.label} label={category.label} icon={category.icon}></CategoryBox>)}
            </div>
        </Container>

    );
};

export default Categories;