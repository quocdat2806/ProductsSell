import Navbar from "../../layout/DefaultLayout/Navbar";
import IndexModule from "../IndexModule";
import TracksWrapper from "../TrackWrapper";
const ModuleGrid = IndexModule["index-module-grid"]

function LessonDetail() {
    return ( 
        <ModuleGrid>
            <Navbar>

            </Navbar>
            <TracksWrapper/>
        </ModuleGrid>
     );
}

export default LessonDetail;