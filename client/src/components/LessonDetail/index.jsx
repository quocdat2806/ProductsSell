import Navbar from "../../layout/DefaultLayout/Navbar";
import IndexModule from "../IndexModule";
import Tracks from "../Tracks";
import TracksWrapper, { TrackOverlay } from "../Tracks";
const ModuleGrid = IndexModule["index-module-grid"]

function LessonDetail() {
    return ( 
        <ModuleGrid>
            <Navbar>

            </Navbar>
            <Tracks/>
            <TrackOverlay/>
            {/* <ContentWrapper/> */}
        </ModuleGrid>
     );
}

export default LessonDetail;