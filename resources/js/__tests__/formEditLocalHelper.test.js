import { jest } from "@jest/globals";
import { atualizarLocal } from "../helpers/formEditLocalHelper";

global.document = {
    querySelector: () => {
        return {
            getAttribute: jest.fn(),
            closest: jest.fn(),
        };
    },
};
global.fetch = () => {
    return { ok: true }
};
global.$q = {
    notify: jest.fn(),
};
describe("No arquivo formEditLocalHelper,", () => {
    test("o método atualizarLocal deve retornar verdadeiro", async () => {
        const result = await atualizarLocal({
                name: "Liberty Statue",
                slug: "liberty-statue",
                city: "Nova York",
                state: "Nova York",
                $q,
                $emit: jest.fn(),
                resetForm: jest.fn(),
            }, () => { console.log("Callback chamado"); });
        expect(result).toBe(true);
    });
})