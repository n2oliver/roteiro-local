import { setup } from "../helpers/toolbarHelper";

describe("No arquivo toolbarHelper,", () => {
    test("a função setup deve retornar um objeto contendo modal_form_add_local, uma ref com valor false", () => {
        expect(setup().modal_form_add_local.value).toBe(false)
    });
})