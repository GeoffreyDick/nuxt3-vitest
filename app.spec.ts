import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";

describe("pages", async () => {
  await setup({
    rootDir: fileURLToPath(new URL(".", import.meta.url)),
    server: true
  });

  it("render index", async () => {
    const html = await $fetch("/");
    expect(html).toContain("Hello world");
  });
});
