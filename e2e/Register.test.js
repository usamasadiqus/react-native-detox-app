import { sleepForSeconds } from "./helper";

const TIMEOUT = 15000;

describe("Register Flow", () => {
  beforeAll(async () => {
    await device.launchApp({ clean: true });
  });

  it("should register a new user and land on Home screen", async () => {
    await element(by.id("register_nav")).tap();

    await waitFor(element(by.id("name")))
      .toBeVisible()
      .withTimeout(TIMEOUT);

    await element(by.id("name")).typeText("Test User\n");
    await element(by.id("email")).typeText("newuser@yopmail.com\n");
    await element(by.id("password")).typeText("newpassword123\n");

    await sleepForSeconds(0.5);

    await element(by.text("Sign Up")).tap();

    await waitFor(element(by.id("home")))
      .toBeVisible()
      .withTimeout(TIMEOUT);

    await expect(element(by.id("home"))).toBeVisible();
  });
});
