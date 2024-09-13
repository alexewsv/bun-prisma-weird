import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function task(username: string) {
  const user = await prisma.user.findFirst({
    where: {
      username,
    },
  });
  console.log("🚀 ~ task ~ user:", user);
}

async function run() {
  const list = [1, 2, 3, 4, 5];

  for (const item of list) {
    console.log("item", item, new Date().toISOString());
    // await sleep(1000);

    // if commented out one line above (21) then bun works as expected

    await task("u001");
  }
}

async function main() {
  await run();
}

main()
  .then(() => {
    console.log("then");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
