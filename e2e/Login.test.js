import { sleepForSeconds } from "./helper";

const TIMEOUT = 15000;

describe("Login Flow", () => {
  beforeAll(async () => {
    await device.launchApp({ clean: true });
  });

  it("should log in a user and land on Home screen", async () => {
    await waitFor(element(by.id("email")))
      .toBeVisible()
      .withTimeout(TIMEOUT);

    await element(by.id("email")).typeText("newuser@yopmail.com\n");
    await element(by.id("password")).typeText("newpassword123\n");

    await sleepForSeconds(0.5);

    await element(by.text("Sign In with Email")).tap();

    await waitFor(element(by.id("home")))
      .toBeVisible()
      .withTimeout(TIMEOUT);

    await expect(element(by.id("home"))).toBeVisible();
  });
});
