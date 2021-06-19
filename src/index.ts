import { User } from "./components/User";
import { Company } from "./components/Company";
import { CustomMap } from "./blackBox/CustomMap";

const user = new User();
const company = new Company();
const map = new CustomMap("map");

console.log("User: ", user);
console.log("Company: ", company);

map.addMarker(user);
map.addMarker(company);
