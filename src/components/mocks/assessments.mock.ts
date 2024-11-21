import { Assessment } from "../../types/assement.type";

const createUuid = new Date().getMilliseconds().toString();

// export const assessmentsMock: Assessment[] = [
//   {
//     id: createUuid,
//     name: "twitter1",
//     description: "twitter1",
//     createdAt: new Date().toISOString(),
//     updatedAt: new Date().toISOString(),

//   },
// ];

export const assessmentsMock: Assessment[] = Array.from({ length: 10 }, (_,  index) => ({
  id: createUuid,
  name: `twitter1 ${index + 1}`,
  description: `twitter1 ${index + 1}`,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}));
