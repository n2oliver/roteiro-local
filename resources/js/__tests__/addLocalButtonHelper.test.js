import { data, setup } from "../helpers/addLocalButtonHelper";

describe("No arquivo addLocalButtonHelper,", () => {
    test("a função data deve retornar um objeto contendo mostrarFormulario igual a false", () => {
        expect(data().mostrarFormulario).toBe(false);
    });
    test("a função setup deve retornar um objeto contendo local_id, uma ref com o valor null", () => {
        expect(setup().local_id.value).toBe(null);
    });
});
