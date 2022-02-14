import { distinct } from "../Utils/Filter";

  test("Should remove same authors", () => {
    const array = [
      { from_name: "Lashanda Small" },
      { from_name: "Regenia Boice" },
      { from_name: "Regenia Boice" },
    ];
    const result = [
      { from_name: "Lashanda Small" },
      { from_name: "Regenia Boice" },
    ];
    expect(distinct(array)).toEqual(result);
});
