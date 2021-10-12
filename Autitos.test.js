import {Autito} from "./Autitos";
describe("Autitos ", () => {
    // it("deberia retornar la posicion inicial", () => {
    //   expect(Autito("5,5")).toEqual(0,0);
    // });
    // it("deberia retornar la posicion inicial reconociendo la matriz de entrada", () => {
    //   expect(Autito("5,5")).toEqual(0,0);
    // });
    it("deberia retornar la posicion inicial especificada en la cadena", () => {
      expect(Autito("5,5/1,2")).toEqual(1,2);
    });
  });
