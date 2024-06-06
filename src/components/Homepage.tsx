import MovingTextSection from "./sections/MovingTextSection";
import GridSection from "./sections/GridSection";

const Homepage = () => {
    return (
        <div className="container-lg">
            <div className="container-sm">
                <p className="text-center pt-16">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni eos beatae unde saepe voluptate tempore facilis dicta dolore consequatur temporibus! Doloribus beatae rem fugit amet harum quia, officiis ad veritatis?</p>
            </div>
            <MovingTextSection></MovingTextSection>
            <GridSection></GridSection>
        </div>

    );
};

export default Homepage;
