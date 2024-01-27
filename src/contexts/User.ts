import { createContext } from "react";
import { User } from "../components/Card/component";

export const UserContext = createContext<User | undefined>(undefined);