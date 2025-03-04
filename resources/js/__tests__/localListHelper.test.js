import { jest } from "@jest/globals";
import { ref } from "vue";
import localListHelper, { setup, listLocals } from "../helpers/localListHelper";
import moment from "moment";

global.document = {
    querySelector: () => {
        return {
            getAttribute: jest.fn(),
            closest: jest.fn(),
        };
    },
};
global.fetch = () => {
    return {
        ok: true,
        then: () => {
            return { catch: jest.fn() };
        },
    };
};
global.$q = {
    notify: jest.fn(),
};
const loaded = ref(false);
const localList = ref(null);

describe("No arquivo localListHelper,", () => {
    test("a funçao setup deve retornar os objetos de referência", async () => {
        const response = await setup(loaded, localList);

        expect(response.loaded.value).toBe(false);
        expect(response.localList.value).toBe(null);
        expect(response.confirmation.value).toBe(false);
        expect(response.local_id.value).toBe(null);
    });
    test("a propriedade methods deve retornar um objeto com as funçoes moment e capitalizeFirstLetter", () => {
        expect(new Date(localListHelper.methods.moment())).toBeInstanceOf(Date);
        expect(localListHelper.methods.capitalizeFirstLetter("word")).toBe("Word");
    });
    test("a funcao data deve retornar um objeto com a propriedade mostrarFormulario igual a false", () => {
        expect(localListHelper.data()).toEqual({ mostrarFormulario: false });
    });
    test("a funcao listLocals deve ser chamada", () => {
        const spy = jest.spyOn(localListHelper, "listLocals");
        localListHelper.listLocals(loaded, localList);
        expect(spy).toHaveBeenCalled();
    })
});
