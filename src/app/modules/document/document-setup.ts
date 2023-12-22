import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import Margin from "./margin";
import Orientation from "./orientation.enum";
import SectionSetup from "./section-setup";
import PageSizes from "./page-size";

export default class DocumentSetup extends SectionSetup {
    pageSize:PageSizes=PageSizes.A4;
}