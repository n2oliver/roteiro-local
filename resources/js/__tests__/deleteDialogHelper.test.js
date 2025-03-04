import { jest } from "@jest/globals";
import { useQuasar } from "quasar";
import { deleteLocalHelper } from "../helpers/deleteDialogHelper";
import locals from "../remote/locals";

await jest.unstable_mockModule("../remote/locals", () => ({
    deleteLocal: jest.fn({ ok: true }),
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

describe("No arquivo deleteDialogHelper,", () => {
    test("a funçao deleteLocalHelper deve chamar a função deleteLocal", async () => {
        jest.spyOn(locals, "deleteLocal");
        const response = await deleteLocalHelper({ local_id: 1 }, $q);
        expect(response.ok).toBe(true);
    });
});
