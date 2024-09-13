import { prisma } from "..";

async function main() {
  const user = await prisma.user.create({
    data: {
      username: "u001",
    },
  });

  const profiles = ["Doctor", "Lawyer", "Teacher", "Engineer", "Artist", "Musician", "Chef"];

  for (const profile of profiles) {
    await prisma.profile.create({
      data: {
        bio: profile,
        userId: user.id,
      },
    });
  }
}

main();
