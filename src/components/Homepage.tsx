import GridSection from "./sections/GridSection";
import { videos } from "../data/videos";

const Homepage = () => {
    return (
        <div className="container-xl">
            <div className="container-sm">
            <p className="text-center text-balance pt-8 pb-8">Un video-diario dei miei viaggi, avventure e qualche esperimento di videomaking. </p>
            </div>
            <GridSection videos={videos}></GridSection>
        </div>

    );
};

export default Homepage;
