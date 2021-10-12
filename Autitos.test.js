import {Autito} from "./Autitos";
describe("Posicion inicial ", () => {
    it("deberia retornar la posicion inicial", () => {
      expect(Autito("5,5")).toEqual(0,0);
    });
  });
