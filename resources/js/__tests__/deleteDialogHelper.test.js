import { jest } from "@jest/globals";
import { deleteLocalHelper } from "../helpers/deleteDialogHelper";
import locals from "../remote/locals";

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
        const spy = jest.spyOn(locals, 'deleteLocal');
        const response = await deleteLocalHelper({ local_id: 1 }, $q);
        locals.deleteLocal(1);

        expect(response.ok).toBe(true);
        expect(spy).toHaveBeenCalled();

    });
});
