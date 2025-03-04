import { jest } from "@jest/globals";
import { ref } from "vue";
import localListHelper, { setup, listLocals } from "../helpers/localListHelper";
import locals from "../remote/locals";

await jest.unstable_mockModule("../remote/locals", () => ({
    getLocals: jest.fn({ ok: true }),
}));
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

describe("No arquivo localListHelper,", () => {
    test("a funçao setup deve chamar a função getLocals e retornar os objetos de referência", async () => {
        jest.spyOn(localListHelper, "listLocals");
        const loaded = ref(false);
        const localList = ref(null);
        const response = await setup(loaded, localList);
        expect(response.loaded.value).toBe(false);
        expect(response.localList.value).toBe(null);
        expect(response.confirmation.value).toBe(false);
        expect(response.local_id.value).toBe(null);
    });
});
