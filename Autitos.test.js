import {Autito} from "./Autitos";
describe("Autitos ", () => {
    it("deberia retornar la posicion inicial", () => {
      expect(Autito("5,5")).toEqual("0,0");
    });
    it("deberia retornar la posicion inicial reconociendo la matriz de entrada", () => {
      expect(Autito("5,5")).toEqual("0,0");
    });
    it("deberia retornar la posicion inicial especificada en la cadena", () => {
      expect(Autito("5,5/1,2")).toEqual("1,2");
    });
    it("deberia retornar la posicion inicial con la orientación especificada en la cadena", () => {
      expect(Autito("5,5/1,2 N")).toEqual("1,2 N");
    });
    it("deberia retornar la posicion inicial con la orientación especificada y cambiada por el comando de movimiento", () => {
      expect(Autito("5,5/1,2 N/I")).toEqual("1,2 O");
    });
    it("deberia retornar la posicion inicial con la orientación especificada y cambiada por el comando de movimiento", () => {
      expect(Autito("5,5/1,2 N/III")).toEqual("1,2 E");
    });
    it("deberia retornar la posicion inicial con la orientación especificada y cambiada por el comando de movimiento", () => {
      expect(Autito("5,5/1,2 N/IDDD")).toEqual("1,2 S");
    });
    it("deberia retornar la posición actualizada luego de avanzar", () => {
      expect(Autito("5,5/1,2 N/IAIAIAIAA")).toEqual("1,3 N");
    });
    it("deberia retornar la posición actualizada luego de avanzar", () => {
      expect(Autito("5,5/4,3 S/DADAIAAIAIA")).toEqual("2,3 E");
    });
  });
