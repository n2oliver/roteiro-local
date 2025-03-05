import { jest } from "@jest/globals";
import { data } from "../helpers/formAddLocalHelper";

global.$q = {
    notify: jest.fn(),
};
describe("No arquivo formAddLocalHelper,", () => {
    test("o método data deve retornar o objeto contendo os dados do formulario, vazios por padrão", () => {
        const result = data($q);

        expect(result.name).toBe('');
        expect(result.slug).toBe('');
        expect(result.city).toBe('');
        expect(result.state).toBe('');
        expect(result.$q).toBe($q);
    });
})